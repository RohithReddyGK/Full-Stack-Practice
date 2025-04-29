import React from 'react';
import './App.css';
import Counter from './CounterClass';

function App(){
  return(
    <div className="App">
      <h1 className="head">Welcome to the Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;