var $cart = document.querySelector('#cart tbody'); // This is the tbody that is the parent of all the products
var $calc = document.getElementById('calc');

function updateSubtotal(product) {
  // Iteration 1.1
  const price = product.querySelector(".pu > span").innerHTML // Gets the price of a product
  const quantity = product.querySelector(".qty input").value // Gets the quantity of a product

  let sum = price * quantity

  product.querySelector(".subtot span").innerHTML = sum // Updates the sub total sum in the HTML/document

  return sum
}

function calculateAll() {
  // Iteration 1.2
  let totalSum = 0
  document.querySelectorAll(".product").forEach(function(ele) { // Iterates through every product element
    totalSum += updateSubtotal(ele)
  })

  document.querySelector("body > h2 > span").innerHTML = totalSum // Updates the HTML/document with the new totalSum
}

document.querySelectorAll(".product").forEach(function(ele) { // Adds the delete feature to the current products
  addDeleteOnClick(ele)
})

function addDeleteOnClick (product) { // product argument is here the whole .product element
  product.querySelector(".rm button").onclick = function() { // Creates an onclick for the delete button
    $cart.removeChild(product) // Removes the child (product) from the parent ($cart). This will remove it from the document/website
  }
}

const productElementCopy = document.querySelector("#cart > tbody > tr:nth-child(1)") // This stores one of the product elements so it can later be used as a template for new products

document.getElementById("create").onclick = function() {
  const inputName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value //Getting the input name for the new product
  const inputPrice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value //Getting the input price for the new product

  const newProductElement = productElementCopy.cloneNode(true)  //This creates a deep copy of one of the products that we can use as template for the new product

  newProductElement.querySelector(".name span").innerHTML = inputName // sets the name of the new product
  newProductElement.querySelector(".pu span").innerHTML = inputPrice // sets the price per unit of the new product
  addDeleteOnClick(newProductElement) // This adds the delete button functionality

  $cart.appendChild(newProductElement) // adds the element to the carts tbody
}

$calc.onclick = calculateAll;