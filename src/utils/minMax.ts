import { DataPoint } from '../components/Visualiser/Graph'

interface MinMaxX {
    minX: number
    maxX: number
}

interface MinMaxY {
    minY: number
    maxY: number
}

export function getXMinAndMax(data: DataPoint[]): MinMaxX {
    return data.reduce(({ minX, maxX }, { x }) => {
        const newMinX = x < minX ? x : minX
        const newMaxX = x > maxX ? x : maxX

        return {
            minX: newMinX,
            maxX: newMaxX,
        }
    }, {minX: Infinity, maxX: -Infinity})
}

export function getYMinAndMax(data: DataPoint[]): MinMaxY {
    return data.reduce(({ minY, maxY }, { y }) => {
        const newMinY = y < minY ? y : minY
        const newMaxY = y > maxY ? y : maxY

        return {
            minY: newMinY,
            maxY: newMaxY,
        }
    }, {minY: Infinity, maxY: -Infinity})
}
