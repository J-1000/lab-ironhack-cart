var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $addP = document.getElementById('create');

// Just a thought we had -\o/- decided not to go with it
let products = [
  { name: 'IronBubble-head', unitPrice: 25},
  { name: 'Markus', unitPrice: 5},
] 
  

function updateSubtotal($product) {
  let totalPrice = 0;
    for(let i = 0; i < $cart.rows.length; i++){
        let rowQuantity = parseInt($cart.rows[i].querySelector('.qty label input').value);
        let rowPrice = parseInt($cart.rows[i].querySelector('.pu span').innerText);
        let subtotal = rowPrice*rowQuantity;
        $cart.rows[i].querySelector('.subtot span').innerText = subtotal;
    }
  }
  

function calculateAll() {
   // Iteration 1.2
   let sumPrice = 0;
   updateSubtotal();
   for(let i = 0; i < $cart.rows.length; i++){
    let rowSubTotal = parseInt($cart.rows[i].querySelector('.subtot span').innerText)
    sumPrice += rowSubTotal
  }
  document.querySelector('h2 span').innerText = sumPrice;
}

function addProduct(){
  let newRow = document.querySelector('#cart tbody');
  let addNewRow = newRow.insertRow(-1);
  let setPrice = document.querySelector('.pUnit').value;
  let setName = document.querySelector('.pName').value;
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
  </tr>` // I know its quite a hardcode but I couldnt come up with anything else,
}        // wasted a couple hours trying to do it :((

function deleteProduct(){
  //$cart.rows.remove();
}
$calc.onclick = calculateAll;
$addP.onclick = addProduct;


