import React, { useEffect } from "react";
import styled from "styled-components";
import HeroIcon from "../../../media/HeroIcon";
import { storeUserLocation, callAPI } from "../../../store/actionCreators";
import { connect } from "react-redux";

const StyledSection = styled.section`
  margin-top: 30px;
  width: 350px;
  height: 420px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 25px;
  box-shadow: 0px 10px 30px 0px ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  .hero {
    &__description {
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      h1 {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 36px;
      }

      h2 {
        font-size: 20px;
        font-weight: lighter;
        margin: 15px 0 0 0;
      }
    }

    &__image {
      width: 100%;
      height: 300px;
      right: 68px;
      bottom: -3px;
      position: absolute;
      z-index: 1;
      svg {
        object-fit: scale-down;
        width: 100%;
        height: 100%;
      }
    }
  }

  button {
    padding: 10px 20px;
    cursor: pointer;
    position: relative;
    z-index: 2;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    border: none;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 15px;
    outline: none;
  }
`;

interface HeroSectionInterface {
  storeUserLocation: () => any;
  userLocation: {};
  callAPI: (searchedCity: string | null, userLocation: {}) => any;
  fetchingLocationData: boolean;
}

const HeroSection: React.FC<HeroSectionInterface> = ({
  storeUserLocation,
  userLocation,
  callAPI,
  fetchingLocationData
}) => {
  const handleClick = () => {
    storeUserLocation();
  };

  useEffect(() => {
    if (userLocation) {
      callAPI(null, userLocation);
    }
  }, [fetchingLocationData]);
  return (
    <StyledSection className="hero">
      <div className="hero__description">
        <h2>
          Żeby skorzystać z aplikacji, udostępnij swoją lokalizację.
          <br />
          Kliknij w przycisk na dole!
        </h2>
      </div>
      <div className="hero__image">
        <HeroIcon />
      </div>
      <button onClick={handleClick}>Udostępnij lokalizację</button>
    </StyledSection>
  );
};

const mapStateToProps = state => {
  return {
    userLocation: state.userLocation,
    fetchingLocationData: state.fetchingLocationData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeUserLocation: () => dispatch(storeUserLocation()),
    callAPI: (searchedCity, userLocation) =>
      dispatch(callAPI(searchedCity, userLocation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
