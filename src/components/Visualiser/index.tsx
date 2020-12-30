import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import mockData from '../../utils/getMockData'
import { MinMax } from '../../utils/minMax'

import ActionButtons from './ActionButtons'
import Graph, { DataPoint, DataSet } from './Graph'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
})

type DataSetZoomHistory = DataSet[]

const Visualiser: React.FC = () => {
    const classes = useStyles({})
    const mockDataSet = mockData(200)
    const [graphData, setGraphData] = useState<DataSetZoomHistory[]>([[mockDataSet, mockDataSet.map(({x, y}) => ({ x, y: y - 20 > 0 ? y - 20 : 0 }))]])

    const getLatestZoomData = (graphData: DataSetZoomHistory[]) => graphData[graphData.length - 1]

    const onDataZoom = ({ minX, maxX, maxY }: Omit<MinMax, 'minY'>) => {
        const latestData = getLatestZoomData(graphData)
        const newData = latestData
            .map(dataSet => dataSet
                .filter(({ x }) => x >= minX && x <= maxX)
                .map(({ x, y }) => ({ x, y: y > maxY ? maxY : y }))
            )
        
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
        </div>
    )
}

export default Visualiser
