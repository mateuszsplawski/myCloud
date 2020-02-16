import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeatherMoreInfo from "../WeatherForecast/WeatherForecast";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const StyledDiv = styled.div`
  position: relative;
  justify-content: space-around;
  display: flex;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 35px;
  box-shadow: 0 0 30px -20px #999999;
  width: 100%;
  margin-top: 25px;
  Ŕ section {
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

  button {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-30%, -50%);
    height: 35px;
    width: 35px;
    border-radius: 100%;
    border: none;
    background-color: #fff;
    box-shadow: -10px 0 20px -15px #999999;
    font-size: 25px;
    z-index: 100;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: 340px) {
    padding: 15px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    max-width: 300px;
    align-items: center;
  }
`;

const WeatherData = styled.ul`
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
    h4 {
      text-transform: uppercase;
      color: grey;
      font-weight: normal;
      font-size: 12px;
    }
  }

  @media (max-width: 700px) {
    justify-content: center;
    border-top: 2px solid grey;
    width: unset;

    li {
      border-bottom: 1px solid grey;
      padding: 5px 0 5px 0;
    }
  }
`;

const WeatherCard = ({ list, cityData = undefined }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(true);
  useEffect(() => (showMoreInfo ? setShowMoreInfo(!showMoreInfo) : undefined), [
    list
  ]);
  return (
    <div className="swiper-slide">
      <StyledDiv>
        <section>
          <h1>{cityData ? cityData.name : "- - -"}</h1>
          <h2>{cityData ? cityData.weather[0].description : undefined}</h2>
          <h3>
            {cityData ? (cityData.main.temp - 273.15).toFixed() : "- - -"}°
          </h3>
          {cityData ? <WeatherIcon id={cityData.weather[0].icon} /> : undefined}
        </section>
        <WeatherMoreInfo cityID={cityData.id} />
        <WeatherData>
          <li>
            <h4>Wschód sł.</h4>
            {cityData
              ? new Date(cityData.sys.sunrise * 1000).toLocaleTimeString()
              : "- - -"}
          </li>
          <li>
            <h4>Zachód sł.</h4>
            {cityData
              ? new Date(cityData.sys.sunset * 1000).toLocaleTimeString()
              : "- - -"}
          </li>
          <li>
            <h4>T. odczuwalna</h4>
            {cityData ? (cityData.main.feels_like - 273.15).toFixed() : "- - -"}
            °C
          </li>
          <li>
            <h4>Wilgotność</h4>
            {cityData ? cityData.main.humidity : "- - -"}%
          </li>
          <li>
            <h4>Ciśnienie</h4>
            {cityData ? cityData.main.pressure : "- - -"}hPa
          </li>
          <li>
            <h4>Wiatr</h4>
            {cityData ? cityData.wind.speed : "- - -"}m/s
          </li>
          <li>
            <h4>T. Max</h4>
            {cityData ? (cityData.main.temp_max - 273.15).toFixed() : "- - -"}°C
          </li>
          <li>
            <h4>T. Min</h4>
            {cityData ? (cityData.main.temp_min - 273.15).toFixed() : "- - -"}°C
          </li>
        </WeatherData>
      </StyledDiv>
    </div>
  );
};

export default WeatherCard;
