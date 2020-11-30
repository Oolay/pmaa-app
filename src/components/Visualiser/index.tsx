import React from 'react'
import { makeStyles } from '@material-ui/styles'

import mockData from '../../utils/getMockData'

import Graph from './Graph'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        border: '1px solid black',
        padding: '2rem',
    }
})

const Visualiser: React.FC = () => {
    const classes = useStyles({})

    return (
        <div>
            <Graph data={mockData(200)} />
        </div>
    )
}

export default Visualiser
