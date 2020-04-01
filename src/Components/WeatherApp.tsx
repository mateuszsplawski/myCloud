import React, { useEffect } from "react";
import styled from "styled-components";
import DisplaySection from "./Sections/DisplaySection/DisplaySection";
import SearchSection from "./Sections/SearchSection/SearchSection";
import Hero from "./Hero/Hero";
import { connect } from "react-redux";
import Logo from "./Logo/Logo";
import { ErrorPopup } from "./ErrorPopup/ErrorPopup";

const StyledMain = styled.main`
  @import url("https://fonts.googleapis.com/css?family=Exo:800&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0 0;
  position: relative;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(to right, #1f61ed, #2f80ed);
`;

interface WeatherAppInterface {
  list: Array<[]>;
}

const WeatherApp: React.FC<WeatherAppInterface> = ({ list }) => {
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(
      elo => console.log(elo),
      () => console.log("nope"),
      options
    );
  }, []);
  return (
    <StyledMain>
      <Logo />
      <SearchSection />
      {list.length === 0 ? <Hero /> : <DisplaySection />}
    </StyledMain>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, null)(WeatherApp);
