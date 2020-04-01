import React, { useEffect } from "react";
import WeatherCard from "./../WeatherCard/WeatherCard";
import "swiper/css/swiper.min.css";
import styled from "styled-components";
import { connect } from "react-redux";
import { sliderInit } from "./../../store/actionCreators";

const StyledWrapper = styled.div`
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 0 20px 0;
  }
`;

export interface SliderProps {
  list: Array<Object>;
  initializeSlider: Function;
  isSliderInitialized: Boolean;
}

const Slider: React.FunctionComponent<SliderProps> = ({
  list,
  initializeSlider,
  isSliderInitialized
}) => {
  useEffect(() => {
    if (list.length > 1 && !isSliderInitialized) {
      initializeSlider();
    } else return undefined;
  }, [list.length]);

  return (
    <StyledWrapper className="swiper-container">
      <div className="swiper-wrapper">
        {list.length > 0
          ? list.map((listItem, id) => (
              <WeatherCard
                weatherData={listItem[0]}
                forecastData={listItem[1]}
                airPollutionData={listItem[2]}
                key={id}
              />
            ))
          : undefined}
      </div>
      <div className="swiper-pagination"></div>
    </StyledWrapper>
  );
};

const mapStateToProps = state => {
  return {
    isSliderInitialized: state.sliderInitialized,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializeSlider: () => {
      dispatch(sliderInit());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
