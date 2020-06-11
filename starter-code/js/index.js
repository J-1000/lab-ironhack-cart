var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');



function updateSubtotal(product) {
  let price  = product.querySelector('.pu span').innerText;
  let quantity = product.querySelector('.qty label input').value; 
  let total = price * quantity
  product.querySelector('.subtot span').innerText = total;
  return total;
}



function calculateAll() {
  let products = document.querySelectorAll('.product'); 
  //console.log(products);
  let total = 0; 
  products.forEach(function(item, index) {
    total = total + updateSubtotal(item);
    console.log(item);
  })
  // for(let i = 0; i < products.length; i++) {  example with for each. 
  //   console.log(products[i], `item ${i}`); 
  //   total = total + updateSubtotal(products[i]);
  // }
  document.querySelector('h2 span').innerHTML = total; 
  console.log(total, " TOTAL");
}
// document.querySelectorAll('.btn .btn-success').addEventListener('click',updateSubtotal)

$calc.onclick = calculateAll;


