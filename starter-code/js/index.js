var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal($product) {
  // Iteration 1.1
  let products = document.querySelectorAll('.product');
  let total = 0;
  for (const product of products) {
  let priceUnit = product.querySelector(".product .pu span").innerText;
  let howMany = product.querySelector(".product .qty input").value;
  let subTotal = priceUnit * howMany;
  product.querySelector(".product .subtot span").innerText = subTotal;
  total += subTotal
  document.querySelector('h2 span').innerText = total}
}
document.querySelector('.btn.btn-success').addEventListener("click",
  updateSubtotal

)


function calculateAll() {
  // Iteration 1.2
  
}
$calc.onclick = calculateAll;