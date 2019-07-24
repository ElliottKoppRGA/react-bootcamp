import React from "react";
import propTypes from "prop-types";

const WeatherComponent = ({ weather }) => (
  <div>
    {weather.weather && weather.weather.icon && (
      <img
        alt="Weather Description"
        src={`https://www.weatherbit.io/static/img/icons/${
          weather.weather.icon
        }.png`}
      />
    )}
    {weather.weather && weather.weather.description}
  </div>
);

WeatherComponent.displayName = "WeatherComponent";

WeatherComponent.propTypes = {
  weather: propTypes.object.isRequired
};

export default WeatherComponent;
