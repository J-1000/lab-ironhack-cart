var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
console.log($cart);
function updateSubtotal(product) {
  let price = product.querySelector(".pu span").innerHTML;
  let quantity = product.querySelector(".qty input").value;
  let subTotal = price * quantity;

  product.querySelector(".subtot span").innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  let totalPrice = 0;
  let nodeList = $cart.querySelectorAll(".product");
  console.log(nodeList);
  for (let item of nodeList) {
    totalPrice += updateSubtotal(item);
  }
  document.querySelector("h2 span").innerHTML = totalPrice;
}

$calc.onclick = calculateAll;

let create = document.querySelector("#create");
create.onclick = createProduct;

let nodeListClone = $cart.querySelector(".product").cloneNode(true);

function createProduct() {
  let createDiv = document.querySelector("#cart > tfoot > tr");
  let productNameDiv = document.querySelector(
    "#cart > tbody > tr:nth-child(1) > td.name > span"
  );
  let quantityNewDiv = document.querySelector(
    "#cart > tbody > tr:nth-child(2) > td.pu > span"
  );
  let productName = document.querySelector(
    "#cart > tfoot > tr > td:nth-child(1) > input"
  ).value;
  let quantityNew = document.querySelector(
    "#cart > tfoot > tr > td:nth-child(2) > input"
  ).value;
  let newElement = nodeListClone.cloneNode(true);
  productNameDiv.innerHTML = productName;
  quantityNewDiv.innerHTML = quantityNew;

  $cart.appendChild(newElement);
  deleteClick(newElement);
}
$cart.querySelectorAll(".product").forEach(item => {
  deleteClick(item);
});

function deleteClick(product) {
  product.querySelector(".rm button").onclick = () => {
    product.parentNode.removeChild(product);
  };
}
