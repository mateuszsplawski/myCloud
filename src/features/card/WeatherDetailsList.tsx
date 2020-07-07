import React from "react";
import {
  faSun,
  faMoon,
  faThermometerEmpty,
  faWater,
  faWind,
  faTemperatureLow,
  faTemperatureHigh,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledWeatherDetailsList } from "./WeatherDetailsList.styled";
import { weatherDataInterface } from "./Card";

export interface WeatherDetailsListInterface {
  weatherData: weatherDataInterface;
}

export const WeatherDetailsList: React.FC<WeatherDetailsListInterface> = ({
  weatherData,
}) => {
  const {
    main: { feels_like, humidity, pressure, temp_max, temp_min },
    sys: { sunset, sunrise },
    wind: { speed },
  } = weatherData;

  const weatherDetailsList = [
    {
      description: "Wschód sł.",
      value: new Date(sunrise * 1000).toLocaleTimeString(),
      unit: undefined,
      icon: faSun,
    },
    {
      description: "Zachód sł.",
      value: new Date(sunset * 1000).toLocaleTimeString(),
      unit: undefined,
      icon: faMoon,
    },
    {
      description: "T. odczuwalna",
      value: (feels_like - 273.15).toFixed(),
      unit: "°C",
      icon: faThermometerEmpty,
    },
    {
      description: "Wilgotność",
      value: humidity,
      unit: "%",
      icon: faWater,
    },
    {
      description: "Ciśnienie",
      value: pressure,
      unit: "hPa",
      icon: faSmog,
    },
    {
      description: "Wiatr",
      value: speed,
      unit: "m/s",
      icon: faWind,
    },
    {
      description: "T. max",
      value: (temp_max - 273.15).toFixed(),
      unit: "°C",
      icon: faTemperatureHigh,
    },
    {
      description: "T. min",
      value: (temp_min - 273.15).toFixed(),
      unit: "°C",
      icon: faTemperatureLow,
    },
  ];

  return (
    <StyledWeatherDetailsList className="weather__info">
      {weatherDetailsList.map(({ description, value, unit, icon }, id) => (
        <li key={id}>
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
          <p>{description}</p>
          <span>
            {value}
            {unit}
          </span>
        </li>
      ))}
    </StyledWeatherDetailsList>
  );
};
