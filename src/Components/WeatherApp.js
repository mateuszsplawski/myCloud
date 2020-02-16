import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DisplaySection from "./Sections/DisplaySection/DisplaySection";
import SearchSection from "./Sections/SearchSection/SearchSection";
import HeroImg from "./HeroImg/HeroImg";

const StyledMain = styled.main`
  @import url("https://fonts.googleapis.com/css?family=Exo:800&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: url("https://images.pexels.com/photos/695657/pexels-photo-695657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    center center;
  background-size: cover;

  > h1 {
    font-family: "Exo", sans-serif;
    color: rgb(245, 245, 245);
    text-shadow: 0 0 1px rgb(245, 245, 245);
    font-size: 35px;
    display: flex;
    flex-direction: column;
    span {
      font-size: 16px;
      position: relative;
      top: 6px;
    }
  }
`;

const WeatherApp = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const [city, setCity] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const key = "852bef2232b1fa115bee70b5c83d1bb2";
    const lang = "pl";
    if (city !== "") {
      fetch(
        `//api.openweathermap.org/data/2.5/weather?lang=${lang}&q=${city}&APPID=${key}`
      )
        .then(response =>
          response.ok
            ? response.json()
            : alert("Nieprawidłowa nazwa lokalizacji, spróbuj ponownie")
        )
        .then(data =>
          data !== undefined ? setList([data, ...list]) : undefined
        )
        .then(console.log(list));
    }
  }, [city]);

  const handleCitySearch = e => {
    setSearchedCity(e.target.value);
  };

  const handleSearchClick = e => {
    e.preventDefault();
    searchedCity === "" ? alert("Wpisz nazwę miasta") : setCity(searchedCity);
    setSearchedCity("");
  };

  return (
    <StyledMain>
      <h1>
        <span>my</span>Cloud
      </h1>
      <SearchSection
        handleCitySearch={handleCitySearch}
        searchedCity={searchedCity}
        handleSearchClick={handleSearchClick}
      />
      {!list.length > 0 ? <HeroImg /> : <DisplaySection list={list} />}
    </StyledMain>
  );
};

export default WeatherApp;
