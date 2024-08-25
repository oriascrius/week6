// swiper - https://swiperjs.com/get-started
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
//  3.精選文章 
  const swiper_article = new Swiper(".mySwiper-article", {
    // 小尺寸
    slidesPerView: 1, // 一次呈現幾張投影片
    slidesPerGroup: 1, // 每次滑動移動1張投影片
    spaceBetween: 24, // 投影片之間的間距
    pagination: {
      el: ".swiper-pagination-custom-article", // 分頁元素
      type: "fraction" // 分頁類型，這裡設為分數形式
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
    breakpoints: {
      992: { // 大尺寸 (大於 992px) 时的设置
        slidesPerView: 2, // 在大尺寸时显示一张投影片
        spaceBetween: 48 // 可调整小尺寸时的间距
      }
    }
  });
// 7.熱門行程
  const swiper_schedule = new Swiper(".mySwiper-schedule", {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      991: {
        loop: false,
        slidesPerView: 0,
      }
    }
  });

  import './assets/scss/all.scss';
  import 'bootstrap/dist/js/bootstrap.min.js';
console.log("Hello world!");