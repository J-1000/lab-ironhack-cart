var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal(product) {
  console.log(product);

  const price = product.querySelector('.pu>span').innerHTML;
  const quantity = product.querySelector('.qty>label>input').value;
  console.log(price);
  product.querySelector('.subtot>span').innerHTML = price * quantity;
  // Iteration 1.1
  return price * quantity;
}



console.log($cart.querySelectorAll("tr"))

function calculateAll() {
  // Iteration 1.2
  const singleProduct = document.querySelector('.product');

  updateSubtotal(singleProduct);

  const price = $cart.querySelectorAll("tr");

  let total = 0;
  for (let i = 0; i < price.length; i++) {
    total += updateSubtotal(price[i]);
  }

  document.querySelector('h2>span').innerHTML = total;


}
$calc.onclick = calculateAll;






//Button