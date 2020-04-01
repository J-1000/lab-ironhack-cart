var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $tBody = document.querySelector('tbody');

function updateSubtotal($product) {
  //
  let priceUnit = $product.querySelector('.pu span').innerHTML; //select price
  let quantity = $product.querySelector('.qty input').value; //select quantity
  let subT = $product.querySelector('.subtot span'); //select subtotal
  let subTotalPrice = priceUnit * quantity; //calculate the subtotal

  return (subT.innerHTML = subTotalPrice); //writes subtotal
}

function calculateAll() {
  let total = 0;
  //executes for each product the the updateSubtotal()
  document.querySelectorAll('.product').forEach(p => {
    total += updateSubtotal(p); //add the sum in the variable total
  });

  // Iteration 1.2
  $calc.onclick = calculateAll; //execute the calculateAll() when click on the button

  return (document.querySelector('h2 span').innerHTML = total); //writes the total
}

calculateAll();

function removeButtons() {
  removeBtns = document.querySelectorAll('.btn-delete');
  removeBtns.forEach(b => {
    b.addEventListener('click', productRemoveListener);
  });
  function productRemoveListener(event) {
    let removedNode = event.currentTarget.parentNode;
    $tBody.removeChild(removedNode.parentNode);
    disable();
    calculateAll();
  }
}
removeButtons();
// ITERATION 5

let createProd = document.querySelector('#create');

createProd.addEventListener('click', createProduct);

function createProduct(event) {
  enable();
  let newProductName = document.querySelector('.new td input').value;
  let newProductPrice = document.querySelector('input[placeholder="00.00"]')
    .value;
  let newNode = document.querySelector('.product');
  let clone = newNode.cloneNode(true);
  clone.querySelector('.product span').innerHTML = newProductName;
  clone.querySelector('.pu span').innerHTML = newProductPrice;
  $tBody.appendChild(clone);
  removeButtons();
  calculateAll();
}

function disable() {
  removeBtns = document.querySelectorAll('.btn-delete');
  if (removeBtns.length === 1)
    document.querySelector('.btn-delete:first-of-type').disabled = true;
}

function enable() {
  removeBtns = document.querySelectorAll('.btn-delete');
  document.querySelector('.btn-delete').disabled = false;
}
