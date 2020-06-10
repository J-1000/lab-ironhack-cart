var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $createButton = document.getElementById('create');

addDeleteListeners();
$calc.onclick = calculateAll;
$createButton.onclick = createProduct;

function calculateAll() {
  let priceUnit = document.querySelectorAll('.pu span');
  let quantity = document.querySelectorAll('.qty input');
  let subTotal = document.querySelectorAll('.subtot span');
  let total = document.querySelector('h2 span');
  let totalSum = 0;
  for(let i = 0; i < priceUnit.length; i++) {
    subTotal[i].innerText = priceUnit[i].innerText * quantity[i].value;
    totalSum += priceUnit[i].innerText * quantity[i].value;
  }
  total.innerText = totalSum;
}

function createProduct() {
  let productName = document.querySelectorAll('tfoot input')[0].value;
  let productPrice = document.querySelectorAll('tfoot input')[1].value;
  let newElement = document.createElement('tr');
  newElement.setAttribute('class', 'product');
  newElement.innerHTML =
  `<td class="name">
        <div>
          <span>${productName}</span>
        </div>
      </td>

      <td class="pu">
        <div>
        $<span>${productPrice}</span>
        </div>
      </td>

      <td class="qty">
        <div>
          <label>
          <input type="number" value="0" min="0">
        </label>
      </div>
      </td>

      <td class="subtot">
        <div>
        $<span>0</span>
        </div>
      </td>

      <td class="rm">
        <div>
        <button class="btn btn-delete">Delete</button>
        </div>
      </td>`;

  $cart.appendChild(newElement);
  document.querySelectorAll('tfoot input')[0].value = '';
  document.querySelectorAll('tfoot input')[1].value = '';
  addDeleteListeners();
}

function addDeleteListeners() {
  let deleteButtons = document.getElementsByClassName('btn-delete');
  let individualProducts = document.querySelectorAll('tr');
  for(let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      $cart.removeChild(individualProducts[i+1]);
    });
  }
}



