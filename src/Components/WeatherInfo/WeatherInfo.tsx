import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: calc(100% / 3);

  li {
    width: 50%;
    padding: 5px;
    list-style: none;
    font-weight: bolder;
    p {
      text-transform: uppercase;
      color: grey;
      font-weight: normal;
      font-size: 12px;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    justify-content: center;
    border-top: 2px solid grey;
    width: unset;

    li {
      border-bottom: 1px solid grey;
      padding: 5px 0 5px 0;
    }
  }
`;

export interface WeatherInfoProps {
  weatherData: any;
}

const WeatherInfo: React.FunctionComponent<WeatherInfoProps> = ({
  weatherData
}) => {
  const { main, sys, wind } = weatherData;

  return (
    <StyledWrapper className="weather__info">
      <li>
        <p>Wschód sł.</p>
        {new Date(sys.sunrise * 1000).toLocaleTimeString()}
      </li>
      <li>
        <p>Zachód sł.</p>
        {new Date(sys.sunset * 1000).toLocaleTimeString()}
      </li>
      <li>
        <p>T. odczuwalna</p>
        {(main.feels_like - 273.15).toFixed()}
        °C
      </li>
      <li>
        <p>Wilgotność</p>
        {main.humidity}%
      </li>
      <li>
        <p>Ciśnienie</p>
        {main.pressure}hPa
      </li>
      <li>
        <p>Wiatr</p>
        {wind.speed}m/s
      </li>
      <li>
        <p>T. Max</p>
        {(main.temp_max - 273.15).toFixed()}°C
      </li>
      <li>
        <p>T. Min</p>
        {(main.temp_min - 273.15).toFixed()}°C
      </li>
    </StyledWrapper>
  );
};

export default WeatherInfo;
