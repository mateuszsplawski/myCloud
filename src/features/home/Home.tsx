import React from "react";

import HeroIcon from "assets/HeroIcon";
import { StyledHome } from "./Home.styled";
import { constants } from "./constants";
import { Button } from "components/Button/Button";
import { connect } from "react-redux";
import { fetchData } from "./duck/homeDuck";
import { Redirect } from "react-router-dom";

interface HomeInterface {
  fetchData: () => any;
  weatherDataArray: {}[];
}

const Home: React.FC<HomeInterface> = ({ weatherDataArray, fetchData }) => {
  return (
    <StyledHome className="hero">
      <div className="hero__description">
        <h2>
          {constants.description}
          <br />
          {constants.description2}
        </h2>
      </div>
      <div className="hero__image">
        <HeroIcon />
      </div>
      <Button handleClick={fetchData} text={constants.buttonText} />
      {weatherDataArray.length > 0 && <Redirect to="/main" />}
    </StyledHome>
  );
};

const mapStateToProps = (state) => ({
  weatherDataArray: state.home.weatherDataArray,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
