var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal($product) {
  // Iteration 1.1
  let subtot = document.querySelector('.subtot span').innerText;
  let productPrice = document.querySelector(".pu span").innerText;
  //console.log(productPrice);
  let totalQty = document.querySelector('.qty input').value;
 // console.log(totalQty);
  let subtotal = productPrice * totalQty;
  return subtot= subtotal;
  //console.log(subtot);
 
}

function calculateAll() {
  // Iteration 1.2
  //let prices = document.querySelector(".subtot").innerText;
  let totalPrice= 0;
  for (product in cart){
    //updateSubtotal(product);
    totalPrice += updateSubtotal(product);
    }
  document.querySelector("h2").innerHTML = `<h2>Total: <span>${totalPrice}</span></h2>`;

  }

  
$calc.onclick = calculateAll;

updateSubtotal();
calculateAll();