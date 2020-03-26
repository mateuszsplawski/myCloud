import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  order: 1;
  width: 30%;

  li {
    position: relative;
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    width: 100%;
    list-style: none;

    &:last-of-type {
      border: none;
    }

    div {
      height: 20px;
      width: 40px;
    }

    p {
      font-size: 12px;
      &:first-of-type {
        font-size: 16px;
        font-weight: bolder;
      }
    }
  }

  ${({ theme }) => theme.media.tablet} {
    margin: 15px 0 0 0;
    border-top: 2px solid grey;
    width: 100%;

    order: unset;
  }
`;

const WeatherForecast = ({ cityID }) => {
  const [moreInfo, setMoreInfo] = useState(undefined);
  useEffect(() => {
    const key = "852bef2232b1fa115bee70b5c83d1bb2";
    const lang = "pl";
    const fetchMoreInfo = async () => {
      await fetch(
        `//api.openweathermap.org/data/2.5/forecast?lang=${lang}&id=${cityID}&APPID=${key}`
      )
        .then(response => response.json())
        .then(data => setMoreInfo(data))
        .catch(err => console.log(err));
    };
    fetchMoreInfo();
  }, []);

  return (
    <StyledUl className={moreInfo ? `activeID_${cityID}` : ""}>
      {moreInfo
        ? moreInfo.list
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
