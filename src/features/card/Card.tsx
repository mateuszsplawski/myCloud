import React, { useState } from "react";

import { StyledCard } from "./Card.styled";
import { WeatherDescription } from "./WeatherDescription";
import { WeatherDetailsList } from "./WeatherDetailsList";
import { WeatherForecastList } from "./WeatherForecastList";
import { ButtonGroup } from "./ButtonGroup";
import { AirPollution } from "./AirPollution";
import { Button } from "components/Button/Button";
import { ActionBar } from "./ActionBar";

export interface weatherDataInterface {
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
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
}

export interface forecastDataInterface {
  list: Array<{
    weather: Array<{ icon: string }>;
    main: {
      temp: number;
    };
    dt_txt: string;
  }>;
}

export interface airPollutionDataInterface {
  status: string;
  data?: {
    iaqi: {
      no2: {
        v: number;
      };
      co: {
        v: number;
      };
    };
    aqi: number;
  };
}

interface CardInterface {
  weatherData: weatherDataInterface;
  forecastData: forecastDataInterface;
  airPollutionData: airPollutionDataInterface;
  setFavourite: (payload: string) => void;
}

export const Card: React.FC<CardInterface> = ({
  weatherData,
  forecastData,
  airPollutionData,
  setFavourite,
}) => {
  const [cardView, setCardView] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setCardView(e.target.value);
  };
  return (
    <StyledCard className="weather swiper-slide">
      <WeatherDescription weatherData={weatherData} />
      <div className="weather__main">
        <WeatherDetailsList weatherData={weatherData} />
        <ButtonGroup handleClick={handleClick} active={cardView} />
        {!cardView ? (
          <WeatherForecastList forecastData={forecastData} />
        ) : (
          <AirPollution airPollutionData={airPollutionData} />
        )}
      </div>
    </StyledCard>
  );
};

export default Card;
