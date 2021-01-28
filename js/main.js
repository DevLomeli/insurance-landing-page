const hamburguerIcon = document.querySelector(".header__hamburguerIcon");
const navMenuMobile = document.querySelector(".mobileMenu");
const body = document.querySelector("body");

var toggle = false;

hamburguerIcon.addEventListener("click", () => {

  if (!toggle) {

    toggle = true;
    hamburguerIcon.src = "./images/icon-close.svg";
    navMenuMobile.classList.add("mobileMenu--show");
    body.style.position = "fixed";

  } else {

    toggle = false;
    hamburguerIcon.src = "./images/icon-hamburger.svg";
    navMenuMobile.classList.remove("mobileMenu--show");
    body.style.removeProperty("position");
    
  }
});
