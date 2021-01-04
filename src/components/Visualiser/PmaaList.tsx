import React, { useState } from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

import { Pmaa, PmaaGroup } from '../../data/pmaaDetails'

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

const PmaaList: React.FC<Props> = ({ pmaas, selectedPmaas, onPmaaClick }) => {
    const classes = useStyles({})
    const [displayedPmaas, setDisplayedPmaas] = useState<Pmaa[]>(pmaas)
    const [pmaaGroupFilter, setPmaaGroupFilter] = useState<any>('all')

    const isPmaaSelected = (id: number) => selectedPmaas.some(selectedId => selectedId === id)

    const handlePmaaGroupChange = ({ target: { value } }: React.ChangeEvent<any>) => {
        setPmaaGroupFilter(value)

        if (value === 'all') {
            setDisplayedPmaas(pmaas)
        } else {
            setDisplayedPmaas(prevPmaas => prevPmaas.filter(({ group }) => group === value))
        }
    }

    return (
        <div className={classes.container}>
            <FormControl>
                <InputLabel>
                    <Select
                        value={pmaaGroupFilter}
                        onChange={handlePmaaGroupChange}
                    >
                        <MenuItem value={'all'}>all</MenuItem>
                        <MenuItem value={'nonBranchedHexopyranosyl'}>non-branched Hexopyranosyl</MenuItem>
                    </Select>
                </InputLabel>
            </FormControl>
            <GridList cols={8} cellHeight={30}>
                {displayedPmaas.map(({ id, name, linkage, color}) => {
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

export default PmaaList
