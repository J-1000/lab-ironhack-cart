let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');


let products = document.querySelectorAll(".product");
function updateSubtotal() {
  // Iteration 1.1
  products.forEach((product) => {
    let quantity = product.querySelector('input').value;
    //console.log(quantity);
    let priceUnit = product.querySelector('.pu span').innerText;
    //console.log(priceUnit);
    let subtotal = quantity * priceUnit;
    //console.log(subtotal);
    product.querySelector('.subtot span').innerText = subtotal;
   });
}
document.addEventListener("input", updateSubtotal);



function calculateAll() {
  // Iteration 1.2
  updateSubtotal();
  let total = 0;
  for(let product in products){
    total += +product.querySelector('.subtot span').innerText;
  }
  document.querySelector('h2 span').innerText= total;
}


$calc.onclick = calculateAll;



/*
function createProduct(){

  let cln = document.querySelector('.product').cloneNode(true);
  document.querySelector('tbody').appendChild(cln);

  console.log(cln);

}
createProduct();


$cart.addEventListener("change",function(){
  updateSubtotal($cart.querySelectorAll(".product"))
});


//let CalculatePricesButton = document.getElementsById('calc');
//console.log(CalculatePricesButton);
*/