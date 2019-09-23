"use strict";

var buttonMenu = document.querySelector("#button-menu");
var menuMobile = document.querySelector(".header__navigation--mobile");
buttonMenu.addEventListener("click", function (e) {
  e.preventDefault();
  menuMobile.classList.toggle("open_menu");
  buttonMenu.classList.toggle("open_menu_button");
});