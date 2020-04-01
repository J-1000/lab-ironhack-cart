var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal(product) {
  // Iteration 1.1
  const price = product.querySelector(".pu > span").innerHTML
  const quantity = product.querySelector(".qty input").value

  let sum = price * quantity

  product.querySelector(".subtot span").innerHTML = sum

  return sum
}

function calculateAll() {
  // Iteration 1.2
  let totalSum = 0
  document.querySelectorAll(".product").forEach(function(ele) {
    totalSum += updateSubtotal(ele)
  })

  document.querySelector("body > h2 > span").innerHTML = totalSum
}

document.querySelectorAll(".product").forEach(function(ele) {
  addDeleteOnClick(ele)
})

function addDeleteOnClick (product) {
  product.querySelector(".rm button").onclick = function() {
    console.log(product)
    $cart.removeChild(product)
  }
}

const productElementCopy = document.querySelector("#cart > tbody > tr:nth-child(1)")

document.getElementById("create").onclick = function() {
  const inputName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value
  const inputPrice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value

  const newProductElement = productElementCopy.cloneNode(true)

  newProductElement.querySelector(".name span").innerHTML = inputName
  
  newProductElement.querySelector(".pu span").innerHTML = inputPrice

  addDeleteOnClick(newProductElement)

  $cart.appendChild(newProductElement)  
}

$calc.onclick = calculateAll;