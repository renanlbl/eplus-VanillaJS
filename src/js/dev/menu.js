const buttonMenu = document.querySelector("#button-menu");
const menuMobile = document.querySelector(".header__navigation--mobile");

buttonMenu.addEventListener("click", e => {
  e.preventDefault();
  menuMobile.classList.toggle("open_menu");
  buttonMenu.classList.toggle("open_menu_button");
});
