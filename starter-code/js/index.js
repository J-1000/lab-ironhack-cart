const $cart = document.querySelector("#cart tbody");
const $calc = document.getElementById("calc");

function updateSubtotal(product) {
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
  console.log(count);
  document.querySelector("h2 span").innerText = `${count}`;
}

document.querySelectorAll(".btn-delete").forEach(function(button) {
  button.onclick = deleteButton;
});

function deleteButton(e) {
  const product = e.currentTarget.parentNode.parentNode;
  $cart.removeChild(product);
}
const createButton = document.querySelector("#create");
createButton.onclick = createProduct;

function createProduct(e) {
  const npName = document.querySelector("#nName").value;
  const npPrice = parseFloat(document.querySelector("#nPrice").value).toFixed(
    2
  );
  const newProduct = document.createElement("tr");
  newProduct.className = "product";
  newProduct.innerHTML = `
<td class="name">
  <span>${npName}</span>
</td>

<td class="pu">$<span>${npPrice}</span></td>

<td class="qty">
  <label>
    <input type="number" value="0" min="0" />
  </label>
</td>

<td class="subtot">$<span>0</span></td>

<td class="rm">
  <button class="btn btn-delete">Delete</button>
</td>
`;
  newProduct.querySelector(".btn-delete").onclick = deleteButton;
  document.querySelector("#nName").value = "";
  document.querySelector("#nPrice").value = "";
  $cart.appendChild(newProduct);
}

$calc.onclick = calculateAll;
