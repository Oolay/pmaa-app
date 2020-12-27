import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import mockData from '../../utils/getMockData'

import Graph, { DataPoint } from './Graph'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        border: '1px solid black',
        padding: '2rem',
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
        <div>
            <button onClick={onRefreshView}>refesh view</button>
            <button onClick={onDataZoomBack}>back</button>
            <Graph
                data={getLatestZoomData(graphData)}
                onDataZoom={onDataZoom}
            />
        </div>
    )
}

export default Visualiser
