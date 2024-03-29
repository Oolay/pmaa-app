import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Bar } from '@vx/shape'
import { AxisLeft, AxisBottom } from '@vx/axis'
import { Group } from '@vx/group'
import { scaleLinear } from '@vx/scale'

import { makeMinMaxOfDataSets, MinMax } from '../../utils'
import { Pmaa } from '../../data/pmaaDetails'

const useStyles = makeStyles({
    graphContainer: {
        display: 'flex',
        justifyContent: 'center',
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

export type DataSet = DataPoint[]

interface Props {
    dataSets: Pmaa[]
    onDataZoom: (zoomData: Omit<MinMax, 'minY'>) => void
}

export const GRAPH_WIDTH = 750
export const GRAPH_HEIGHT = 300

export const GRAPH_MARGIN = {
    top: 30,
    bottom: 60,
    left: 80,
    right: 80
}

interface ZoomData {
    initialX: number
    dragX: number
    rectX: number
    rectY: number
    width: number
    height: number
}

const INIITIAL_ZOOM_RECT = {
    initialX: 0,
    dragX: 0,
    rectX: 0,
    rectY: 0,
    width: 0,
    height: 0,
}

const Graph: React.FC<Props> = ({ dataSets, onDataZoom }) => {
    const classes = useStyles({})
    const data = dataSets.map(dataSet => dataSet.data)

    const graphContainer = useRef<HTMLDivElement>(null)

    // Zoom rectangle
    const graphSVG = useRef<SVGSVGElement>(null)
    const [isZooming, setIsZooming] = useState<boolean>(false)
    const zoomData = useRef<ZoomData>(INIITIAL_ZOOM_RECT)
    const [zoomRect, setZoomRect] = useState<ZoomData>(INIITIAL_ZOOM_RECT)
    const requestRef = useRef<number>()

    // Graph bounds
    const xGraphMax = GRAPH_WIDTH - GRAPH_MARGIN.left - 50
    const yGraphMax = GRAPH_HEIGHT - GRAPH_MARGIN.top - 50

    // DataSets bounds
    const { minX, maxX, minY, maxY } = makeMinMaxOfDataSets(data)

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

    const yScaleReverse = scaleLinear({
        domain: [yGraphMax, 0],
        range: [minY, maxY],
        round: true,
    })

    const eventXToGraphX = (x: number, graphContainerOffset: number) => {
        let graphX = x - GRAPH_MARGIN.left - graphContainerOffset

        if (graphX < 0) {
            graphX = 0
        }

        if (graphX > xGraphMax) {
            graphX = xGraphMax
        }

        return graphX
    }

    const eventYToGraphY = (y: number, graphContainerOffset: number) => {
        let graphY = y - GRAPH_MARGIN.top - graphContainerOffset

        if (graphY < 0) {
            graphY = 0
        }

        if (graphY > yGraphMax) {
            graphY = yGraphMax
        }

        return graphY
    }

    const changeZoomRect = () => {
        let width: number
        const { dragX, initialX, rectX, rectY } = zoomData.current

        if (dragX < initialX) {
            width = initialX - rectX
        } else {
            width = dragX - initialX
        }

        const height = yGraphMax - rectY

        zoomData.current = { ...zoomData.current, width }
        setZoomRect({ ...zoomData.current, width, height })
    }

    const clearZoomRect = () => {
        zoomData.current = INIITIAL_ZOOM_RECT
        setZoomRect(INIITIAL_ZOOM_RECT)

        window.cancelAnimationFrame(requestRef.current as number)
    }

    const handleGraphClick = ({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
        if (!graphSVG.current) {
            return
        }

        const { left, top } = graphSVG.current.getBoundingClientRect()
        let graphX = eventXToGraphX(clientX, left)
        let graphY = eventYToGraphY(clientY, top)
    
        if (isZooming) {
            onDataZoom({
                minX: xScaleReverse(zoomData.current.rectX) as number,
                maxX: xScaleReverse(zoomData.current.rectX + zoomData.current.width) as number,
                maxY: yScaleReverse(zoomData.current.rectY) as number,
            })
            setIsZooming(false)
            clearZoomRect()
        } else {
            zoomData.current = {
                ...zoomData.current,
                rectX: graphX,
                rectY: graphY,
                initialX: graphX,
            }

            setIsZooming(true)
        }
    }

    const handleZoomMove = ({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
        if (!isZooming) {
            return
        }

        if (!graphSVG.current) {
            return
        }

        const { left, top } = graphSVG.current.getBoundingClientRect()
        let graphX = eventXToGraphX(clientX, left)
        let graphY = eventYToGraphY(clientY, top)
        
        if (graphX < zoomData.current.initialX) {
            zoomData.current = {
                ...zoomData.current,
                rectX: graphX,
                dragX: graphX,
            }
        } else {
            zoomData.current = {
                ...zoomData.current,
                rectX: zoomData.current.initialX,
                dragX: graphX,
            }
        }

        zoomData.current = {
            ...zoomData.current,
            rectY: graphY,
        }

        requestRef.current = requestAnimationFrame(changeZoomRect)
    }

    return (
        <div
            ref={graphContainer}
            className={classes.graphContainer}
            onClick={handleGraphClick}
            onMouseMove={handleZoomMove}
        >
            <svg ref={graphSVG} height={GRAPH_HEIGHT} width={GRAPH_WIDTH}>
                <Group top={GRAPH_MARGIN.top} left={GRAPH_MARGIN.left}>
                    <AxisLeft
                        scale={yScale}
                        top={0}
                        left={0}
                        stroke={'#1b1a1e'}
                    />
                    <AxisBottom
                        scale={xScale}
                        top={yGraphMax}
                        stroke={'#1b1a1e'}
                    />
                    {
                        dataSets.map((dataSet, setIndex) => {
                            const barColor = dataSet.color
                            
                            return dataSet.data.map(({ x, y }) => {
                                const barX = xScale(x)
                                const barY = yScale(y)
                                const barWidth = 2
                                const barHeight = yGraphMax - (yScale(y) as number)

                                return (
                                    <Bar
                                        key={`${setIndex}-${x}`}
                                        x={barX}
                                        y={barY}
                                        width={barWidth}
                                        height={barHeight}
                                        opacity={0.6}
                                        fill={barColor}
                                    />
                                )
                            })}
                        )
                    }
                    {
                        isZooming && (
                            <rect
                                x={zoomRect.rectX}
                                y={zoomRect.rectY}
                                width={zoomRect.width}
                                height={zoomRect.height}
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
