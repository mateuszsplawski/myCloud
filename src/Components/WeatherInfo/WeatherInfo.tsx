import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: calc(100% / 3);

  li {
    width: 50%;
    list-style: none;
    font-weight: bolder;
    padding: 15px 0;
    font-size: ${({ theme }) => theme.fonts.m};

    p {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: normal;
      font-size: ${({ theme }) => theme.fonts.s};
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tablet} {
    width: 50%;
  }

  ${({ theme }) => theme.media.tabletSmall} {
    width: 100%;
    margin: 50px 0 0 0;
    text-align: center;
  }
`;

export interface WeatherInfoProps {
  weatherData: {
    main: {
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
  };
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherData }) => {
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
