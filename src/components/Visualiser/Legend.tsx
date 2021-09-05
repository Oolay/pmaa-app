import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { makeStatusTextColor } from '../../utils'
import { Pmaa } from '../../data/pmaaDetails'


const useStyles = makeStyles({
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
    }
})

interface Props {
    pmaas: Pmaa[]
    handlePmaaColorChange: (pmaa: Pmaa) => void
}

export const Legend: React.FC<Props> = ({ pmaas, handlePmaaColorChange }) => {
    const classes = useStyles()
    
    return (
        <div className={classes.legendContainer}>
            {pmaas.map(pmaa => {
                return (
                    <div
                        key={`${pmaa.linkage}-${pmaa.name}`}
                        className={classes.legendItem}
                        style={{
                            backgroundColor: `${pmaa.color}`,
                            color: makeStatusTextColor(pmaa.color)
                        }}
                        onClick={() => handlePmaaColorChange(pmaa)}
                    >
                        {`${pmaa.linkage}-${pmaa.name}`}
                    </div>
                )
            })}
        </div>
    )
}
