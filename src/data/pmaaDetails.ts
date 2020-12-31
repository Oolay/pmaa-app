import getMockData from './getMockData'
import { DataPoint } from '../components/Visualiser/Graph'
import getRandomHexColor from '../utils/getRandomColor'

export interface Pmaa {
    id: number
    name: string
    linkage: string
    group: string
    data: DataPoint[]
    color: string
}

const pmmaaData: Pmaa[] = [
    {
        id: 1,
        name: 'Galp',
        linkage: 'T',
        group: 'nonBranchedHexopyranosyl',
        data: getMockData(200),
        color: 'black',
    },
    {
        id: 2,
        name: 'Glcp',
        linkage: 'T',
        group: 'nonBranchedHexopyranosyl',
        data: getMockData(200),
        color: 'red',
    },
    {
        id: 3,
        name: 'Manp',
        linkage: 'T',
        group: 'nonBranchedHexopyranosyl',
        data: getMockData(200),
        color: 'grey',
    },
    {
        id: 4,
        name: 'Fucp',
        linkage: 'T',
        group: 'nonBranchedHexopyranosyl',
        data: getMockData(200),
        color: 'blue',
    },
    {
        id: 5,
        name: 'Rhap',
        linkage: 'T',
        group: 'nonBranchedHexopyranosyl',
        data: getMockData(200),
        color: 'purple',
    },
    {
        id: 6,
        name: 'GalpNAc',
        linkage: 'T',
        group: 'nonBranchedHexopyranosyl',
        data: getMockData(200),
        color: 'green',
    },
    {
        id: 7,
        name: 'GlcpNAc',
        linkage: 'T',
        group: 'nonBranchedHexopyranosyl',
        data: getMockData(200),
        color: getRandomHexColor(),
    },
    {
        id: 8,
        name: 'ManpNAc',
        linkage: 'T',
        group: 'nonBranchedHexopyranosyl',
        data: getMockData(200),
        color: getRandomHexColor(),
    },
]

export default pmmaaData
