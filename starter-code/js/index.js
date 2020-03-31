var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let finalS = 0;
let $delB = document.querySelectorAll(".btn-delete")


function updateSubtotal($product) {
  // Iteration 1.1
  const price = $product.querySelector(".pu span").innerHTML;
  const quantity = $product.querySelector(".qty label input").value;
  let result = price * quantity;
  $product.querySelector(".subtot span").innerHTML = result;
  finalS += result;
  return result;
}

function calculateAll() {
  // Iteration 1.2
  let products = document.querySelectorAll(".product");
  products.forEach(p => updateSubtotal(p))
  document.getElementById("toto").innerHTML = finalS;
  finalS= 0;
}

$calc.onclick = calculateAll;

$delB.forEach(dbtn => {
  dbtn.onclick = (e) => {
  e.target.parentElement.parentElement.remove()
  calculateAll();
}})


//create onclick event listener on create button
document.getElementById('create').onclick = create;

function create () {
 
  // add this tr to the bottom of $cart
  let row = $cart.insertRow(-1)

  // create new tr with 5 td elements (name, pu, qty, subt, rm)
  // set name = name and pu = pu
  let newName = document.getElementById("new-name").value;
  let newPu = document.getElementById("new-number").value;
  row.innerHTML = `<tr class="product"><td class="name"><span>${newName}</span></td>
  <td class="pu">$<span>${newPu}</span></td><td class="qty"><label><input type="number" value="0" min="0">
  </label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button>
  </td></tr>`
}