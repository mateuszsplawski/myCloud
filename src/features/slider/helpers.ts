import { Mousewheel, Navigation } from "swiper/js/swiper.esm";
import Swiper from "swiper";

export const mountSlider = () => {
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
  new Swiper(".swiper-container", settings);
};
