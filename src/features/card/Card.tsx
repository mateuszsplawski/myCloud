import React from "react";

import { StyledCard } from "./Card.styled";
import { WeatherDescription } from "./WeatherDescription";
import { WeatherDetailsList } from "./WeatherDetailsList";
import { WeatherForecastList } from "./WeatherForecastList";
import { ButtonGroup } from "./ButtonGroup";
import { AirPollution } from "./AirPollution";
import { data } from "api/mockData";
import { dataAirPollution } from "api/mockDataAirPollution";
import { dataForecast } from "api/mockDataForecast";

interface CardInterface {}

export const Card: React.FC<CardInterface> = () => {
  return (
    <StyledCard className="weather swiper-slide">
      <WeatherDescription weatherData={data} />
      <WeatherDetailsList weatherData={data} />
      <WeatherForecastList forecastData={dataForecast} />
      <AirPollution airPollutionData={dataAirPollution} />
      <ButtonGroup />
    </StyledCard>
  );
};

export default Card;
