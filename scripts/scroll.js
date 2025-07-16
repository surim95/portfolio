const wrap = new Swiper("#total_wrap", {
  direction: "vertical",
  mousewheel: true,
});

const webDesign = new Swiper('.web_slide',{
  /* autoplay:{delay:2000,}, */
  centeredSlides:true,
  slidesPerView:1,
  loop:true,
  navigation:{
    prevEl: '.web_slide .swiper-button-prev',
    nextEl: '.web_slide .swiper-button-next',
  }
})