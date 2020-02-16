import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeatherInfo from "../../WeatherCard/WeatherCard";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

const StyledSection = styled.section`
  display: flex;
  padding: 5vh 5vw;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    max-width: 350px;
  }
`;

const DisplaySection = ({ list }) => {
  const [swiperInit, setSwiperInit] = useState(false);
  useEffect(() => {
    if (list.length > 1 && !swiperInit) {
      const mySwiper = new Swiper(".swiper-container", {
        grabCursor: true,

        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      });
      setSwiperInit(true);
    } else return undefined;
  }, [list.length]);
  return (
    <StyledSection>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {list.length > 0
            ? list.map((listItem, id) => (
                <WeatherInfo list={list} cityData={listItem} key={id} />
              ))
            : undefined}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </StyledSection>
  );
};

export default DisplaySection;
