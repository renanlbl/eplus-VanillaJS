const openCart = () => {
  const buttonCart = document.querySelector("#cart");
  const menuCart = document.querySelector("#menu_cart");
  const arrow = document.querySelector("#arrow");
  const checkout = document.querySelector(".checkout");

  buttonCart.addEventListener("click", e => {
    e.preventDefault();
    menuCart.classList.toggle("open");
    arrow.classList.toggle("open");
    checkout.classList.toggle("openBlock");
  });
};

const listProducts = () => {
  const productList = document.querySelector("#products__list");
  const slotFinalPrice = document.querySelector("#total__price");
  let product = "";
  let finalPrice = 0;
  fetch("./js/products.json")
    .then(r => {
      return r.json();
    })
    .then(r => {
      r.map(item => {
        //Faz o cálculo final
        finalPrice += Number(item.price);

        //Monta o html dos produtos a partir do JSON products
        product += `
        <div class="header__menu__cart__products">
          <img class="products__avatar" src="${item.img}"></img>
          <div class="products__description">
            <p class="products__description__name">
            ${item.name}
            </p>
            <span class="products__description__qnt">Qtd.:${item.qnt}</span>
            <span class="products__description__value">R$ ${item.price}</span>
          </div>
        </div>`;
      });
      //insere o html na lista de produtos.
      productList.innerHTML = product;
      //insere o valor final no slot
      slotFinalPrice.innerHTML = `R$ ${finalPrice}`;
    });
};

//Inicializa a função de abrir e fechar o carrinho.
openCart();
listProducts();
