const mainBurMenu = document.querySelector(".mainBurMenu");
// меню сайта
const iconMenu = document.querySelector(".iconMenu");
// иконка меню сайта
const iconXmenu = document.querySelector(".iconXmenu");
// иконка меню крестик

function hiddenMenu() {
  mainBurMenu.classList.toggle("hidden");
}
// функция скрывает или показывает меню сайта

iconMenu.addEventListener("click", hiddenMenu);
// по клику на иконку срабатывает функция
iconXmenu.addEventListener("click", hiddenMenu);

// ПОДКЛЮЧАЕМ ДАННЫЕ из data.js
const dataPro = JSON.parse(dataProducts);
const dataBase = document.querySelector(".section3PositionCard");
dataPro.forEach((data) => {
  // Основной див <div class="card"></div>
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  // Вложенный див <div class="list__img">
  const divList__imgJs = document.createElement("div");
  divList__imgJs.classList.add("list__img");

  const img3_1 = document.createElement("img");
  img3_1.classList.add("img3_1");
  img3_1.src = data.url;
  img3_1.alt = "logoSection3.1";
  // Вложенный див <div class="magik__butt">
  const divMagik__buttJs = document.createElement("div");
  divMagik__buttJs.classList.add("magik__butt");
  //Вложенная в див кнопка magik
  const buttonCard__butt = document.createElement("button");
  buttonCard__butt.classList.add("card__butt");
  buttonCard__butt.textContent = "Add to Cart";
  buttonCard__butt.id = "cart";
  // Вложенный Фон кнопки
  const imgButBackground = document.createElement("img");
  imgButBackground.src = data.src;
  imgButBackground.alt = "basket";
  // Див cardBloсk
  const divCardBloсk = document.createElement("div");
  divCardBloсk.classList.add("cardBloсk");
  // Див cardBloсk Заголовок h1
  const titleCardHead = document.createElement("h1");
  titleCardHead.classList.add("titleCardHead");
  titleCardHead.textContent = data.name;
  // Див cardBloсk Параграф p
  const parCardP = document.createElement("p");
  parCardP.classList = "parCardP";
  parCardP.textContent = data.description;
  // Див cardBloсk Заголовок h2 price;
  const parCardPrice = document.createElement("h2");
  parCardPrice.classList.add("parCardPrice");
  parCardPrice.textContent = ` $${data.price}.00`;

  dataBase.appendChild(divCard);
  divCard.appendChild(divList__imgJs);
  divList__imgJs.appendChild(img3_1);
  divMagik__buttJs.appendChild(buttonCard__butt);
  divList__imgJs.appendChild(divMagik__buttJs);
  buttonCard__butt.appendChild(imgButBackground);
  divCard.appendChild(divCardBloсk);
  divCardBloсk.appendChild(titleCardHead);
  divCardBloсk.appendChild(parCardP);
  divCardBloсk.appendChild(parCardPrice);
});

// КОРЗИНА ТОВАРОВ Cart Items

const buttonEls = document.querySelectorAll(".card__butt");

const cardAddArr = Array.from(document.querySelectorAll(".card__butt"));
console.log(cardAddArr);

// const cartNum = document.querySelector("#cart_num");

const cart = document.querySelectorAll("#cart");
// console.log(cart);

class Cart {
  products;
  constructor() {
    this.products = [];
  }

  // функция добавления товара
  addProduct(product) {
    this.products.push(product);
  }

  // функция удаления товара
  removeProduct(index) {
    this.products.splice(index, 1);
  }
}

class Product {
  url;
  name;
  price;
  description;
  // console.log(description);
  constructor(card) {
    this.url = card.querySelector(".img3_1").src;
    // console.log(this.url);
    this.name = card.querySelector(".titleCardHead").innerText;
    // console.log(this.name);
    this.price = card.querySelector(".parCardPrice").innerText;
    // console.log(this.price);
    this.description = card.querySelector(".parCardP").innerText;
    // console.log(this.description);
  }
}

const myCart = new Cart();

if (localStorage.getItem("carttt") == null) {
  localStorage.setItem("carttt", JSON.stringify(myCart));
}

const savedCart = JSON.parse(localStorage.getItem("carttt"));
console.log(savedCart);
myCart.products = savedCart.products;
console.log(savedCart.products);

myCart.products = cardAddArr.forEach((cardAdd) => {
  cardAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.target.closest(".card");
    const product = new Product(card);
    const savedCart = JSON.parse(localStorage.getItem("carttt"));
    myCart.products = savedCart.products;
    myCart.addProduct(product);
    localStorage.setItem("carttt", JSON.stringify(myCart));

    // cartNum.textContent = myCart.count;
    console.log(myCart.products);
    console.log(localStorage.setItem);
  });
});

const popupSec = document.querySelector(".container7S");
// const popupClose = document.querySelector("#popup_close");
// const body = document.body;

// ВЕСЬ контейнер карточек в корзине
const sec7CardItemsId = document.querySelector("#sec7CardItems");

// контейнер ГОЛОВА карточек в корзине
// const sec7divDivId = document.querySelector('#sec7divDiv');

cart.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    // sec7Head.classList.add("sec7HeadTitle--open");
    // body.classList.add("lock");
    popupContainerFill();
  });
});

function popupContainerFill() {
  sec7CardItemsId.innerHTML = null;
  const savedCart = JSON.parse(localStorage.getItem("carttt"));
  console.log(savedCart);

  myCart.products = savedCart.products;
  console.log(savedCart.products);
  console.log(myCart.products);

  const productsHTML = myCart.products.map((product) => {
    // // Контейнер ЛИСТ карточек
    const sec7divDiv = document.createElement("div");
    sec7divDiv.classList.add("sec7divDiv");
    sec7divDiv.id = "sec7divDiv";

    const item = document.createElement("div");
    item.classList.add("item");

    const imgProduct = document.createElement("img");
    imgProduct.src = product.url;
    // ДИВ с инфой
    const itemContent = document.createElement("div");
    itemContent.classList.add("itemContent");

    const itemHeading = document.createElement("h3");
    itemHeading.classList.add("itemHeading");
    itemHeading.textContent = product.name;
    const itemText = document.createElement("p");
    itemText.textContent = product.description;

    const parCardPrice = document.createElement("h2");
    parCardPrice.textContent = product.price;

    // ДИВ с кнопкой
    const deleteDiv = document.createElement("div");
    deleteDiv.classList.add("deleteDiv");

    const sec7deleteDiv = document.createElement("button");
    sec7deleteDiv.classList.add("sec7deleteButt");
    const deleteIcon = document.createElement("img");
    deleteIcon.classList.add("deleteIcon");
    deleteIcon.src = "imgSection3/Vector.svg";

    // КНОПКА УДАЛЕНИЯ
    sec7deleteDiv.addEventListener("click", function (e) {
      myCart.removeProduct(product);
      // sec7divDiv.removeProduct(product);
      localStorage.setItem("carttt", JSON.stringify(myCart));
      popupContainerFill();
    });

    sec7CardItemsId.appendChild(sec7divDiv);

    sec7divDiv.appendChild(item);
    // Картинка продукта
    item.appendChild(imgProduct);
    // DIV с инфой
    item.appendChild(itemContent);
    itemContent.appendChild(itemHeading);
    itemContent.appendChild(itemText);
    itemContent.appendChild(parCardPrice);

    item.appendChild(deleteDiv);
    deleteDiv.appendChild(sec7deleteDiv);
    sec7deleteDiv.appendChild(deleteIcon);

    return sec7CardItemsId;
  });

  productsHTML.forEach((productHTML) => {
    popupSec.appendChild(productHTML);
  });
}

