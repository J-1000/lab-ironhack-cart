var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $container = document.getElementsByClassName('product'); 


console.log($calc)
console.log($container[0]); 



function updateSubtotal($product) {
  // Iteration 1.1
  var products = document.querySelectorAll('.product'); 
  let total=0; 
  for (const product of products) { 
  var unitPriceDiv = product.querySelector('.pu > span').innerText; 
  var quantityDiv = product.querySelector('.qty input').value; 

  const subtot = unitPriceDiv*quantityDiv; 
  product.querySelector('.subtot span').innerText=subtot; 
  total += subtot; 
  document.querySelector("h2 span").innerText=total; 
}}

function calculateAll() {
  // let totalPrice=0; 


  // Iteration 1.2
}
$calc.onclick = calculateAll;

//button calculate, add click event 
 document.querySelector('.btn-success').onclick = function () {
   updateSubtotal();  
 }