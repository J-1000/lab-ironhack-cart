var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal($product) {

  const qtd = $product.querySelector('.qty input').value
  const unitPrice = $product.querySelector('.pu span').innerHTML
  const subtotal = qtd * unitPrice
  $product.querySelector('.subtot span').innerHTML = subtotal

}

function calculateAll() {
  // Iteration 1.2
  const products = $cart.querySelectorAll("#cart > tbody> .product")
  const arrayProducts = Array.from(products)

  const total = arrayProducts.reduce((acc, item) => {
    console.log(item)
    return acc + Number(item.querySelector('.subtot span').innerHTML)
  }, 0)

  return document.querySelector('body > h2').innerHTML = `Total: $ ${total}`
}

// remove product of cart
function removeProduct(product) {
  $cart.removeChild(product)
  $cart = document.querySelector('#cart tbody');
  calculateAll()
}

$calc.onclick = calculateAll;

// addEventListener each product

function addEventListenerEachProduct() {
  const products = $cart.querySelectorAll("#cart > tbody> .product")

  products.forEach((item) => {
    item.querySelector('.qty input').addEventListener("change", function (event) {
      updateSubtotal(item)
    })
    console.log(item)
    item.querySelector('.rm > button').addEventListener("click", function (event) {
      removeProduct(item)
    })

  })
}
addEventListenerEachProduct()

function createProduct(name, price) {
  const element = document.createElement('tr')
  element.classList.add('product')
  element.innerHTML = `
      <td class="name">
        <span>${name}</span>
      </td >

          <td class="pu">
            $<span>${price}.00</span>
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
`
  $cart.appendChild(element)
}

function addEventListenerButtonCreateProduct() {
  const btnAddProduct = document.querySelector('#create')
  const productName = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]')
  const unitPrice = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]')
  btnAddProduct.addEventListener('click', function () {
    createProduct(productName.value, unitPrice.value)
    productName.value = ''
    unitPrice.value = ''
    $cart = document.querySelector('#cart tbody');
    addEventListenerEachProduct()
  })
}
addEventListenerButtonCreateProduct()



