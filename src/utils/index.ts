import { DataPoint } from '../components/Visualiser/Graph'
import { Pmaa } from '../data/pmaaDetails'

const PRIMARY_TEXT_COLOR = '#434343'
const WHITE_TEXT_COLOR = '#FFFFFF'

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

function isHexColor(color : string) {
    return /^#([A-Fa-f0-9]{6}$)/.test(color)
}

export function getStatusTextColor(backgroundHexColor : string) {
    // default to black if invalid colour used
    if (!isHexColor(backgroundHexColor)) {
        return PRIMARY_TEXT_COLOR
    }

    const red = parseInt(backgroundHexColor.substr(1, 2), 16)
    const green = parseInt(backgroundHexColor.substr(3, 2), 16)
    const blue = parseInt(backgroundHexColor.substr(5, 2), 16)

    // convert rgb colour to YIQ color space - see https://24ways.org/2010/calculating-color-contrast
    const yiq = ((red * 299) + (green * 587) + (blue * 114)) / 1000

    return yiq >= 128 ? PRIMARY_TEXT_COLOR : WHITE_TEXT_COLOR
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
