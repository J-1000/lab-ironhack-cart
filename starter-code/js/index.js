let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');



function updateSubtotal() {
  // Iteration 1.1
  let products = document.querySelectorAll(".product");

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
  let subtotals = document.querySelectorAll(".subtot span");
  let total = 0;

  subtotals.forEach((subtotal) => {
      total += +subtotal.innerText;
      //console.log(total);
  });
    document.querySelector("h2 span").innerText = total;
  }

  let buttonCalculatePrice = document.querySelector(".btn.btn-success");
  buttonCalculatePrice.addEventListener("click", calculateAll);
 
    


/*
function createProduct(){

  let cln = document.querySelector('.product').cloneNode(true);
  document.querySelector('tbody').appendChild(cln);

  console.log(cln);

}
createProduct();

});
*/