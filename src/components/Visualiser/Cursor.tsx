import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles'

import Graph from './Graph'
import mockData from '../../utils/getMockData'

const useStyles = makeStyles({
    cursor: {
        backgroundColor: 'blue',
        opacity: 0.4,
    }
})

export default function Cursor() { 
    const classNames = useStyles({})

  const [MousePosition, setMousePosition] = useState({
      left: 0,
      top: 0
  })

  const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => { setMousePosition({left: ev.pageX, top: ev.pageY}); }

  return (
    <div 
        className={classNames.cursor}
        onMouseMove={(ev: React.MouseEvent<HTMLDivElement>)=> handleMouseMove(ev)}
        style={{left:MousePosition.left , top: MousePosition.top}}
    >
        <Graph data={mockData(200)} />
    </div>
  )

}
