import React, { useEffect } from "react";
import { connect } from "react-redux";

import "swiper/css/swiper.min.css";
import { StyledSlider } from "./Slider.styled";
import { updateSliderStatus } from "./duck/sliderDuck";
import { setFavourite } from "./../home/duck/homeDuck";
import { mountSlider } from "./helpers";
import Card from "features/card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface SliderInterface {
  isSliderMounted: boolean;
  weatherDataArray: { id: number }[];
  updateSliderStatus: any;
}

const Slider: React.FC<SliderInterface> = ({
  isSliderMounted,
  weatherDataArray,
  updateSliderStatus,
}) => {
  useEffect(() => {
    if (weatherDataArray.length > 1 && !isSliderMounted) {
      mountSlider();
      updateSliderStatus();
    } else return undefined;
  }, [weatherDataArray.length, isSliderMounted, updateSliderStatus]);

  return (
    <StyledSlider
      isSliderMounted={isSliderMounted}
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
      <div className="swiper-button-prev">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="swiper-button-next">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </StyledSlider>
  );
};

const mapStateToProps = (state) => ({
  isSliderMounted: state.slider.isSliderMounted,
  weatherDataArray: state.home.weatherDataArray,
});

const mapDispatchToProps = { updateSliderStatus, setFavourite };

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
