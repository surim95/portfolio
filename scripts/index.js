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
