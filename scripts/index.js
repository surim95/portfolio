const gnbLi = document.querySelectorAll(".gnb li");
//console.log(gnbLi);
gnbLi.forEach((gnbText, index) => {
  gnbText.addEventListener("click", () => {
    gnbLi.forEach((gnbRemove) => {
      gnbRemove.classList.remove("active");
    });
    wrap.slideTo(index, 1000, false);
    gnbText.classList.add("active");
  });
});

/* 팝업 */
const popupBg = document.querySelector(".popup_bg");
const bannerDesign = document.querySelectorAll(
  ".banner_container .swiper-wrapper .swiper-slide img"
);
const posterDesign = document.querySelectorAll(
  ".poster_container .swiper-wrapper .swiper-slide img"
);
const longDesign = document.querySelectorAll(
  ".long_design .swiper-wrapper .swiper-slide img"
);
// console.log(popupBg, bannerDesign, posterDesign, longDesign);

popupBg.style.display = "none";

for (let i of bannerDesign) {
  i.addEventListener("click", () => {
    popupBg.style.display = "flex";
    popupBg.children[0].children[0].src = i.src;
    wrap.mousewheel.disable();
  });
}
for (let i of posterDesign) {
  i.addEventListener("click", () => {
    popupBg.style.display = "flex";
    popupBg.children[0].children[0].src = i.src;
    wrap.mousewheel.disable();
  });
}
for (let i of longDesign) {
  i.addEventListener("click", () => {
    popupBg.style.display = "flex";
    popupBg.children[0].children[0].src = i.src;
    wrap.mousewheel.disable();
  });
}

popupBg.addEventListener("click", () => {
  popupBg.style.display = "none";
});
