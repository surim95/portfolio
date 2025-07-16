const wrap = new Swiper("#total_wrap", {
  direction: "vertical",
  mousewheel: true,
});

function move(i) {
  wrap.slideTo(i, 1000, false);
}

const webDesign = new Swiper(".web_slide", {
  /* autoplay:{delay:2000,}, */
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: ".web_slide .swiper-button-prev",
    nextEl: ".web_slide .swiper-button-next",
  },
});
