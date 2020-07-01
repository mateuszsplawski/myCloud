import React from "react";

import WeatherIcon from "assets/WeatherIcon";
import { StyledWeatherDescription } from "./WeatherDescription.styled";
import ActionBar from "./ActionBar";

export interface WeatherDescriptionInterface {
  weatherData: {
    name: string;
    weather: {
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
    };
  };
}

export const WeatherDescription: React.FC<WeatherDescriptionInterface> = ({
  weatherData,
}) => {
  const {
    name,
    weather: [{ description, icon }],
    main: { temp },
  } = weatherData;
  return (
    <StyledWeatherDescription className="weather__description">
      <div className="weather__text">
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>{(temp - 273.15).toFixed()}°</h3>
      </div>
      <WeatherIcon id={icon} />
      <ActionBar name={name} />
    </StyledWeatherDescription>
  );
};
