import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import { MinMax } from '../../utils/minMax'

import { pmaaData, Pmaa } from '../../data/pmaaDetails'

import ActionButtons, { ACTION_BUTTONS_HEIGHT } from './ActionButtons'
import Graph, { GRAPH_HEIGHT, GRAPH_WIDTH, GRAPH_MARGIN } from './Graph'
import PmaaGrid from './PmaaGrid'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        padding: '10px',
    },
    graphContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: GRAPH_HEIGHT + ACTION_BUTTONS_HEIGHT + GRAPH_MARGIN.top + GRAPH_MARGIN.bottom,
        width: GRAPH_WIDTH + GRAPH_MARGIN.left + GRAPH_MARGIN.right,
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: `calc(100% - ${GRAPH_HEIGHT + ACTION_BUTTONS_HEIGHT}px)`,
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
    }
})

type DataSetZoomHistory = Pmaa[]

const Visualiser: React.FC = () => {
    const classes = useStyles({})
    const [graphData, setGraphData] = useState<DataSetZoomHistory[]>([])
    const [selectedPmaas, setSelectedPmaas] = useState<string[]>([])

    const isPmaaSelected = (id: string) => selectedPmaas.some(selectedId => selectedId === id)
  
    const onItemClick = (id: string) => () => {
        if (isPmaaSelected(id)) {
            setSelectedPmaas(prevSelected => prevSelected.filter(selectedId => selectedId !== id))
        } else {
            setSelectedPmaas(prevSelected => [...prevSelected, id])
        }
    }

    const getGraphData = (pmaaId: string) => {
        const [group, name, linkage] = pmaaId.split(':')

        const data = pmaaData
            .find(groupData => groupData.groupName === group)
            ?.items
            .find(groupItem => groupItem.name === name && groupItem.linkage === linkage)

        return data
    }

    useEffect(() => {
        const dataSets = selectedPmaas
            .reduce((dataSets, selectedPmaaId) => {
                const graphData = getGraphData(selectedPmaaId)

                if (graphData) {
                    return [...dataSets, graphData]
                }

                return dataSets
            }, [] as Pmaa[])

        setGraphData([dataSets])
    }, [selectedPmaas])
    
    const getLatestZoomData = (graphData: DataSetZoomHistory[]) => graphData[graphData.length - 1] || []

    const onDataZoom = ({ minX, maxX, maxY }: Omit<MinMax, 'minY'>) => {
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

    const onRefreshView = () => {
        setGraphData(prevState => prevState.slice(0, 1))
    }

    const onDataZoomBack = () => {
        if (graphData.length > 1) {
            setGraphData(prevState => prevState.slice(0, prevState.length - 1))
        }
    }

    const onDataClear = () => {
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
                                onDataZoomBack={onDataZoomBack}
                                onRefreshView={onRefreshView}
                                onClearView={onDataClear}
                            />
                           <Graph
                                dataSets={getLatestZoomData(graphData)}
                                onDataZoom={onDataZoom}
                            />
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
                    pmaaData.map(groupData => {
    
                        const columns = new Set(groupData.items.map(item => item.name))
                        const rows = new Set(groupData.items.map(item => item.linkage))
    
                        return (
                            <PmaaGrid
                                pmaaGroup={groupData}
                                columns={Array.from(columns)}
                                rows={Array.from(rows)}
                                selectedPmaas={selectedPmaas}
                                onPmaaClick={onItemClick}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Visualiser
