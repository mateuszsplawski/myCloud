import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { StyledMain } from "./Main.styled";
import Slider from "features/slider/Slider";
import Search from "features/search/Search";
import Favourites from "features/favourites/Favourites";

interface MainInterface {
  weatherDataArray: {}[];
}

const Main: React.FC<MainInterface> = ({ weatherDataArray }) => {
  return (
    <StyledMain>
      <Search />
      <Slider />
      <Favourites />
      {weatherDataArray.length === 0 && <Redirect to="/" />}
    </StyledMain>
  );
};

const mapStateToProps = (state) => ({
  weatherDataArray: state.home.weatherDataArray,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
