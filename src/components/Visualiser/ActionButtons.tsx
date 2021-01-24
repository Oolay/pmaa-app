import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import RefreshIcon from '../icons/Refresh'
import BackIcon from '../icons/Back'

export const ACTION_BUTTONS_HEIGHT = 24

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
    }
})

interface Props {
    onDataZoomBack: () => void
    onRefreshView: () => void
}

const ActionButtons:React.FC<Props> = ({
    onDataZoomBack,
    onRefreshView,
}) => {
    const classes = useStyles({})

    return (
        <div className={classes.container}>
            <IconButton size='small' onClick={onDataZoomBack}>
                <BackIcon />
            </IconButton>
            <Typography>
                Click and drag to zoom
            </Typography>
            <IconButton size='small' onClick={onRefreshView}>
                <RefreshIcon />
            </IconButton>
        </div>
    )
}

export default ActionButtons
