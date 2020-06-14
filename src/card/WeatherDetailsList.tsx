import React from "react";

import { StyledWeatherDetailsList } from "./WeatherDetailsList.styled";

export interface WeatherDetailsListInterface {
  weatherData: {
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp_max: number;
      temp_min: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
    wind: {
      speed: number;
    };
  };
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
    },
    {
      description: "Zachód sł.",
      value: new Date(sunset * 1000).toLocaleTimeString(),
      unit: undefined,
    },
    {
      description: "T. odczuwalna",
      value: (feels_like - 273.15).toFixed(),
      unit: "°C",
    },
    {
      description: "Wilgotność",
      value: humidity,
      unit: "%",
    },
    {
      description: "Ciśnienie",
      value: pressure,
      unit: "hPa",
    },
    {
      description: "Wiatr",
      value: speed,
      unit: "m/s",
    },
    {
      description: "T. max",
      value: temp_max,
      unit: "°C",
    },
    {
      description: "T. min",
      value: temp_min,
      unit: "°C",
    },
  ];

  return (
    <StyledWeatherDetailsList className="weather__info">
      {weatherDetailsList.map(({ description, value, unit }) => (
        <li>
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
