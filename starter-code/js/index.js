var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

const cartState = {
  total: 0,
}
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
$calc.onclick = calculateAll;

const products = $cart.querySelectorAll("#cart > tbody> .product")
products.forEach((item) => {
  item.querySelector('.qty input').addEventListener("change", function (event) {
    updateSubtotal(item)
  })

})



