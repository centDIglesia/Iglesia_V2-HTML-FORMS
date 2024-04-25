import { products } from "../../data/products";

export default function displayProducts() {
  let productHTML = '';

  products
    .filter(product => product.type === 'cake') 
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
