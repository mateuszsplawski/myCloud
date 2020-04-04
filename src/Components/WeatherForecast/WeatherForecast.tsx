import React from "react";
import styled from "styled-components";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: calc(100% / 3);

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    width: 100%;
    list-style: none;

    &:last-of-type {
      border: none;
    }

    div {
      height: 30px;
      width: 50px;
    }

    p {
      font-size: ${({ theme }) => theme.fonts.s};
      &:first-of-type {
        font-size: ${({ theme }) => theme.fonts.m};
        font-weight: bolder;
      }
    }
  }

  /* MEDIA QUERIES */

  ${({ theme }) => theme.media.tablet} {
    margin: 45px 0 0 0;
    width: 100%;

    li {
      div {
        height: 50px;
        width: 70px;
      }

      p {
        font-size: ${({ theme }) => theme.fonts.m};
        &:first-of-type {
          font-size: ${({ theme }) => theme.fonts.l};
        }
      }
    }
  }
`;

interface WeatherForecastInterface {
  forecastData: {
    list: Array<{
      weather: Array<{ icon: string }>;
      main: {
        temp: number;
      };
      dt_txt: string;
    }>;
  };
}

const WeatherForecast: React.FC<WeatherForecastInterface> = ({
  forecastData,
}) => {
  return (
    <StyledUl className="weather__forecast">
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
    </StyledUl>
  );
};

export default WeatherForecast;
