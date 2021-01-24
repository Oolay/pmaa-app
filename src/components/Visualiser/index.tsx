import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import { MinMax } from '../../utils/minMax'

import { pmaaData, Pmaa } from '../../data/pmaaDetails'

import ActionButtons from './ActionButtons'
import Graph, { GRAPH_HEIGHT, GRAPH_WIDTH } from './Graph'
import PmaaGrid from './PmaaGrid'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    emptyTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: GRAPH_HEIGHT + 24, // add action icon height
        width: GRAPH_WIDTH,
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

    const showGraph = graphData.length > 0 && graphData.some(dataSets => dataSets.length > 0)

    return (
        <div className={classes.container}>
            {
                showGraph && (
                    <ActionButtons
                        onDataZoomBack={onDataZoomBack}
                        onRefreshView={onRefreshView}
                    />
                )
            }
            {
                showGraph && (
                    <Graph
                        dataSets={getLatestZoomData(graphData)}
                        onDataZoom={onDataZoom}
                    />
                )
            }
            {
                !showGraph && (
                    <div className={classes.emptyTextContainer}>
                        Click any number of PMAAs to see their electron-impact mass spectrum (EI-MS)
                    </div>
                )
            }
            <PmaaGrid
                pmaaGroup={pmaaData[0]}
                columns={['Galp', 'Glcp', 'Manp', 'Fucp', 'Rhap', 'GalpNAc', 'GlcpNAc', 'ManpNAc']}
                rows={['T', '2', '3', '4', '6']}
                selectedPmaas={selectedPmaas}
                onPmaaClick={onItemClick}
            />
        </div>
    )
}

export default Visualiser
