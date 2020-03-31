var $cart = document.querySelector('#cart tbody');
//console.log($cart);
var $calc = document.getElementById('calc');
//console.log($calc);


function updateSubtotal(product) {

  // Iteration 1.1
  
  const price = product.querySelector('.pu span').innerHTML;
  const quantity = product.querySelector('.qty input').value;

  const subTotal = price * quantity;


  const subTotalDisplay = product.querySelector('.subtot span');
  
  subTotalDisplay.innerText = subTotal;
  
  return subTotal;
  
}


function calculateAll() {
  // Iteration 1.2

  const productArray = document.querySelectorAll('.product');
  let totalAmount = 0;
  productArray.forEach(function(product){
    let subTotal = updateSubtotal(product);
    totalAmount += subTotal;
  });

  const grandTotal = document.querySelector('h2 span');
  grandTotal.innerText = totalAmount;

}
$calc.onclick = calculateAll;


//Iteration 2: Add another product (Done in Iteration 1.1)
//Iteration 3: Calculating the total price of all products (Done in Iteration 1.2)

//Iteration 4: Deleting a product

const deleteButton = document.querySelectorAll('.rm.btn')
console.log(document.querySelectorAll('.rm.btn'))

function removeChild (){

}

deleteButton.onclick = removeChild;


//Iteration 5: Creating new products