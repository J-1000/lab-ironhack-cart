var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $btn = document.querySelectorAll('.rm button')

function updateSubtotal(product) {
  // Iteration 1.1
  //let subTotal = 0;
  let qty = product.querySelector('.qty input').value;
  //console.log(qty);
  let itemPrice = product.querySelector(".pu span").innerHTML
  let subTotal = (qty * itemPrice)
  product.querySelector('.subtot span').innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  // Iteration 1.2
  let subtot = 0
  const prodItems = document.querySelectorAll('.product');
  //console.log(prodItems)
  prodItems.forEach(function (el){
   subtot += updateSubtotal(el)
   
  })
  console.log(subtot)
  document.querySelector('h2 span').innerText = subtot;
}

function deleteELements()
{
  //console.log("button working");
  let child = document.querySelector('.product')
  $cart.removeChild (child)
  calculateAll()
}
$calc.onclick = calculateAll;

document.querySelectorAll('.product .rm button').forEach(function (btn) {
  //console.log('running loop');
  btn.onclick = deleteELements;
});

function addElements()
{
 
  const newProduct = document.createElement('tr');
  newProduct.className = "product";
  const newProdName = document.createElement('td');
  newProdName.className = "name";
  let prodSpan = document.createElement('span');
  newProduct.appendChild(newProdName);
  newProdName.appendChild(prodSpan);
  let bodyTag = document.getElementsByTagName('tbody');
  document.querySelector('tbody').appendChild(newProduct);
  let productName = document.querySelector('.new .create-name input').value;
  prodSpan.innerText = productName;
  const newProdPrice = document.createElement('td')
  newProdPrice.className = "pu";
  const priceSpan = document.createElement('span');
  priceSpan.innerText = `${document.querySelector('.new .create-number input').value}`;
  let newPrice = priceSpan.innerText;
  
  const HTMLpass = `<tr class="product">
  <td class="name">
    <span>${productName}</span>
  </td>

  <td class="pu">
    $<span>${newPrice}</span>
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
newProduct.innerHTML = HTMLpass;
newProduct.querySelector('button').onclick = deleteELements;



}

document.getElementById('create').onclick = addElements;


// You can use native DOM methods to insert the fragment:
