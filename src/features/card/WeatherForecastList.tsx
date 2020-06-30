import React, { useState, useEffect } from "react";

import { StyledWeatherForecastList } from "./WeatherForecastList.styled";
import WeatherIcon from "assets/WeatherIcon";
import { forecastDataInterface } from "./Card";
import { ButtonGroup } from "./ButtonGroup";

interface WeatherForecastListInterface {
  forecastData: forecastDataInterface;
}

export const WeatherForecastList: React.FC<WeatherForecastListInterface> = ({
  forecastData,
}) => {
  const weekDays = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  const dateList = [
    ...new Set(
      forecastData.list.map((listItem) => listItem.dt_txt.split(" ")[0])
    ),
  ].map((date) => {
    const index = new Date(date).getDay();
    return weekDays[index];
  });
  const [currentDayView, setCurrentDayView] = useState(dateList[0]);
  const [currentDayData, setCurrentDayData] = useState<
    forecastDataInterface[] | any
  >([]);
  useEffect(() => {
    const currentData = forecastData.list.filter(
      (listItem) =>
        new Date(listItem.dt_txt.split(" ")[0]).getDay() ===
        weekDays.indexOf(currentDayView)
    );
    setCurrentDayData(currentData);
  }, [currentDayView]);
  return (
    <StyledWeatherForecastList className="weather__forecast">
      <ButtonGroup
        active={currentDayView}
        handleClick={setCurrentDayView}
        dateList={dateList}
      />
      <ul>
        {currentDayData &&
          currentDayData.map((listItem, id) => (
            <li key={id}>
              <WeatherIcon id={listItem.weather[0].icon} />
              <p>{(listItem.main.temp - 273.15).toFixed()}°</p>
              <p>{listItem.dt_txt.split(" ")[1].slice(0, 5)}</p>
            </li>
          ))}
      </ul>
    </StyledWeatherForecastList>
  );
};
