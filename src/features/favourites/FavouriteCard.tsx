import React from "react";

import { StyledFavouriteCard } from "./FavouriteCard.styled";
import { weatherDataInterface } from "features/card/Card";
import WeatherIcon from "assets/WeatherIcon";

interface FavouriteCardInterface {
  weatherData: weatherDataInterface;
}

export const FavouriteCard: React.FC<FavouriteCardInterface> = ({
  weatherData,
}) => {
  const {
    name,
    main: { temp },
    weather: [{ description, icon }],
  } = weatherData;
  return (
    <StyledFavouriteCard>
      <WeatherIcon id={icon} />
      <h2>{(temp - 273.15).toFixed()}°</h2>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </StyledFavouriteCard>
  );
};
