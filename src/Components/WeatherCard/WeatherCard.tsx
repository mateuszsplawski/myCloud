import React, { useState } from "react";
import styled from "styled-components";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import AirPollutionInfo from "../AirPollutionInfo/AirPollutionInfo";
import Buttons from "../Buttons/Buttons";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

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

  .weather__description {
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

  @media (max-width: 340px) {
    padding: 15px;
  }

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

interface WeatherCardInterface {
  weatherData: any;
  airPollutionData: any;
  forecastData: any;
}

const WeatherCard: React.SFC<WeatherCardInterface> = ({
  weatherData,
  forecastData,
  airPollutionData
}) => {
  const { name, weather, main } = weatherData;
  const [buttonSwitched, setButtonSwitched] = useState(false);
  return (
    <StyledWrapper className="swiper-slide weather">
      <section className="weather__description">
        <h1>{name}</h1>
        <h2>{weather[0].description}</h2>
        <h3>{(main.temp - 273.15).toFixed()}°</h3>
        <WeatherIcon id={weather[0].icon} />
      </section>
      <WeatherInfo weatherData={weatherData} />
      {!buttonSwitched ? (
        <WeatherForecast forecastData={forecastData} />
      ) : (
        <AirPollutionInfo airPollutionData={airPollutionData} />
      )}
      <Buttons handleClick={setButtonSwitched} />
    </StyledWrapper>
  );
};

export default WeatherCard;
