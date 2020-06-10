// Iterations 1 && 2
function updateSubtotal() {
  document.querySelectorAll(".product").forEach((product) => {
    let price = product.querySelector(".pu span").innerText;
    let quantity = product.querySelector(".qty input").value;
    product.querySelector(".subtot span").innerText = price * quantity;
  });
}
document.addEventListener("input", updateSubtotal);

// Iteration 3
function calculateAll() {
  let sum = 0;
  for (let price of document.querySelectorAll(".subtot span")) {
    sum += +price.innerText;
  }
  document.querySelector("h2 span").innerText = sum;
}
document
  .querySelector(".btn.btn-success")
  .addEventListener("click", calculateAll);

//Iteration 4
function removeProduct() {
  this.closest(".product").remove();
  calculateAll()
}
document
  .querySelectorAll(".btn.btn-delete")
  .forEach((removal) => removal.addEventListener("click", removeProduct));

//Iteration 5
let prodTemplate = document.querySelector(".product").cloneNode(true);
document.getElementById("create").onclick = () => {
  let name = document.querySelector(".new > td > input[type=text]").value || 'Tiramisu 🤤';
  let price = document.querySelector(".new > td > input[type=number]").value || 5;
  let newProduct = prodTemplate.cloneNode(true);
  newProduct.querySelector(".name span").innerHTML = name;
  newProduct.querySelector(".pu span").innerHTML = price;
  newProduct
    .querySelector(".btn.btn-delete")
    .addEventListener("click", removeProduct);
  document.getElementsByTagName("tbody")[0].appendChild(newProduct);
};