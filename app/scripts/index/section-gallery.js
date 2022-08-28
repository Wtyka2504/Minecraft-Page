import "swiper/css/bundle";
import Swiper, { Navigation, Autoplay } from "swiper";

(function () {
  const section = document.querySelector("section.gallery"),
    container = section.querySelector(".swiper"),
    wrapper = section.querySelector(".swiper-wrapper"),
    prev = section.querySelector(".prev"),
    next = section.querySelector(".next");

  if (!wrapper.children.length) return section.classList.add("hidden");

  const swiper = new Swiper(container, {
    modules: [Navigation, Autoplay],
    speed: 500,
    navigation: {
      prevEl: prev,
      nextEl: next,
    },
    loop: true,
    slidesPerView: 2.5,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlides: 3,
    loopedSlidesLimit: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
      1450: {
        slidesPerView: 3,
      },
      1900: {
        slidesPerView: 4,
      },
    },
  });
})();
