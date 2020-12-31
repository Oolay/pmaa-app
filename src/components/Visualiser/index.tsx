import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import { MinMax } from '../../utils/minMax'

import pmaaData, { Pmaa } from '../../data/pmaaDetails'
import colors from '../../data/dataSetColors'

import ActionButtons from './ActionButtons'
import Graph, { DataSet } from './Graph'
import PmaaList from './Grid'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
})

type DataSetZoomHistory = Pmaa[]

const Visualiser: React.FC = () => {
    const classes = useStyles({})
    const [graphData, setGraphData] = useState<DataSetZoomHistory[]>([])
    const [selectedPmaas, setSelectedPmaas] = useState<number[]>([])

    const isPmaaSelected = (id: number) => selectedPmaas.some(selectedId => selectedId === id)
  
    const onCardClick = (id: number) => () => {
        if (isPmaaSelected(id)) {
            setSelectedPmaas(prevSelected => prevSelected.filter(selectedId => selectedId !== id))
        } else {
            setSelectedPmaas(prevSelected => [...prevSelected, id])
        }
    }

    useEffect(() => {
        setGraphData([pmaaData.filter(data => selectedPmaas.some(id => id === data.id))])
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

    return (
        <div className={classes.container}>
            <ActionButtons
                onDataZoomBack={onDataZoomBack}
                onRefreshView={onRefreshView}
            />
            <Graph
                dataSets={getLatestZoomData(graphData)}
                onDataZoom={onDataZoom}
            />
            <PmaaList
                pmaas={pmaaData}
                selectedPmaas={selectedPmaas}
                onPmaaClick={onCardClick}
            />
        </div>
    )
}

export default Visualiser
