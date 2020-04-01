import Weather01d from "../../media/weather/animated/01d";
import Weather01n from "../../media/weather/animated/01n";
import Weather02d from "../../media/weather/animated/02d";
import Weather02n from "../../media/weather/animated/02n";
import Weather03d from "../../media/weather/animated/03d";
import Weather03n from "../../media/weather/animated/03n";
import Weather04d from "../../media/weather/animated/04d";
import Weather04n from "../../media/weather/animated/04n";
import Weather09d from "../../media/weather/animated/09d";
import Weather09n from "../../media/weather/animated/09n";
import Weather10d from "../../media/weather/animated/10d";
import Weather10n from "../../media/weather/animated/10n";
import Weather11d from "../../media/weather/animated/11d";
import Weather11n from "../../media/weather/animated/11n";
import Weather13d from "../../media/weather/animated/13d";
import Weather13n from "../../media/weather/animated/13n";
import Weather50d from "../../media/weather/animated/50d";
import Weather50n from "../../media/weather/animated/50n";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

interface WeatherIconInterface {
  id: String;
}

const WeatherIcon: React.FC<WeatherIconInterface> = ({ id }) => {
  const weatherIcons = [
    { id: "01d", weather: <Weather01d viewbox={"0 5 65 50"} /> },
    { id: "01n", weather: <Weather01n viewbox={"0 5 65 50"} /> },
    { id: "02d", weather: <Weather02d viewbox={"0 5 65 50"} /> },
    { id: "02n", weather: <Weather02n viewbox={"0 5 65 50"} /> },
    { id: "03d", weather: <Weather03d viewbox={"0 5 65 50"} /> },
    { id: "03n", weather: <Weather03n viewbox={"0 5 65 50"} /> },
    { id: "04d", weather: <Weather04d viewbox={"0 5 65 50"} /> },
    { id: "04n", weather: <Weather04n viewbox={"0 5 65 50"} /> },
    { id: "09d", weather: <Weather09d viewbox={"0 5 65 50"} /> },
    { id: "09n", weather: <Weather09n viewbox={"0 5 65 50"} /> },
    { id: "10d", weather: <Weather10d viewbox={"0 5 65 50"} /> },
    { id: "10n", weather: <Weather10n viewbox={"0 5 65 50"} /> },
    { id: "11d", weather: <Weather11d viewbox={"0 5 65 50"} /> },
    { id: "11n", weather: <Weather11n viewbox={"0 5 65 50"} /> },
    { id: "13d", weather: <Weather13d viewbox={"0 5 65 50"} /> },
    { id: "13n", weather: <Weather13n viewbox={"0 5 65 50"} /> },
    { id: "50d", weather: <Weather50d viewbox={"0 5 65 50"} /> },
    { id: "50n", weather: <Weather50n viewbox={"0 5 65 50"} /> }
  ];
  return (
    <StyledWrapper>
      {weatherIcons.filter(weatherIcon => weatherIcon.id === id)[0].weather}
    </StyledWrapper>
  );
};

export default WeatherIcon;
