var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');


function updateSubtotal(product) {
  // Iteration 1.1

  let unitPrice =  product.querySelector(".price").innerText;
  let quantity = product.querySelector(".qty input").value;
  let subTotalPrice;
  
  if(quantity) {
    subTotalPrice = unitPrice * quantity;
  } else {
    subTotalPrice === 0; 
  }
  return product.querySelector(".subtot span").innerHTML = subTotalPrice;
    
      } 


function calcAll() {
  // Iteration 1.2
  let totalPrice = 0;
  // this gets you all the products as an array - and then 
  // you call updateSubtot with every product - so then in the 
  // next step you can check what $product is in updateSubtot
  document.querySelectorAll(".product").forEach(ele => {
    totalPrice += updateSubtotal(ele);   
  });
  document.querySelector(".total span").innerText = totalPrice;
  // here you then have to render the totalPrice into the dom 
}

calc.onclick = calcAll;