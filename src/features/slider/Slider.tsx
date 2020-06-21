import React, { useEffect } from "react";
import { connect } from "react-redux";

import "swiper/css/swiper.min.css";
import { StyledSlider } from "./Slider.styled";
import { updateSliderStatus } from "./duck/sliderDuck";
import { mountSlider } from "./helpers";
import Card from "features/card/Card";

export interface SliderInterface {
  isSliderInitialized: boolean;
  weatherDataArray: {}[];
  updateSliderStatus: any;
}

const Slider: React.FC<SliderInterface> = ({
  isSliderInitialized,
  weatherDataArray,
  updateSliderStatus,
}) => {
  useEffect(() => {
    weatherDataArray.length > 1 && !isSliderInitialized && mountSlider();
    return () => updateSliderStatus();
  }, [weatherDataArray.length, isSliderInitialized, updateSliderStatus]);

  return (
    <StyledSlider
      isSliderInitialized={isSliderInitialized}
      className="slider swiper-container"
    >
      <div className="swiper-wrapper">
        {weatherDataArray.length > 0 &&
          weatherDataArray.map((listItem, id) => (
            <Card
              weatherData={listItem[0]}
              forecastData={listItem[1]}
              airPollutionData={listItem[2]}
              key={id}
            />
          ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </StyledSlider>
  );
};

const mapStateToProps = (state) => ({
  isSliderInitialized: state.slider.sliderInitialized,
  weatherDataArray: state.home.weatherDataArray,
});

const mapDispatchToProps = { updateSliderStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
