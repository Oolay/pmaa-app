import React, { useState } from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { Pmaa } from '../../data/pmaaDetails'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        width: '75%',
    },
    gridHeader: {
        paddingBottom: '5px',
    },
    columnItem: {
        display: 'flex',
        justifyContent: 'center',
    },
    rowItem: {
        display: 'flex',
        justifyContent: 'center',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '6px',
        border: '1px solid #d3d3d3',
        margin: '2px',
        padding: '1px',
        "&:hover": {
            backgroundColor: '#d3d3d3',
        },
    },
})

interface PmaaGroup {
    groupName: string
    items: Pmaa[]
}

interface Props {
    pmaaGroup: PmaaGroup
    columns: string[]
    rows: string[]
    selectedPmaas: string[]
    onPmaaClick: (id: string) => () => void
}

const PmaaList: React.FC<Props> = ({ pmaaGroup, columns, rows, selectedPmaas, onPmaaClick }) => {
    const classes = useStyles({})
    const isPmaaSelected = (id: string) => selectedPmaas.some(selectedId => selectedId === id)

    const getHeader = () => (
        <>
            <Grid item xs={1}>
                <div/>
            </Grid>
            {columns.map(col => (
                <Grid item xs={1}>
                    <div className={classes.columnItem}>
                        <Typography noWrap>
                            {col}
                        </Typography>
                    </div>
                </Grid>
            ))}
        </>
    )

    const getRow = (pmaas: Pmaa[]) =>  (
        <>
            {
                <Grid xs={1}>
                    <div className={classes.rowItem}>
                        <Typography noWrap>
                            {pmaas[0].linkage}
                        </Typography>
                    </div>
                </Grid>
            }
            {
                pmaas.map((pmaa) => {
                    const id = `${pmaaGroup.groupName}:${pmaa.name}:${pmaa.linkage}`

                    return (
                        <Grid item xs={1}>
                            <div
                                className={classes.item}
                                style={isPmaaSelected(id) ? {backgroundColor: `${pmaa.color}`} : {}}
                                onClick={onPmaaClick(id)}
                            >
                                &nbsp;
                            </div>
                        </Grid>
                        )
                    }
                )
            }
        </>
    )
    

    return (
        <div className={classes.container}>
            <div className={classes.gridHeader}>
                <Typography variant='subtitle1'>
                    {pmaaGroup.groupName}
                </Typography>
            </div>
            <Grid container>
                {getHeader()}
                {rows.map(row => {
                    const items = pmaaGroup.items.filter(item => item.linkage === row)

                    return (
                        <Grid container>
                            {getRow(items)}
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default PmaaList
