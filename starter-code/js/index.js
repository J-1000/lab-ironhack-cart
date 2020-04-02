const $cart = document.querySelector('#cart tbody');
const $calc = document.getElementById('calc');
const $addP = document.getElementById('create');

// Just a thought we had -\o/- decided not to go with it
// let products = [{
//     name: 'IronBubble-head',
//     unitPrice: 25
//   },
//   {
//     name: 'Markus',
//     unitPrice: 5
//   },
// ]


function updateSubtotal($product) {
  for (let i = 0; i < $cart.rows.length; i++) {
    let rowQuantity = parseInt($cart.rows[i].querySelector('.qty label input').value);
    let rowPrice = parseInt($cart.rows[i].querySelector('.pu span').innerText);
    let subtotal = rowPrice * rowQuantity;
    $cart.rows[i].querySelector('.subtot span').innerText = subtotal;
  }
}


function calculateAll() {
  // Iteration 1.2
  let sumPrice = 0;
  updateSubtotal();
  for (let i = 0; i < $cart.rows.length; i++) {
    let rowSubTotal = parseInt($cart.rows[i].querySelector('.subtot span').innerText)
    sumPrice += rowSubTotal
  }
  document.querySelector('h2 span').innerText = sumPrice;
};

document.querySelectorAll(".btn-delete").forEach(function (button) {
  button.onclick = deleteButton;
});

function deleteButton(element) {
  const deleteProduct = element.target.parentNode.parentNode;
  console.log($cart.deleteProduct)
  $cart.removeChild(deleteProduct);
}

function addProduct() {
  let addNewRow = $cart.insertRow(-1);
  let setPrice = document.querySelector('.pUnit').value;
  let setName = document.querySelector('.pName').value;
  addNewRow.className = 'product';
  addNewRow.innerHTML = `
  <tr class="product">
  <td class="name">
  <span>${setName}</span>
  </td>
  <td class="pu">
  $<span>${setPrice}</span>
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
  // adding the onclick event to new button
  document.querySelectorAll(".btn-delete").forEach(function (button) {
    button.onclick = deleteButton;
  });
};
$calc.onclick = calculateAll;
$addP.onclick = addProduct;