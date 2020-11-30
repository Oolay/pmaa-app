import React, { useState, useEffect, useRef } from 'react'
import { Bar } from '@vx/shape'
import { AxisLeft, AxisBottom } from '@vx/axis'
import { Group } from '@vx/group'
import { scaleLinear } from '@vx/scale'

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

const Graph: React.FC<Props> = ({ data }) => {
    const graphContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        graphContainer.current?.addEventListener('click', (event: MouseEvent) => {
            console.log('EVENT', event)
        })
    })

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

    return (
        <div ref={graphContainer}>
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
                </Group>
            </svg>
        </div>
    )
}

export default Graph
