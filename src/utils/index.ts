import { DataPoint } from '../components/Visualiser/Graph'
import { Pmaa } from '../data/pmaaDetails'

export const replacePmaa = (pmaas: Pmaa[], newPmaa: Pmaa) => (
    pmaas.map(
        pmaa => newPmaa.name === pmaa.name && newPmaa.linkage === pmaa.linkage
            ? newPmaa
            : pmaa
        )
)

export const isSamePmaa = (pmaa1: Pmaa, pmaa2: Pmaa) => (
    pmaa1.name === pmaa2.name && pmaa1.linkage === pmaa2.linkage
)

export function getRandomHexColor(): string {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)

    return "#" + randomColor
}
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
