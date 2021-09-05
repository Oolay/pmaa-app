import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Pmaa, PmaaData } from '../../data/pmaaDetails'

import { PmaaList } from './PmaaList'


const useStyles = makeStyles({
    gridContainer: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        marginTop: '16px',
    },
})

interface Props {
    pmaaData: PmaaData[]
    selectedPmaas: Pmaa[]
    handlePmaaClick: (pmaa: Pmaa) => void
}

export const PmaaPicker: React.FC<Props> = ({ pmaaData, selectedPmaas, handlePmaaClick }) => {
    const classes = useStyles()

    return (
        <div className={classes.gridContainer}>
                {
                    pmaaData.map(groupData => {
                        const columns = new Set(groupData.items.map(item => item.name))
                        const rows = new Set(groupData.items.map(item => item.linkage))
    
                        return (
                            <PmaaList
                                key={groupData.groupName}
                                pmaaGroup={groupData}
                                columns={Array.from(columns)}
                                rows={Array.from(rows)}
                                selectedPmaas={selectedPmaas}
                                onPmaaClick={handlePmaaClick}
                            />
                        )
                    })
                }
            </div>
    )
}
