export function showdropdown() {
  const dropdownMenu = document.querySelector(".fs-option__btn");
  const foodOptions = document.querySelector(".food-service__options");

  dropdownMenu.addEventListener("click", () => {
    foodOptions.style.display =
      foodOptions.style.display === "flex" ? "none" : "flex";
    dropdownMenu.querySelector("i").innerHTML =
      foodOptions.style.display === "flex"
        ? '<i class="fa-sharp fa-solid fa-caret-down"></i>'
        : '<i class="fa-sharp fa-solid fa-caret-right"></i>';
  });
}


export function orderplaced() {
    const submit = document.querySelector(".submit-js");
   
    submit.addEventListener("click", () => {
      alert('Order Placed');
    });
  }
  