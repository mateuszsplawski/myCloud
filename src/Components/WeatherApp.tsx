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
  padding: 50px 0 0 0;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: url("https://images.pexels.com/photos/695657/pexels-photo-695657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    center center;
  background-size: cover;
`;

const WeatherApp = ({ list }) => {
  return (
    <StyledMain>
      <Logo />
      <SearchSection />
      {list.length === 0 ? <HeroImg /> : <DisplaySection list={list} />}
    </StyledMain>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, null)(WeatherApp);
