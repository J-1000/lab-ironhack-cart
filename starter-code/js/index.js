const $cart = document.querySelector("#cart tbody");
const $calc = document.getElementById("calc");

function updateSubtotal(product) {
  // document.querySelectorAll(".product").forEach(element => {
  const unitPrice = product.querySelector(".pu span").innerText;
  const quantity = product.querySelector(".qty input").value;
  let subTotal = unitPrice * quantity;
  product.querySelector(".subtot span").innerText = `${subTotal}`;
  return subTotal;
}

function calculateAll() {
  let count = 0;
  document.querySelectorAll(".product").forEach(element => {
    count += updateSubtotal(element);
  });

  document.querySelector("h2 span").innerText = `${count}`;
}

document.querySelectorAll(".btn-delete").forEach(function(button) {
  button.onclick = deleteButton;
});

function deleteButton(e) {
  const product = e.currentTarget.parentNode.parentNode;
  $cart.removeChild(product);
  // event.currentTarget.classList.toggle("checked");
}
const createButton = document.querySelector("#create");
createButton.onclick = createProduct;
var markusFansClub = document.querySelector("#cart > tbody > tr:nth-child(1)");

function createProduct(e) {
  const npName = document.querySelector("#nName").value;
  const npPrice = document.querySelector("#nPrice").value;
  const newProduct = markusFansClub.cloneNode(true);
  console.log(newProduct);
  newProduct.querySelector("td.name > span").innerHTML = npName;
  newProduct.querySelector("td.pu > span").innerHTML = npPrice;
  newProduct.querySelector("td.rm > button").onclick = deleteButton;

  $cart.appendChild(newProduct);
  document.querySelector("#nName").value = "";
  document.querySelector("##nPrice").value = "";
}

$calc.onclick = calculateAll;

// #cart > tbody > tr:nth-child(1)
