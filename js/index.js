"use strict";
const sectionBtnArr = document.querySelectorAll(".main__right__infoBlock-btn");
sectionBtnArr.forEach((element) => {
  element.addEventListener("click", (event) => {
    const theTarget = event.target.nextElementSibling;
    theTarget.classList.toggle("invisible");
    // theTarget.nextElementSibling.classlist.toggle("invisible");
  });
});
