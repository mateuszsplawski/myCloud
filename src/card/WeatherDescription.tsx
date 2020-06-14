import React from "react";

import WeatherIcon from "components/WeatherIcon/WeatherIcon";
import { StyledWeatherDescription } from "./WeatherDescription.styled";

export interface WeatherDescriptionInterface {
  weatherData: {
    name: string;
    weather: Array<{
      description: string;
      icon: string;
    }>;
    main: {
      temp: number;
    };
  };
}

export const WeatherDescription: React.FC<WeatherDescriptionInterface> = ({
  weatherData,
}) => {
  const { name, weather, main } = weatherData;
  return (
    <StyledWeatherDescription className="weather__description">
      <h1>{name}</h1>
      <h2>{weather[0].description}</h2>
      <h3>{(main.temp - 273.15).toFixed()}°</h3>
      <WeatherIcon id={weather[0].icon} />
    </StyledWeatherDescription>
  );
};
