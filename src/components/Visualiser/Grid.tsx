import React from 'react'
import { makeStyles } from '@material-ui/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'

import { Pmaa } from '../../data/pmaaDetails'

const useStyles = makeStyles({
    container: {
        width: '75%',
    },
    selectedCard: {
        backgroundColor: 'grey',
    },
})

interface Props {
    pmaas: Pmaa[]
    selectedPmaas: number[]
    onPmaaClick: (id: number) => () => void
}

const PmaaGrid: React.FC<Props> = ({ pmaas, selectedPmaas, onPmaaClick }) => {
    const classes = useStyles({})

    const isPmaaSelected = (id: number) => selectedPmaas.some(selectedId => selectedId === id)

    return (
        <div className={classes.container}>
            <GridList cols={8}>
                {pmaas.map(({ id, name, linkage}) => {
                    return (
                        <GridListTile
                            key={id}
                        >
                            <Card
                                onClick={onPmaaClick(id)}
                                raised
                            >
                                <div className={isPmaaSelected(id) ? classes.selectedCard : undefined}>
                                    {name}
                                </div>
                            </Card>
                        </GridListTile>
                    )
                })}
            </GridList>
        </div>
    )
}

export default PmaaGrid
