import React, { useEffect } from "react";
import { connect } from "react-redux";
import { storeUserLocation, callAPI } from "../../store/actionCreators";
import styled from "styled-components";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const StyledWrapper = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.xs};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme }) => theme.colors.yellow};
  box-shadow: 0px 10px 15px -10px ${({ theme }) => theme.colors.yellow};
  border-radius: 15px;
  outline: none;
`;

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
        <StyledWrapper onClick={handleClick}>Udostępnij</StyledWrapper>
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
