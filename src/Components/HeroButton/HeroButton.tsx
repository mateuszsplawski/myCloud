import React, { useEffect } from "react";
import { connect } from "react-redux";

import { storeUserLocation, callAPI } from "store/actionCreators";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { StyledHeroButton } from "./HeroButton.styled";

interface HeroButtonInterface {
  storeUserLocation: () => any;
  userLocation: {};
  callAPI: (searchedCity: string | null, userLocation: {}) => any;
  fetchingLocationData: boolean;
}

const HeroButton: React.FC<HeroButtonInterface> = ({
  storeUserLocation,
  userLocation,
  callAPI,
  fetchingLocationData,
}) => {
  const handleClick = () => {
    storeUserLocation();
  };
  useEffect(() => {
    if (userLocation) {
      callAPI(null, userLocation);
    }
  }, [fetchingLocationData, callAPI, userLocation]);

  return (
    <>
      {fetchingLocationData ? (
        <LoadingCircle />
      ) : (
        <StyledHeroButton onClick={handleClick}>Udostępnij</StyledHeroButton>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userLocation: state.userLocation,
  fetchingLocationData: state.fetchingLocationData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    storeUserLocation: () => dispatch(storeUserLocation()),
    callAPI: (searchedCity, userLocation) =>
      dispatch(callAPI(searchedCity, userLocation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroButton);
