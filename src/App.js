import React from 'react';
import './App.css';

import Music from './components/music';

import Balls from './components/balls';
import Bapbenh from './components/bapbenh';
import Batquai from './components/batquai';
import Cars from './components/car';

function App() {
  return (
    <div className="App">
      <Bapbenh></Bapbenh>
      <Balls></Balls>
      <Batquai></Batquai>
       <Music></Music>
       <Cars></Cars>
    </div>
  );
}

export default App;
