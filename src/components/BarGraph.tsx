import React, { useMemo } from 'react';
import BarItem from './BarItem';
import './BarGraph.css';

export type Props = {data: Array<{numbers: number, labels: string, colors: string[]}>};

export default function BarGraph({data}:Props) { 
  const barItems = useMemo(() =>{
    let highestNum = 0;

    data.forEach(({numbers}) =>{
      highestNum = Math.max(highestNum, numbers);
    });

    return data.map(({numbers,labels,colors}) => ({
      val: numbers,
      colors: colors,
      label:  labels,
      barPercent: `${(numbers/highestNum)*100}%`
    }));
  },[data]); 
    return (
    <div className='bar-graph'>
      <div className='bars-list'>
   { barItems.map((barItem, i) => 
   (<BarItem num= {barItem.val} barPercent= {barItem.barPercent} label= {barItem.label}  
   colors = {barItem.colors} key={i} />))}
    </div> 
    <div className='bars-line'/>
    </div> 
  ) 

}
