import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ZipCodePickerContainer from './zipcode/ZipCodePickerContainer';

function App() {
    return (
    <div className="App">
      <ZipCodePickerContainer />
    </div>
  );
}

export default App;
