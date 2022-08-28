import "swiper/css/bundle";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

(function () {
  const section = document.querySelector("section.news"),
    container = section.querySelector(".swiper"),
    wrapper = section.querySelector(".swiper-wrapper"),
    pagination = section.querySelector(".swiper-pagination"),
    prev = section.querySelector(".prev"),
    next = section.querySelector(".next"),
    curr = section.querySelector(".current"),
    total = section.querySelector(".total"),
    swiperLength = wrapper.children.length,
    slidesPerView = 1;

  if (!wrapper.children.length) return section.classList.add("hidden");

  const swiper = new Swiper(container, {
    modules: [Navigation, Pagination, Autoplay],
    speed: 500,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      prevEl: prev,
      nextEl: next,
    },
    loop: true,
    slidesPerView,
    spaceBetween: 30,
    grabCursor: true,
    loopedSlidesLimit: false,
    autoHeight: true,
  });
  swiper.on("snapIndexChange", function (e) {
    const index = e.realIndex + 1;
    curr.textContent = index > 10 ? index : `0${index}`;
  });

  total.textContent = swiperLength > 10 ? swiperLength : `0${swiperLength}`;
  curr.textContent = "01";
})();
