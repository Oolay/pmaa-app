import React, { useState, useEffect, useRef } from 'react'
import { Bar, Polygon } from '@vx/shape'
import { AxisLeft, AxisBottom } from '@vx/axis'
import { Group } from '@vx/group'
import { scaleLinear } from '@vx/scale'
import { localPoint } from '@vx/event';
import { isParenthesizedExpression } from 'typescript'


export interface DataPoint {
    x: number
    y: number
}

interface Props {
    data: DataPoint[]
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

interface Point {
    x: number
    y: number
}

const Graph: React.FC<Props> = ({ data }) => {
    const graphContainer = useRef<HTMLDivElement>(null)
    const zoomRect = useRef<SVGRectElement>(null)
    const [isZooming, setIsZooming] = useState<boolean>(false)
    const zoomX = useRef<number>(0)
    const moveX = useRef<number>(0)

    const zoomWidthRef = useRef<number>(0)
    const [zoomWidth, setZoomWidth] = useState<number>(0)
    const requestRef = useRef<number>()

    // Graph bounds
    const xGraphMax = width - margin.bottom - 50
    const yGraphMax = height - margin.top - 50

    // Data bounds
    const { minX, maxX } = getXMinAndMax(data)
    const { minY, maxY } = getYMinAndMax(data)

    const xScale = scaleLinear({
        domain: [minX, maxX],
        range: [0, xGraphMax],
        round: true,
    })

    const yScale = scaleLinear({
        domain: [minY, maxY],
        range: [yGraphMax, 0],
        round: true,
    })

    const changeZoomRectWidth = () => {
        const width = (moveX.current - margin.left) - zoomX.current

        zoomWidthRef.current = width
        setZoomWidth(zoomWidthRef.current)
    }

    const animationLoop = () => {
        requestRef.current = requestAnimationFrame(animationLoop)

        changeZoomRectWidth()
    }

    useEffect(() => {
        if (isZooming) {
            graphContainer.current?.addEventListener('mousemove', ({ x, y }: MouseEvent) => {
                moveX.current = x
                requestRef.current = requestAnimationFrame(animationLoop)
            })
        }
        graphContainer.current?.addEventListener('click', ({ x, y }: MouseEvent) => {
            zoomX.current = x - margin.left
            setIsZooming(preState => !preState)
        })

        return () => {
            window.cancelAnimationFrame(requestRef.current as number)
        }
    }, [isZooming])

    return (
        <div
            ref={graphContainer}
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
                                ref={zoomRect}
                                x={zoomX.current}
                                y={0}
                                width={zoomWidthRef.current}
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
