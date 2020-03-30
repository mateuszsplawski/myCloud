import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeatherCard from "../../WeatherCard/WeatherCard";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

const StyledSection = styled.section`
  display: flex;
  padding: 5vh 5vw;
  justify-content: center;
  height: 100%;
  align-items: center;
  max-width: 1000px;

  .swiper-container {
    width: 100%;
    height: 100%;
    padding: 0 0 20px 0;
  }

  ${({ theme }) => theme.media.tablet} {
    max-width: 350px;
    width: 100%;
    padding: unset;
  }
`;

const DisplaySection = ({ list }) => {
  const [swiperInit, setSwiperInit] = useState(false);
  useEffect(() => {
    if (list.length > 1 && !swiperInit) {
      const settings = {
        grabCursor: true,
        spaceBetween: 100,
        centeredSlides: true,
        speed: 500,
        observer: true,
        resistanceRatio: 0.5,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      };
      const mySwiper = new Swiper(".swiper-container", settings);
      setSwiperInit(true);
    } else return undefined;
  }, [list.length]);
  return (
    <StyledSection>
      <div className="swiper-container">
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
      </div>
    </StyledSection>
  );
};

export default DisplaySection;
