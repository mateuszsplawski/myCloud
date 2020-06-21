import React from "react";

import { StyledWeatherForecastList } from "./WeatherForecastList.styled";
import WeatherIcon from "assets/WeatherIcon";
import { forecastDataInterface } from "./Card";

interface WeatherForecastListInterface {
  forecastData: forecastDataInterface;
}

export const WeatherForecastList: React.FC<WeatherForecastListInterface> = ({
  forecastData,
}) => {
  return (
    <StyledWeatherForecastList className="weather__forecast">
      {forecastData
        ? forecastData.list
            .filter((listItem, id) => id % 7 === 0)
            .map((listItem, id) => (
              <li key={id}>
                <WeatherIcon id={listItem.weather[0].icon} />
                <p>{(listItem.main.temp - 273.15).toFixed()}°</p>
                <p>{listItem.dt_txt.split(" ")[0]}</p>
              </li>
            ))
        : undefined}
    </StyledWeatherForecastList>
  );
};
