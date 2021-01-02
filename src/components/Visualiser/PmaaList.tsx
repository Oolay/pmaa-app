import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'

import { Pmaa } from '../../data/pmaaDetails'

const useStyles = makeStyles({
    container: {
        width: '75%',
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1px',
        border: '1px solid black',
        borderRadius: '4px',
        "&:hover": {
            backgroundColor: '#d3d3d3',
        },
    },
    selectedCard: {
        border: '2px',
    }
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
            <GridList cols={8} cellHeight={30}>
                {pmaas.map(({ id, name, linkage, color}) => {
                    return (
                        <GridListTile
                            key={id}
                        >
                            <Card
                                onClick={onPmaaClick(id)}
                            >
                                <div
                                    className={classnames([classes.card, { [classes.selectedCard ]: isPmaaSelected(id)}])}
                                    style={isPmaaSelected(id) ? {border: `2px solid ${color}`} : {}}
                                >
                                    {`${name}-${linkage}`}
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
