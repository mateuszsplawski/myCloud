import { Mousewheel, Navigation } from "swiper/js/swiper.esm";
import Swiper from "swiper";

const initializeSliderFunc = () => {
  Swiper.use([Mousewheel, Navigation]);
  const settings = {
    spaceBetween: 100,
    centeredSlides: true,
    speed: 500,
    observer: true,
    resistanceRatio: 0.5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  const mySwiper = new Swiper(".swiper-container", settings);
};

export default initializeSliderFunc;
