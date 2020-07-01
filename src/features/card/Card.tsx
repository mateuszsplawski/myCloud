import React from "react";

import { StyledCard } from "./Card.styled";
import { WeatherDescription } from "./WeatherDescription";
import { WeatherDetailsList } from "./WeatherDetailsList";
import { WeatherForecastList } from "./WeatherForecastList";
import { AirPollution } from "./AirPollution";

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
}

export const Card: React.FC<CardInterface> = ({
  weatherData,
  forecastData,
  airPollutionData,
}) => {
  return (
    <StyledCard className="weather swiper-slide">
      <WeatherDescription weatherData={weatherData} />
      <div className="weather__main">
        <WeatherDetailsList weatherData={weatherData} />
        {true ? (
          <WeatherForecastList forecastData={forecastData} />
        ) : (
          <AirPollution airPollutionData={airPollutionData} />
        )}
      </div>
    </StyledCard>
  );
};

export default Card;
