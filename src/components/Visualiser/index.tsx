import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import mockData from '../../utils/getMockData'

import ActionButtons from './ActionButtons'
import Graph, { DataPoint } from './Graph'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
})

const Visualiser: React.FC = () => {
    const classes = useStyles({})
    const [graphData, setGraphData] = useState<DataPoint[][]>([mockData(200)])

    const getLatestZoomData = (graphData: DataPoint[][]) => graphData[graphData.length - 1]

    const onDataZoom = (xMin: number, xMax: number) => {
        const latestData = getLatestZoomData(graphData)
        const newData = latestData.filter(({ x }) => x >= xMin && x <= xMax)

        setGraphData(prevState => [...prevState, newData])
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
                data={getLatestZoomData(graphData)}
                onDataZoom={onDataZoom}
            />
        </div>
    )
}

export default Visualiser
