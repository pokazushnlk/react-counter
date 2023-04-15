import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [count, setCount]= useState(0);
  if (count < 0) { 
    alert("Счетчик меньше нуля!");
    count = 0;
  };

  return (
    <div className='body-container'>
      <div className='counter-header'>
        <p className='counter'>{count}</p>
        <button className='plus-button' onClick={() => setCount(count + 1)}>+</button>
        <button className='minus-button' onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
     
  
  );
}

export default App;
