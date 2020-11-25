import React from 'react'
import { makeStyles } from '@material-ui/styles'

import mockData from '../../utils/getMockData'

import Graph from './Graph'

const useStyles = makeStyles({
    container: {
        padding: '2rem',
    }
})

const Visualiser: React.FC = () => {
    const classes = useStyles({})

    return (
        <div className={classes.container}>
            <Graph data={mockData(200)} />
        </div>
    )
}

export default Visualiser
