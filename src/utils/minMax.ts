import { DataPoint } from '../components/Visualiser/Graph'

export interface MinMax {
    minX: number
    maxX: number
    minY: number
    maxY: number
}

export function getMinMax(data: DataPoint[]): MinMax {
    return data.reduce(({ minX, maxX, minY, maxY }, { x, y }) => {
        const newMinX = x < minX ? x : minX
        const newMaxX = x > maxX ? x : maxX
        const newMinY = y < minY ? y : minY
        const newMaxY = y > maxY ? y : maxY

        return {
            minX: newMinX,
            maxX: newMaxX,
            minY: newMinY,
            maxY: newMaxY,
        }
    }, {
        minX: Infinity,
        maxX: -Infinity,
        minY: Infinity,
        maxY: -Infinity
    })
}

export function getMinMaxOfDataSets(dataSets: DataPoint[][]): MinMax {
    const flatData = dataSets.reduce((flatDataSets, dataSet) => [...flatDataSets, ...dataSet], [])

    return getMinMax(flatData)
}
