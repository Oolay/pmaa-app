import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import {isSamePmaa, replacePmaa, MinMax, makeRandomHexColor, makeStatusTextColor } from '../../utils'

import { pmaaData, Pmaa } from '../../data/pmaaDetails'

import ActionButtons, { ACTION_BUTTONS_HEIGHT } from './ActionButtons'
import Graph, { GRAPH_HEIGHT, GRAPH_WIDTH, GRAPH_MARGIN } from './Graph'
import PmaaGrid from './PmaaGrid'

const GRAPH_CONTAINER_HEIGHT =  GRAPH_HEIGHT + ACTION_BUTTONS_HEIGHT + GRAPH_MARGIN.top + GRAPH_MARGIN.bottom

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
    },
    graphContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
        height: GRAPH_CONTAINER_HEIGHT,
        width: GRAPH_WIDTH + GRAPH_MARGIN.left + GRAPH_MARGIN.right,
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: `calc(100% - ${GRAPH_CONTAINER_HEIGHT}px)`,
        overflowY: 'scroll',
        marginTop: '16px',
    },
    emptyTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.5px dashed grey',
        padding: '16px',
        flex: 1,
    },
    legendContainer: {
        textAlign: 'center',
        fontSize: '12px',
        overflowy: 'scroll',
        flex: 1,
    },
    legendItem: {
        display: 'inline-block',
        borderRadius: '6px',
        border: '1px solid #d3d3d3',
        margin: '2px',
        padding: '1px',
        width: '90px',
        "&:hover": {
            backgroundColor: '#d3d3d3',
        },
    },
})

type DataSetZoomHistory = Pmaa[]

const Visualiser: React.FC = () => {
    const classes = useStyles({})
    const [graphData, setGraphData] = useState<DataSetZoomHistory[]>([])
    const [selectedPmaas, setSelectedPmaas] = useState<Pmaa[]>([])
    const [rawPmaaData, setRawPmaaData] = useState(pmaaData)

    const isPmaaSelected = (selectedPmaa: Pmaa) => (
        selectedPmaas.some(pmaa => isSamePmaa(selectedPmaa, pmaa))
    )
 
    const handleItemClick = (selectedPmaa: Pmaa) => () => {
        if (isPmaaSelected(selectedPmaa)) {
            setSelectedPmaas((prevSelected) => (
                prevSelected.filter(pmaa => !isSamePmaa(selectedPmaa, pmaa))
            ))
        } else {
            setSelectedPmaas(prevSelected => [...prevSelected, selectedPmaa])
        }
    }

    useEffect(() => {
        setGraphData([selectedPmaas])
    }, [selectedPmaas])
    
    const getLatestZoomData = (graphData: DataSetZoomHistory[]) => graphData[graphData.length - 1] || []

    const handleDataZoom = ({ minX, maxX, maxY }: Omit<MinMax, 'minY'>) => {
        const latestData = getLatestZoomData(graphData)
        const newData = latestData
            .map(pmaa => ({
                ...pmaa,
                data: pmaa
                    .data
                    .filter(({ x }) => x >= minX && x <= maxX)
                    .map(({ x, y }) => ({ x, y: y > maxY ? maxY : y }))
            }))
        
        setGraphData(prevState => [...prevState, [...newData]])
    }

    const handlePmaaColorChange = (pmaa: Pmaa) => () => {
        const newPmaa = {
            ...pmaa,
            color: makeRandomHexColor()
        }

        setSelectedPmaas(prevSelected => replacePmaa(prevSelected, newPmaa))

        setRawPmaaData(prevRawData => prevRawData.map(group => {
            if (group.groupName === newPmaa.groupName) {
                return {
                    ...group,
                    items: replacePmaa(group.items, newPmaa)
                }
            }

            return group
        }))
    }

    const handleRefreshView = () => {
        setGraphData(prevState => prevState.slice(0, 1))
    }

    const handleDataZoomBack = () => {
        if (graphData.length > 1) {
            setGraphData(prevState => prevState.slice(0, prevState.length - 1))
        }
    }

    const handleDataClear = () => {
        setSelectedPmaas([])
    }

    const showGraph = graphData.length > 0 && graphData.some(dataSets => dataSets.length > 0)

    return (
        <div className={classes.container}>
            <div className={classes.graphContainer}>
                {
                    showGraph ? (
                        <>
                            <ActionButtons
                                onDataZoomBack={handleDataZoomBack}
                                onRefreshView={handleRefreshView}
                                onClearView={handleDataClear}
                            />
                           <Graph
                                dataSets={getLatestZoomData(graphData)}
                                onDataZoom={handleDataZoom}
                            />
                            <div className={classes.legendContainer}>
                                {selectedPmaas.map(pmaa => {
                                    return (
                                        <div
                                            key={`${pmaa.linkage}-${pmaa.name}`}
                                            className={classes.legendItem}
                                            style={{
                                                backgroundColor: `${pmaa.color}`,
                                                color: makeStatusTextColor(pmaa.color)
                                            }}
                                            onClick={handlePmaaColorChange(pmaa)}
                                        >
                                            {`${pmaa.linkage}-${pmaa.name}`}
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    ) : (
                        <div className={classes.emptyTextContainer}>
                            Click any number of PMAAs to see their electron-impact mass spectrum (EI-MS)
                        </div>
                    )
                }
            </div>
            <div className={classes.gridContainer}>
                {
                    rawPmaaData.map(groupData => {
    
                        const columns = new Set(groupData.items.map(item => item.name))
                        const rows = new Set(groupData.items.map(item => item.linkage))
    
                        return (
                            <PmaaGrid
                                key={groupData.groupName}
                                pmaaGroup={groupData}
                                columns={Array.from(columns)}
                                rows={Array.from(rows)}
                                selectedPmaas={selectedPmaas}
                                onPmaaClick={handleItemClick}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Visualiser
