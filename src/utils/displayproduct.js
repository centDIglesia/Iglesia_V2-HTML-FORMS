import { products } from "../../data/products";

export default function displayProducts() {
  let productHTML = "";

  
  function filterAndDisplay(category) {
    productHTML = "";
    products
      .filter((product) => product.type === category)
      .forEach((product) => {
        productHTML += `
          <div class="menu__card">
            <div class="card__image-container">
              <img src="${product.image}" alt="" class="card__image" />
            </div>
            <div class="card__content">
              <h3 class="card__name">${product.name}</h3>
              <p class="card__price">${product.priceCents}</p>
              <p class="card__description">${product.description}</p>
              <a class="card__btn btn" href="#order__page" data-product-id="${product.id}">Add to cart</a>
            </div>
          </div>
        `;
      });
    document.querySelector(".menu__products-flex").innerHTML = productHTML;
  }

  document.querySelectorAll(".product__category-name").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".product__category-name").forEach((btn) => {
        btn.parentElement.classList.remove("categorist__btn-list-active");
      });

      this.parentElement.classList.add("categorist__btn-list-active");

      const category = this.classList[1];

      filterAndDisplay(category);
    });
  });

  filterAndDisplay("cake");
}
