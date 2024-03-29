import makeMockData from './getMockData'
import { DataPoint } from '../components/Visualiser/Graph'
import { makeRandomHexColor } from '../utils'

export interface Pmaa {
    groupName: string
    name: string
    linkage: string
    data: DataPoint[]
    color: string
}

export interface PmaaData {
    groupName: string
    items: Pmaa[]
}

function addDataSetAndColor(pmaa: Pick<Pmaa, 'name' | 'linkage'>) {
    const data = makeMockData(200)
    const color = makeRandomHexColor()


    return { ...pmaa, data, color }
}

const pmaas = [
    {
        groupName: 'Non-Branched Hexopyranosyl Residues ',
        items: [
            { name: 'Galp', linkage: 'T'},
            { name: 'Glcp', linkage: 'T'},
            { name: 'Manp', linkage: 'T'},
            { name: 'Fucp', linkage: 'T'},
            { name: 'Rhap', linkage: 'T'},
            { name: 'GalpNAc', linkage: 'T'},
            { name: 'GlcpNAc', linkage: 'T'},
            { name: 'ManpNAc', linkage: 'T'},
            { name: 'Galp', linkage: '2'},
            { name: 'Glcp', linkage: '2'},
            { name: 'Manp', linkage: '2'},
            { name: 'Fucp', linkage: '2'},
            { name: 'Rhap', linkage: '2'},
            { name: 'GalpNAc', linkage: '2'},
            { name: 'GlcpNAc', linkage: '2'},
            { name: 'ManpNAc', linkage: '2'},
            { name: 'Galp', linkage: '3'},
            { name: 'Glcp', linkage: '3'},
            { name: 'Manp', linkage: '3'},
            { name: 'Fucp', linkage: '3'},
            { name: 'Rhap', linkage: '3'},
            { name: 'GalpNAc', linkage: '3'},
            { name: 'GlcpNAc', linkage: '3'},
            { name: 'ManpNAc', linkage: '3'},
            { name: 'Galp', linkage: '4'},
            { name: 'Glcp', linkage: '4'},
            { name: 'Manp', linkage: '4'},
            { name: 'Fucp', linkage: '4'},
            { name: 'Rhap', linkage: '4'},
            { name: 'GalpNAc', linkage: '4'},
            { name: 'GlcpNAc', linkage: '4'},
            { name: 'ManpNAc', linkage: '4'},
            { name: 'Galp', linkage: '6'},
            { name: 'Glcp', linkage: '6'},
            { name: 'Manp', linkage: '6'},
            { name: 'Fucp', linkage: '6'},
            { name: 'Rhap', linkage: '6'},
            { name: 'GalpNAc', linkage: '6'},
            { name: 'GlcpNAc', linkage: '6'},
            { name: 'ManpNAc', linkage: '6'},
        ]
    },{
        groupName: 'Singly Branched Hexopyranosyl Residues',
        items: [
            { name: 'Galp', linkage: '2,3'},
            { name: 'Glcp', linkage: '2,3'},
            { name: 'Manp', linkage: '2,3'},
            { name: 'Fucp', linkage: '2,3'},
            { name: 'Rhap', linkage: '2,3'},
            { name: 'GalpNAc', linkage: '2,3'},
            { name: 'GlcpNAc', linkage: '2,3'},
            { name: 'ManpNAc', linkage: '2,3'},
            { name: 'Galp', linkage: '2,4'},
            { name: 'Glcp', linkage: '2,4'},
            { name: 'Manp', linkage: '2,4'},
            { name: 'Fucp', linkage: '2,4'},
            { name: 'Rhap', linkage: '2,4'},
            { name: 'GalpNAc', linkage: '2,4'},
            { name: 'GlcpNAc', linkage: '2,4'},
            { name: 'ManpNAc', linkage: '2,4'},
            { name: 'Galp', linkage: '2,6'},
            { name: 'Glcp', linkage: '2,6'},
            { name: 'Manp', linkage: '2,6'},
            { name: 'Fucp', linkage: '2,6'},
            { name: 'Rhap', linkage: '2,6'},
            { name: 'GalpNAc', linkage: '2,6'},
            { name: 'GlcpNAc', linkage: '2,6'},
            { name: 'ManpNAc', linkage: '2,6'},
            { name: 'Galp', linkage: '3,4'},
            { name: 'Glcp', linkage: '3,4'},
            { name: 'Manp', linkage: '3,4'},
            { name: 'Fucp', linkage: '3,4'},
            { name: 'Rhap', linkage: '3,4'},
            { name: 'GalpNAc', linkage: '3,4'},
            { name: 'GlcpNAc', linkage: '3,4'},
            { name: 'ManpNAc', linkage: '3,4'},
            { name: 'Galp', linkage: '3,6'},
            { name: 'Glcp', linkage: '3,6'},
            { name: 'Manp', linkage: '3,6'},
            { name: 'Fucp', linkage: '3,6'},
            { name: 'Rhap', linkage: '3,6'},
            { name: 'GalpNAc', linkage: '3,6'},
            { name: 'GlcpNAc', linkage: '3,6'},
            { name: 'ManpNAc', linkage: '3,6'},
            { name: 'Galp', linkage: '4,6'},
            { name: 'Glcp', linkage: '4,6'},
            { name: 'Manp', linkage: '4,6'},
            { name: 'Fucp', linkage: '4,6'},
            { name: 'Rhap', linkage: '4,6'},
            { name: 'GalpNAc', linkage: '4,6'},
            { name: 'GlcpNAc', linkage: '4,6'},
            { name: 'ManpNAc', linkage: '4,6'},
        ],
    }, {
        groupName: 'Multiply Branched Hexopyranosyl Residues',
        items: [
            { name: 'Galp', linkage: '2,3,4'},
            { name: 'Glcp', linkage: '2,3,4'},
            { name: 'Manp', linkage: '2,3,4'},
            { name: 'Fucp', linkage: '2,3,4'},
            { name: 'Rhap', linkage: '2,3,4'},
            { name: 'GalpNAc', linkage: '2,3,4'},
            { name: 'GlcpNAc', linkage: '2,3,4'},
            { name: 'ManpNAc', linkage: '2,3,4'},
            { name: 'Galp', linkage: '2,3,6'},
            { name: 'Glcp', linkage: '2,3,6'},
            { name: 'Manp', linkage: '2,3,6'},
            { name: 'Fucp', linkage: '2,3,6'},
            { name: 'Rhap', linkage: '2,3,6'},
            { name: 'GalpNAc', linkage: '2,3,6'},
            { name: 'GlcpNAc', linkage: '2,3,6'},
            { name: 'ManpNAc', linkage: '2,3,6'},
            { name: 'Galp', linkage: '2,4,6'},
            { name: 'Glcp', linkage: '2,4,6'},
            { name: 'Manp', linkage: '2,4,6'},
            { name: 'Fucp', linkage: '2,4,6'},
            { name: 'Rhap', linkage: '2,4,6'},
            { name: 'GalpNAc', linkage: '2,4,6'},
            { name: 'GlcpNAc', linkage: '2,4,6'},
            { name: 'ManpNAc', linkage: '2,4,6'},
            { name: 'Galp', linkage: '3,4,6'},
            { name: 'Glcp', linkage: '3,4,6'},
            { name: 'Manp', linkage: '3,4,6'},
            { name: 'Fucp', linkage: '3,4,6'},
            { name: 'Rhap', linkage: '3,4,6'},
            { name: 'GalpNAc', linkage: '3,4,6'},
            { name: 'GlcpNAc', linkage: '3,4,6'},
            { name: 'ManpNAc', linkage: '3,4,6'},
        ]
    }, {
        groupName: 'Non-Branched Pentopyranosyl and Pentofuranosyl Residues',
        items: [
            { name: 'Arap', linkage: 'T'},
            { name: 'Ribp', linkage: 'T'},
            { name: 'Xylp', linkage: 'T'},
            { name: 'Araf', linkage: 'T'},
            { name: 'Ribf', linkage: 'T'},
            { name: 'Arap', linkage: '2'},
            { name: 'Ribp', linkage: '2'},
            { name: 'Xylp', linkage: '2'},
            { name: 'Araf', linkage: '2'},
            { name: 'Ribf', linkage: '2'},
            { name: 'Arap', linkage: '3'},
            { name: 'Ribp', linkage: '3'},
            { name: 'Xylp', linkage: '3'},
            { name: 'Araf', linkage: '3'},
            { name: 'Ribf', linkage: '3'},
            { name: 'Arap', linkage: '4'},
            { name: 'Ribp', linkage: '4'},
            { name: 'Xylp', linkage: '4'},
            { name: 'Araf', linkage: '4'},
            { name: 'Ribf', linkage: '4'},
            { name: 'Arap', linkage: '5'},
            { name: 'Ribp', linkage: '5'},
            { name: 'Xylp', linkage: '5'},
            { name: 'Araf', linkage: '5'},
            { name: 'Ribf', linkage: '5'},
        ]
    }, {
        groupName: 'Branched Pentopyranosyl And Pentofuranosyl Residues',
        items: [
            { name: 'Arap', linkage: '2,3'},
            { name: 'Ribp', linkage: '2,3'},
            { name: 'Xylp', linkage: '2,3'},
            { name: 'Araf', linkage: '2,3'},
            { name: 'Ribf', linkage: '2,3'},
            { name: 'Arap', linkage: '2,4'},
            { name: 'Ribp', linkage: '2,4'},
            { name: 'Xylp', linkage: '2,4'},
            { name: 'Araf', linkage: '2,4'},
            { name: 'Ribf', linkage: '2,4'},
            { name: 'Arap', linkage: '2,5'},
            { name: 'Ribp', linkage: '2,5'},
            { name: 'Xylp', linkage: '2,5'},
            { name: 'Araf', linkage: '2,5'},
            { name: 'Ribf', linkage: '2,5'},
            { name: 'Arap', linkage: '3,4'},
            { name: 'Ribp', linkage: '3,4'},
            { name: 'Xylp', linkage: '3,4'},
            { name: 'Araf', linkage: '3,4'},
            { name: 'Ribf', linkage: '3,4'},
            { name: 'Arap', linkage: '3,5'},
            { name: 'Ribp', linkage: '3,5'},
            { name: 'Xylp', linkage: '3,5'},
            { name: 'Araf', linkage: '3,5'},
            { name: 'Ribf', linkage: '3,5'},
            { name: 'Arap', linkage: '2,3,4'},
            { name: 'Ribp', linkage: '2,3,4'},
            { name: 'Xylp', linkage: '2,3,4'},
            { name: 'Araf', linkage: '2,3,4'},
            { name: 'Ribf', linkage: '2,3,4'},
            { name: 'Arap', linkage: '2,3,5'},
            { name: 'Ribp', linkage: '2,3,5'},
            { name: 'Xylp', linkage: '2,3,5'},
            { name: 'Araf', linkage: '2,3,5'},
            { name: 'Ribf', linkage: '2,3,5'},
        ]
    }
]

export const pmaaData: PmaaData[] = pmaas.map((group) => ({
    ...group,
    items: group.items.map(item => ({ ...addDataSetAndColor(item), groupName: group.groupName }))
}))
