var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delButtons = document.querySelectorAll('.btn.btn-delete');
var $create = document.querySelector('.new button');
var $prod = document.querySelectorAll('.product');


// Calculate subtotals:
function updateSubtotal() {
  $prod = document.querySelectorAll('.product');
  $prod.forEach(element => {
    let qty = (element.querySelector("input").value)
    let perUnit = +element.querySelector(".pu span").innerText;
    let subtotal = qty * perUnit;
    element.querySelector('.subtot span').innerText = subtotal;
  });
}


// Calculate total price:
function calculateAll() {
  updateSubtotal()
  let total = 0;
  $prod.forEach(element => {
    total += +element.querySelector('.subtot span').innerText;
    console.log(total);
  });
  document.querySelector('h2 span').innerText = total;
}

$calc.onclick = calculateAll;


// Delete products:
for (let i = 0; i < $delButtons.length; i++) {
  $delButtons[i].onclick = function removeProduct() {
    document.querySelector('tbody').removeChild($prod[i]);
    calculateAll();
  }
}


// Add product:
function addProduct() {
  const newProductName = document.querySelector("tfoot input").value;
  const newProductPrice = document.querySelectorAll("tfoot input")[1].value
  const newTableRow = $prod[0].cloneNode(true);
  newTableRow.querySelector(".name span").innerHTML = newProductName;
  newTableRow.querySelector(".pu span").innerHTML = newProductPrice;
  newTableRow.querySelector("button").onclick=function() {
    newTableRow.remove()
  }
  document.querySelector("tbody").appendChild(newTableRow)

}

$create.onclick = addProduct;