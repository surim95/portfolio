const header = document.querySelector("header");
const wrap = new Swiper("#total_wrap", {
  direction: "vertical",
  mousewheel: true,
  on: {
    slideChange: function () {
      const i = this.activeIndex;
      gnbLi.forEach((gnbRemove) => gnbRemove.classList.remove("active"));
      gnbLi[i].classList.add("active");
    },
  },
});

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
