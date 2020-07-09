import React from "react";
import styled from "styled-components";

import Weather01d from "assets/svg/01d";
import Weather01n from "assets/svg/01n";
import Weather02d from "assets/svg/02d";
import Weather02n from "assets/svg/02n";
import Weather03d from "assets/svg/03d";
import Weather03n from "assets/svg/03n";
import Weather04d from "assets/svg/04d";
import Weather04n from "assets/svg/04n";
import Weather09d from "assets/svg/09d";
import Weather09n from "assets/svg/09n";
import Weather10d from "assets/svg/10d";
import Weather10n from "assets/svg/10n";
import Weather11d from "assets/svg/11d";
import Weather11n from "assets/svg/11n";
import Weather13d from "assets/svg/13d";
import Weather13n from "assets/svg/13n";
import Weather50d from "assets/svg/50d";
import Weather50n from "assets/svg/50n";

const StyledWrapper = styled.span`
  width: 100%;
  height: 100%;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
  }
`;

interface WeatherIconInterface {
  id: string;
}

const WeatherIcon: React.FC<WeatherIconInterface> = ({ id }) => {
  const weatherIcons = [
    { id: "01d", weather: <Weather01d viewBox={"0 5 65 50"} /> },
    { id: "01n", weather: <Weather01n viewBox={"0 5 65 50"} /> },
    { id: "02d", weather: <Weather02d viewBox={"0 5 65 50"} /> },
    { id: "02n", weather: <Weather02n viewBox={"0 5 65 50"} /> },
    { id: "03d", weather: <Weather03d viewBox={"0 5 65 50"} /> },
    { id: "03n", weather: <Weather03n viewBox={"0 5 65 50"} /> },
    { id: "04d", weather: <Weather04d viewBox={"0 5 65 50"} /> },
    { id: "04n", weather: <Weather04n viewBox={"0 5 65 50"} /> },
    { id: "09d", weather: <Weather09d viewBox={"0 5 65 50"} /> },
    { id: "09n", weather: <Weather09n viewBox={"0 5 65 50"} /> },
    { id: "10d", weather: <Weather10d viewBox={"0 5 65 50"} /> },
    { id: "10n", weather: <Weather10n viewBox={"0 5 65 50"} /> },
    { id: "11d", weather: <Weather11d viewBox={"0 5 65 50"} /> },
    { id: "11n", weather: <Weather11n viewBox={"0 5 65 50"} /> },
    { id: "13d", weather: <Weather13d viewBox={"0 5 65 50"} /> },
    { id: "13n", weather: <Weather13n viewBox={"0 5 65 50"} /> },
    { id: "50d", weather: <Weather50d viewBox={"0 5 65 50"} /> },
    { id: "50n", weather: <Weather50n viewBox={"0 5 65 50"} /> },
  ];
  return (
    <StyledWrapper>
      {weatherIcons.filter((weatherIcon) => weatherIcon.id === id)[0].weather}
    </StyledWrapper>
  );
};

export default WeatherIcon;
