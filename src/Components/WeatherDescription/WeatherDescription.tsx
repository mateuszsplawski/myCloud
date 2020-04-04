import React from "react";
import styled from "styled-components";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 100%;
  width: calc(100% / 3);
  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.grey};
    font-weight: lighter;
    font-size: ${({ theme }) => theme.fonts.xl};
  }

  h2 {
    font-weight: lighter;
    font-size: ${({ theme }) => theme.fonts.s};
    text-transform: uppercase;
  }

  h3 {
    margin: 15px 0 0 0;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.xxl};
  }

  div {
    height: 120px;
    width: 200px;
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tablet} {
    width: 50%;
  }

  ${({ theme }) => theme.media.tabletSmall} {
    width: 100%;
  }
`;

export interface WeatherDescriptionInterface {
  weatherData: {
    name: string;
    weather: Array<{
      description: string;
      icon: string;
    }>;
    main: {
      temp: number;
    };
  };
}

const WeatherDescription: React.FC<WeatherDescriptionInterface> = ({
  weatherData,
}) => {
  const { name, weather, main } = weatherData;
  return (
    <StyledWrapper className="weather__description">
      <h1>{name}</h1>
      <h2>{weather[0].description}</h2>
      <h3>{(main.temp - 273.15).toFixed()}°</h3>
      <WeatherIcon id={weather[0].icon} />
    </StyledWrapper>
  );
};

export default WeatherDescription;
