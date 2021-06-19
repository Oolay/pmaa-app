import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import { RefreshIcon } from '../icons/Refresh'
import { BackIcon } from '../icons/Back'
import { ClearIcon } from '../icons/Clear'


export const ACTION_BUTTONS_HEIGHT = 24

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    actionContainer: {

    }
})

interface Props {
    onDataZoomBack: () => void
    onRefreshView: () => void
    onClearView: () => void
}

const ActionButtons:React.FC<Props> = ({
    onDataZoomBack,
    onRefreshView,
    onClearView,
}) => {
    const classes = useStyles({})

    return (
        <div className={classes.container}>
            <Typography>
                Click and drag to zoom
            </Typography>
            <div className={classes.actionContainer}>
                <IconButton size='small' onClick={onDataZoomBack}>
                    <BackIcon />
                </IconButton>
                <IconButton size='small' onClick={onRefreshView}>
                    <RefreshIcon />
                </IconButton>
                <IconButton size='small' onClick={onClearView}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ActionButtons
