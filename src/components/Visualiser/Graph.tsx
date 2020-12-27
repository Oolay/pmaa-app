import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Bar } from '@vx/shape'
import { AxisLeft, AxisBottom } from '@vx/axis'
import { Group } from '@vx/group'
import { scaleLinear } from '@vx/scale'

const useStyles = makeStyles({
    graphContainer: {
        // position: 'relative',
    },
    zoomBox: {
        zIndex: 100,
        position: 'absolute',
        border: 'black 1px solid',
        backgroundColor: 'blue',
        opacity: 0.4,
    }
})
export interface DataPoint {
    x: number
    y: number
}

interface Props {
    data: DataPoint[]
    onDataZoom: (xMin: number, xMax: number) => void
}

interface MinMaxX {
    minX: number
    maxX: number
}

interface MinMaxY {
    minY: number
    maxY: number
}

function getXMinAndMax(data: DataPoint[]): MinMaxX {
    return data.reduce(({ minX, maxX }, { x }) => {
        const newMinX = x < minX ? x : minX
        const newMaxX = x > maxX ? x : maxX

        return {
            minX: newMinX,
            maxX: newMaxX,
        }
    }, {minX: Infinity, maxX: -Infinity})
}

function getYMinAndMax(data: DataPoint[]): MinMaxY {
    return data.reduce(({ minY, maxY }, { y }) => {
        const newMinY = y < minY ? y : minY
        const newMaxY = y > maxY ? y : maxY

        return {
            minY: newMinY,
            maxY: newMaxY,
        }
    }, {minY: Infinity, maxY: -Infinity})
}

const width = 750
const height = 300

const margin = {
    top: 60,
    bottom: 60,
    left: 80,
    right: 80
}

interface ZoomData {
    initialX: number
    dragX: number
    rectX: number
    width: number
}

const INIITIAL_ZOOM_RECT = {
    initialX: 0,
    dragX: 0,
    rectX: 0,
    width: 0,
}

const Graph: React.FC<Props> = ({ data, onDataZoom }) => {
    const classNames = useStyles({})

    const graphContainer = useRef<HTMLDivElement>(null)

    // Zoom rectangle
    const [isZooming, setIsZooming] = useState<boolean>(false)
    const zoomData = useRef<ZoomData>(INIITIAL_ZOOM_RECT)
    const [zoomRect, setZoomRect] = useState<ZoomData>(INIITIAL_ZOOM_RECT)
    const requestRef = useRef<number>()

    // Graph bounds
    const xGraphMax = width - margin.left - 50
    const yGraphMax = height - margin.top - 50

    // Data bounds
    const { minX, maxX } = getXMinAndMax(data)
    const { minY, maxY } = getYMinAndMax(data)

    const xScale = scaleLinear({
        domain: [minX, maxX],
        range: [0, xGraphMax],
        round: true,
    })

    const xScaleReverse = scaleLinear({
        domain: [0, xGraphMax],
        range: [minX, maxX],
        round: true,
    })

    const yScale = scaleLinear({
        domain: [minY, maxY],
        range: [yGraphMax, 0],
        round: true,
    })

    const eventXToGraphX = (x: number) => x - margin.left

    const changeZoomRect = () => {
        let width: number
        const { dragX, initialX, rectX } = zoomData.current

        if (dragX < initialX) {
            width = initialX - rectX
        } else {
            width = dragX - initialX
        }

        zoomData.current = { ...zoomData.current, width }
        setZoomRect({ ...zoomData.current, width })
    }

    const clearZoomRect = () => {
        zoomData.current = INIITIAL_ZOOM_RECT
        setZoomRect(INIITIAL_ZOOM_RECT)

        window.cancelAnimationFrame(requestRef.current as number)
    }

    const handleGraphClick = ({ pageX }: React.MouseEvent<HTMLDivElement>) => {
        const graphX = eventXToGraphX(pageX)

        if (graphX < 0 || graphX > xGraphMax) {
            return
        }

        if (isZooming) {
            onDataZoom(
                xScaleReverse(zoomData.current.rectX) as number,
                xScaleReverse(zoomData.current.rectX + zoomData.current.width) as number,
            )
            setIsZooming(false)
            clearZoomRect()
        } else {
            zoomData.current = { ...zoomData.current, rectX: graphX, initialX: graphX }

            setIsZooming(true)
        }
    }

    const handleZoomMove = ({ pageX }: React.MouseEvent<HTMLDivElement>) => {
        if (!isZooming) {
            return
        }

        let graphX = eventXToGraphX(pageX)

        if (graphX < 0) {
            graphX = 0
        }

        if (graphX > xGraphMax) {
            graphX = xGraphMax
        }
        
        if (graphX < zoomData.current.initialX) {
            zoomData.current = { ...zoomData.current, rectX: graphX, dragX: graphX }
        } else {
            zoomData.current = { ...zoomData.current, rectX: zoomData.current.initialX, dragX: graphX }
        }

        requestRef.current = requestAnimationFrame(changeZoomRect)
    }

    return (
        <div
            ref={graphContainer}
            className={classNames.graphContainer}
            onClick={handleGraphClick}
            onMouseMove={handleZoomMove}
        >
            <svg height={height} width={width}>
                <Group top={margin.top} left={margin.left}>
                    <AxisLeft
                        scale={yScale}
                        top={0}
                        left={0}
                        label={'y label'}
                        stroke={'#1b1a1e'}
                    />
                    <AxisBottom
                        scale={xScale}
                        top={yGraphMax}
                        label={'x label'}
                        stroke={'#1b1a1e'}
                    />
                    {
                        data.map(({ x, y }) => {
                            const barX = xScale(x)
                            const barY = yScale(y)
                            const barWidth = 1
                            const barHeight = yGraphMax - (yScale(y) as number)

                            return (
                                <Bar
                                    key={x}
                                    x={barX}
                                    y={barY}
                                    width={barWidth}
                                    height={barHeight}
                                />
                            )
                        })
                    }
                    {
                        isZooming && (
                            <rect
                                x={zoomRect.rectX}
                                y={0}
                                width={zoomRect.width}
                                height={yGraphMax}
                                fill='blue'
                                opacity={0.4}
                            />
                        )
                    }
                </Group>
            </svg>
        </div>
    )
}

export default Graph
