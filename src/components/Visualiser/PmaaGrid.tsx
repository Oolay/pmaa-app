import React, { useState } from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { Pmaa } from '../../data/pmaaDetails'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        padding: '10px',
    },
    gridHeader: {
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    columnTitleItem: {
        display: 'flex',
        justifyContent: 'center',
        width: '80px'
    },
    rowtitleItem: {
        display: 'flex',
        justifyContent: 'center',
        width: '80px'

    },
    contentItem: {
        borderRadius: '6px',
        border: '1px solid #d3d3d3',
        margin: '2px',
        padding: '1px',
        width: '80px',
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
        <tr>
            <th>
                <div className={classes.columnTitleItem}>
                    Linkage
                </div>
            </th>
            {columns.map(col => (
                <th>
                    <div className={classes.columnTitleItem}>
                        <Typography noWrap>
                            {col}
                        </Typography>
                    </div>
                </th>
            ))}
        </tr>
    )

    const getRow = (pmaas: Pmaa[]) =>  (
        <tr>
            {
                <td>
                    <div className={classes.rowtitleItem}>
                        {pmaas[0].linkage}
                    </div>
                </td>
            }
            {
                pmaas.map((pmaa) => {
                    const id = `${pmaaGroup.groupName}:${pmaa.name}:${pmaa.linkage}`

                    return (
                        <td>
                            <div
                                className={classes.contentItem}
                                style={isPmaaSelected(id) ? {backgroundColor: `${pmaa.color}`} : {}}
                                onClick={onPmaaClick(id)}
                            >
                                &nbsp;
                            </div>
                        </td>
                        )
                    }
                )
            }
        </tr>
    )
    

    return (
        <div className={classes.container}>
            <div className={classes.gridHeader}>
                <Typography variant='subtitle1'>
                    <b>{pmaaGroup.groupName}</b>
                </Typography>
            </div>
            <table>
                {getHeader()}
                {rows.map(row => {
                    const items = pmaaGroup.items.filter(item => item.linkage === row)

                    return getRow(items)
                })}
            </table>
        </div>
    )
}

export default PmaaList
