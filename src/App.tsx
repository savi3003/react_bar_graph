import React from 'react';
import './App.css';
import BarGraph from './components/BarGraph';
import {DATA} from './components/Data';

export default function App() {


  return (
  <div className="container">
    <h1>Dynamic Bar Graph </h1> 
     <BarGraph data = {DATA}/>
  </div>
  );
}


