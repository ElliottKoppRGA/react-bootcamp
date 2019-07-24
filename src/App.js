import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  setInterval(() => {
    setCurrentTime(new Date());
  }, 500);

  return (
    <div className="App">
      <h1>{
          currentTime.toString()
        }
      </h1>
      <h2>{currentCounter}</h2>
    </div>
  );
}

export default App;
