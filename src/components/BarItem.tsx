import React from 'react'
import './BarItem.css'

type Props = {num: number, barPercent: string, label?: string, colors: string[]}

export default function BarItem({num, barPercent,label, colors}: Props) {

  return (
    <div className='bar-item'
    style={{height: barPercent, background:`linear-gradient(to bottom,  ${colors[0]},${colors[1]})`}}>
        <div className='bar-item-label'>{label}</div>
        <div className='bar-item-num'>{num}</div>
    </div>
    
  );


  
}

 
  
