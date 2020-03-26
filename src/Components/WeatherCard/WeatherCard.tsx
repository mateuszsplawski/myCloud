import React from "react";
import styled from "styled-components";
import WeatherMoreInfo from "../WeatherForecast/WeatherForecast";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const StyledWrapper = styled.div`
  position: relative;
  justify-content: space-around;
  display: flex;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 35px;
  box-shadow: 0 0 30px -20px #999999;
  width: 100%;
  margin-top: 25px;

  .weather {
    &__description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      h1 {
        font-family: "Exo", sans-serif;
        text-shadow: 0 0 1px rgb(245, 245, 245);
        font-weight: lighter;
        font-size: 28px;
      }

      h2 {
        font-weight: lighter;
        font-size: 14px;
        text-transform: uppercase;
      }

      h3 {
        margin-top: 5px;
        font-weight: bold;
        font-size: 32px;
      }

      div {
        height: 120px;
        width: 150px;
      }
    }

    &__info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      width: 35%;

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
    }
  }

  @media (max-width: 340px) {
    padding: 15px;
  }

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;

    .weather {
      &__info {
        justify-content: center;
        border-top: 2px solid grey;
        width: unset;

        li {
          border-bottom: 1px solid grey;
          padding: 5px 0 5px 0;
        }
      }
    }
  }
`;

interface WeatherCardInterface {
  cityData: any;
}

const WeatherCard: React.SFC<WeatherCardInterface> = ({ cityData }) => {
  const { name, weather, main, sys, id, wind } = cityData;
  return (
    <StyledWrapper className="swiper-slide weather">
      <section className="weather__description">
        <h1>{name}</h1>
        <h2>{weather[0].description}</h2>
        <h3>{(main.temp - 273.15).toFixed()}°</h3>
        <WeatherIcon id={weather[0].icon} />
      </section>
      <WeatherMoreInfo cityID={id} />
      <ul className="weather__info">
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
          {(cityData.main.temp_max - 273.15).toFixed()}°C
        </li>
        <li>
          <p>T. Min</p>
          {(cityData.main.temp_min - 273.15).toFixed()}°C
        </li>
      </ul>
    </StyledWrapper>
  );
};

export default WeatherCard;
