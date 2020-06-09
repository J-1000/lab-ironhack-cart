var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

let btn = document.querySelector(".btn-success")
btn.addEventListener("click", updateAll)

function updateAll($product) {
  // Iteration 1 to 3
  let products = document.querySelectorAll(".product")
  let total = 0;
  for (const product of products) {
    let price = product.querySelector(".pu>span").innerText;
    let multiply = product.querySelector(".qty input").value;
    let subTotal = price * multiply
    product.querySelector(".subtot span").innerText = subTotal;
    total += subTotal;
    document.querySelector("h2 span").innerText = total;
  }
}

// console.log(updateSubtotal());

// function calculateAll() {
//   // Iteration 1.2
// }
// $calc.onclick = calculateAll;

