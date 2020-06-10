// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = document.querySelector('.pu span').innerHTML; 
  let quantity = document.querySelector('.qty label input').value;
  let subTotal = price * quantity;

  document.querySelectorAll('.qty label input').onclick = function updateQuantity() {
    quantity++;
    updateSubtotal();
  }
 
  document.querySelector(".subtot span").innerHTML = subTotal;

  console.log(price);
  console.log(quantity);
  console.log(subTotal);

  return subTotal;
}
updateSubtotal();

/*
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

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
*/