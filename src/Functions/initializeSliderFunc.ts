import { Mousewheel } from "swiper/js/swiper.esm";
import Swiper from "swiper";

const initializeSliderFunc = () => {
  Swiper.use([Mousewheel]);
  const settings = {
    spaceBetween: 100,
    centeredSlides: true,
    speed: 500,
    observer: true,
    resistanceRatio: 0.5,
    mousewheel: true
  };
  const mySwiper = new Swiper(".swiper-container", settings);
};

export default initializeSliderFunc;
