import React from "react";
import styled from "styled-components";
import DisplaySection from "./Sections/DisplaySection/DisplaySection";
import HeroSection from "./Sections//HeroSection/HeroSection";
import { connect } from "react-redux";
import Logo from "./Logo/Logo";
import { ErrorPopup } from "./ErrorPopup/ErrorPopup";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
`;

interface WeatherAppInterface {
  list: Array<[any]>;
}

const WeatherApp: React.FC<WeatherAppInterface> = ({ list }) => {
  return (
    <StyledMain className="main">
      <Logo />
      {list.length === 0 ? <HeroSection /> : <DisplaySection />}
    </StyledMain>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, null)(WeatherApp);
