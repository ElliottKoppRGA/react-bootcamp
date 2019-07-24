import React from "react";
import "./App.css";
import ZipCodePickerContainer from "./zipcode/ZipCodePickerContainer";
import WeatherContainer from "./weather/WeatherContainer";

function App() {
  return (
    <div className="App">
      <ZipCodePickerContainer />
      <WeatherContainer />
    </div>
  );
}

export default App;
