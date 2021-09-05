import React from 'react'
import { makeStyles } from '@material-ui/styles'


import { Pmaa } from '../../data/pmaaDetails'
import { Typography } from '@material-ui/core'
import { isSamePmaa } from '../../utils'

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
    selectedPmaas: Pmaa[]
    onPmaaClick: (pmaa: Pmaa) => void
}

export const PmaaList: React.FC<Props> = ({ pmaaGroup, columns, rows, selectedPmaas, onPmaaClick }) => {
    const classes = useStyles({})
    const isPmaaSelected = (selectedPmaa: Pmaa) => selectedPmaas.some(pmaa => isSamePmaa(selectedPmaa,pmaa))

    const getHeader = () => (
        <tr>
            <th>
                <div className={classes.columnTitleItem}>
                    Linkage
                </div>
            </th>
            {columns.map(col => (
                <th key={col}>
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
                    return (
                        <td key={`${pmaa.linkage}-${pmaa.name}`}>
                            <div
                                className={classes.contentItem}
                                style={isPmaaSelected(pmaa) ? {backgroundColor: `${pmaa.color}`} : {}}
                                onClick={() => onPmaaClick(pmaa)}
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