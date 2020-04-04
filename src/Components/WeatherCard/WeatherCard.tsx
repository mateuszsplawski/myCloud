import React, { useState } from "react";
import styled from "styled-components";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import AirPollutionInfo from "../AirPollutionInfo/AirPollutionInfo";
import Buttons from "../Buttons/Buttons";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherDescription from "../WeatherDescription/WeatherDescription";

const StyledWrapper = styled.div`
  position: relative;
  justify-content: space-around;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkWhite};
  border-radius: 25px;
  padding: 40px;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.media.tablet} {
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.media.tabletSmall} {
    flex-wrap: nowrap;
    flex-direction: column;
  }

  ${({ theme }) => theme.media.mobileLarge} {
    padding: 20px;
  }
`;

interface WeatherCardInterface {
  weatherData: any;
  airPollutionData: any;
  forecastData: any;
}

const WeatherCard: React.FC<WeatherCardInterface> = ({
  weatherData,
  forecastData,
  airPollutionData,
}) => {
  const [buttonSwitched, setButtonSwitched] = useState(false);
  return (
    <StyledWrapper className="weather swiper-slide">
      <WeatherDescription weatherData={weatherData} />
      <WeatherInfo weatherData={weatherData} />
      {!buttonSwitched ? (
        <WeatherForecast forecastData={forecastData} />
      ) : (
        <AirPollutionInfo airPollutionData={airPollutionData} />
      )}
      <Buttons active={buttonSwitched} handleClick={setButtonSwitched} />
    </StyledWrapper>
  );
};

export default WeatherCard;
