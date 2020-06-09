var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $del = document.querySelectorAll('.btn.btn-delete');


let products = document.querySelectorAll('.product');
function updateSubtotal() {
//   // Iteration 1.1
  products.forEach(element => {
    let qty = (element.querySelector("input").value)
    let perUnit = +element.querySelector(".pu span").innerText;
    let subtotal = qty * perUnit;
    element.querySelector('.subtot span').innerText = subtotal;
  });
}


function calculateAll() {
  // Iteration 1.2
  updateSubtotal()
  let total = 0;
  products.forEach(element => {
    total += +element.querySelector('.subtot span').innerText;
  });
  document.querySelector('h2 span').innerText = total;
}

$calc.onclick = calculateAll;


for (let i = 0; i < $del.length; i++) {
  $del[i].onclick = products[i].removeChild()

}