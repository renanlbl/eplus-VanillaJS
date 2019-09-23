"use strict";

var openCart = function openCart() {
  var buttonCart = document.querySelector("#cart");
  var menuCart = document.querySelector("#menu_cart");
  var arrow = document.querySelector("#arrow");
  var checkout = document.querySelector(".checkout");
  buttonCart.addEventListener("click", function (e) {
    e.preventDefault();
    menuCart.classList.toggle("open");
    arrow.classList.toggle("open");
    checkout.classList.toggle("openBlock");
  });
};

var listProducts = function listProducts() {
  var productList = document.querySelector("#products__list");
  var slotFinalPrice = document.querySelector("#total__price");
  var product = "";
  var finalPrice = 0;
  fetch("./js/products.json").then(function (r) {
    return r.json();
  }).then(function (r) {
    r.map(function (item) {
      //Faz o cálculo final
      finalPrice += Number(item.price); //Monta o html dos produtos a partir do JSON products

      product += "\n        <div class=\"header__menu__cart__products\">\n          <img class=\"products__avatar\" src=\"".concat(item.img, "\"></img>\n          <div class=\"products__description\">\n            <p class=\"products__description__name\">\n            ").concat(item.name, "\n            </p>\n            <span class=\"products__description__qnt\">Qtd.:").concat(item.qnt, "</span>\n            <span class=\"products__description__value\">R$ ").concat(item.price, "</span>\n          </div>\n        </div>");
    }); //insere o html na lista de produtos.

    productList.innerHTML = product; //insere o valor final no slot

    slotFinalPrice.innerHTML = "R$ ".concat(finalPrice);
  });
}; //Inicializa a função de abrir e fechar o carrinho.


openCart();
listProducts();