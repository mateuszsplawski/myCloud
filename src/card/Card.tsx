import React from "react";

import { StyledCard } from "./Card.styled";
import { WeatherDescription } from "./WeatherDescription";
import { WeatherDetailsList } from "./WeatherDetailsList";
import { WeatherForecastList } from "./WeatherForecastList";
import { ButtonGroup } from "./ButtonGroup";
import { AirPollution } from "./AirPollution";

interface CardInterface {}

export const Card: React.FC<CardInterface> = ({}) => {
  return (
    <StyledCard className="weather swiper-slide">
      <WeatherDescription />
      <WeatherDetailsList />
      <WeatherForecastList />
      <AirPollution />
      <ButtonGroup />
    </StyledCard>
  );
};

export default Card;
