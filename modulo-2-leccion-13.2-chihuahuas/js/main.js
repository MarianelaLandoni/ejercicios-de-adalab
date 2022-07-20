"use strict";

function getChihuahua() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un chichuhua";
      img.title = "Un chihuahua";
    });
}
const btn = document.querySelector(".js_dog");
btn.addEventListener("click", getChihuahua);
