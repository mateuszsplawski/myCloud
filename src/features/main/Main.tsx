import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { StyledMain } from "./Main.styled";
import Slider from "features/slider/Slider";
import Favourites from "features/favourites/Favourites";
import Navigation from "features/navigation/Navigation";

interface MainInterface {
  weatherDataArray: {}[];
  favouriteVisible: boolean;
}

const Main: React.FC<MainInterface> = ({
  weatherDataArray,
  favouriteVisible,
}) => {
  return (
    <>
      <Navigation />
      <StyledMain>
        <Slider />
        {favouriteVisible && <Favourites />}
        {weatherDataArray.length === 0 && <Redirect to="/" />}
      </StyledMain>
    </>
  );
};

const mapStateToProps = (state) => ({
  weatherDataArray: state.home.weatherDataArray,
  favouriteVisible: state.navigation.favouriteVisible,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
