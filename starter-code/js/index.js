/* 
   Retrieves the unit price of the product
   Retrieves the quantity of items desired
   Calculates the total price based on this data
   Updates the total price in the DOM 
   
*/


var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal($product) {

  document.querySelectorAll('.pu').forEach(function (productUnit) {

    let productQuantity = document.querySelector(`.qty label input`).value;
    let productPrice = document.querySelector(`.pu span`).innerHTML;
    
    let total = productQuantity * productPrice; 
    console.log(total)
    return (document.querySelector(`.subtot span`).innerHTML = total); 

   /* 
      multiply product price by product quantity 
   */
    
  })
}


console.log(updateSubtotal());


function calculateAll() {
  // Iteration 1.2
}
$calc.onclick = calculateAll;





document.querySelector('.btn.btn-success').onclick = function () {
    updateSubtotal()
}

