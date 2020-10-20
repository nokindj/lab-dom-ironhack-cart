// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span")
  subtotal.innerHTML = price.innerHTML * quantity.value;
}

function calculateAll() {
  let allProducts = document.getElementsByClassName("product");
  let allProductsArray = [...allProducts];
  allProductsArray.forEach((item) => {
    updateSubtotal(item);
  })
    };

  // ITERATION 3



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
