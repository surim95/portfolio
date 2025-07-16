const gnbLi = document.querySelectorAll(".gnb li");
//console.log(gnbLi);
gnbLi.forEach((gnbText) => {
  gnbText.addEventListener("click", () => {
    gnbLi.forEach((gnbRemove) => {
      gnbRemove.classList.remove("active");
    });
    gnbText.classList.add("active");
  });
});


