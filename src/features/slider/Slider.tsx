import React, { useEffect } from "react";
import { connect } from "react-redux";

import { sliderInit } from "store/actionCreators";
import "swiper/css/swiper.min.css";
import { StyledSlider } from "./Slider.styled";
import WeatherCard from "components/WeatherCard/WeatherCard";

export interface SliderProps {
  list: Array<{}>;
  initializeSlider: () => any;
  isSliderInitialized: boolean;
}

const Slider: React.FC<SliderProps> = ({
  list,
  initializeSlider,
  isSliderInitialized,
}) => {
  useEffect(() => {
    if (list.length > 1 && !isSliderInitialized) {
      initializeSlider();
    } else return undefined;
  }, [list.length]);

  return (
    <StyledSlider
      isSliderInitialized={isSliderInitialized}
      className="slider swiper-container"
    >
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
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </StyledSlider>
  );
};

const mapStateToProps = (state) => ({
  isSliderInitialized: state.sliderInitialized,
  list: state.list,
});

const mapDispatchToProps = { sliderInit };

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
