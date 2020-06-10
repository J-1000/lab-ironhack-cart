var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

let btn = document.querySelector(".btn-success")
btn.addEventListener("click", updateAll)

function updateAll($product) {
  // Iteration 1 to 3
  let products = document.querySelectorAll(".product")
  let total = 0;
  for (const product of products) {
    let price = product.querySelector(".pu>span").innerText;
    let multiply = product.querySelector(".qty input").value;
    let subTotal = price * multiply
    product.querySelector(".subtot span").innerText = subTotal;
    total += subTotal;
    document.querySelector("h2 span").innerText = total;
  }
}

//Iteration 4
function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.btn-delete');
  for(let i=0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteProduct)
    }
  }
  
  function deleteProduct (e) {
    e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
  }

//Iteration 5
document.querySelector('#create').addEventListener('click', createProduct)
function createProduct() {
  let newProduct = document.querySelector("#cart > tbody").insertRow();
  newProduct.classList.add('product');
  let TDs = `
<tr class="product">
  <td class="name">
    <span>Markus</span>
  </td>
  <td class="pu">
    $<span>5.00</span>
  </td>
  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>
  <td class="subtot">
    $<span>0</span>
  </td>
  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`
newProduct.innerHTML = TDs;
deleteButtons()
}