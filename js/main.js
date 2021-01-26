const hamburguerIcon = document.querySelector(".header__hamburguerIcon");
const navMenuMobile = document.querySelector(".header__nav");
const body = document.querySelector("body");
var toggle = false;
hamburguerIcon.addEventListener("click", () => {
  if (!toggle) {
    toggle = true;
    hamburguerIcon.src = "../images/icon-close.svg";
    navMenuMobile.classList.add("header__nav--active");
    body.style.position = "fixed";
  } else {
    toggle = false;
    hamburguerIcon.src = "../images/icon-hamburger.svg";
    navMenuMobile.classList.remove("header__nav--active");
    body.style.removeProperty("position");
  }
});
