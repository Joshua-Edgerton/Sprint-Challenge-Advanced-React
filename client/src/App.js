import React from 'react';
import './App.css';
import Players from './Components/Players'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Players/>
    </div>
  );
}

export default App;