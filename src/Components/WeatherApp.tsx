import React from "react";
import styled from "styled-components";
import DisplaySection from "./Sections/DisplaySection/DisplaySection";
import SearchSection from "./Sections/SearchSection/SearchSection";
import HeroImg from "./HeroImg/HeroImg";
import { connect } from "react-redux";
import Logo from "./Logo/Logo";

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
`;

const WeatherApp = ({ handleCitySearch, list, searchedCity }) => {
  const handleSearchClick = e => {
    e.preventDefault();
    handleCitySearch(list, searchedCity);
  };

  return (
    <StyledMain>
      <Logo />
      <SearchSection handleSearchClick={handleSearchClick} />
      {list.length === 0 ? <HeroImg /> : <DisplaySection list={list} />}
    </StyledMain>
  );
};

const mapStateToProps = state => {
  return {
    searchedCity: state.searchedCity,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCitySearch: (list, searchedCity) => {
      const key = "852bef2232b1fa115bee70b5c83d1bb2";
      const lang = "pl";
      if (searchedCity !== "") {
        fetch(
          `//api.openweathermap.org/data/2.5/weather?lang=${lang}&q=${searchedCity}&APPID=${key}`
        )
          .then(response =>
            response.ok
              ? response.json()
              : alert("Nieprawidłowa nazwa lokalizacji, spróbuj ponownie")
          )
          .then(data =>
            data !== undefined
              ? dispatch({ type: "WEATHER_SEARCH", list: [data, ...list] })
              : undefined
          )
          .then(dispatch({ type: "CLEAN_INPUT" }));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
