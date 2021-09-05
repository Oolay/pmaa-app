import { DataPoint } from '../components/Visualiser/Graph'

function makeMockData(nPoints: number): DataPoint[] {
    return Array(nPoints).fill(1).map((_, i) => {
        const x = i + 1

        if (Math.floor(Math.random() * 100) < 10) {
            const y = Math.floor(Math.random() * 200)

            return { x, y }
        }

        return { x, y: 0 }
    })


}

export default makeMockData
