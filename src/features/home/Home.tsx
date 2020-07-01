import React from "react";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HeroIcon from "assets/HeroIcon";
import { StyledHome } from "./Home.styled";
import { constants } from "./constants";
import { Button } from "components/Button/Button";
import { fetchData } from "./duck/homeDuck";
import { LoadingCircle } from "components/LoadingCircle/LoadingCircle";
import Search from "features/search/Search";

interface HomeInterface {
  fetchData: () => any;
  weatherDataArray: {}[];
  fetchingData: boolean;
}

const Home: React.FC<HomeInterface> = ({
  weatherDataArray,
  fetchData,
  fetchingData,
}) => {
  return (
    <StyledHome className="hero">
      <div className="hero__description">
        <h1>{constants.description}</h1>
      </div>
      <div className="hero__actions">
        {!fetchingData ? (
          <>
            <Search />
            <Button
              secondary
              handleClick={fetchData}
              text={constants.buttonText}
              icon={faLocationArrow}
            />
          </>
        ) : (
          <LoadingCircle />
        )}
      </div>
      <div className="hero__image">
        <HeroIcon />
      </div>
      {weatherDataArray.length > 0 && <Redirect to="/main" />}
    </StyledHome>
  );
};

const mapStateToProps = (state) => ({
  weatherDataArray: state.home.weatherDataArray,
  fetchingData: state.home.fetchingData,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
