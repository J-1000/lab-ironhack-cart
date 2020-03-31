const $cart = document.querySelector('#cart tbody');
const $calc = document.getElementById('calc');
const $create = document.querySelector("#create");

function updateSubtotal(event){
  // Iteration 1.1
  // get current HTML element via 'event' and '.currentTarget', here: <input ...>..</input>
  const inputTag = event.currentTarget;

  // get actual Node for the <tr class="product"...>..</tr> where input is located
  const trProductTag = inputTag.parentNode.parentNode.parentNode;

  // point to where unit prices, quantities and sub-total prices are in the HTML structure
  // get values for calculation of new sub-total and 
  // display new sub-total after each time the input arrows were pressed
  const unitPrice = trProductTag.querySelector(".pu span").innerText;
  const quantity = trProductTag.querySelector(".qty input").value;
  const subTotal = trProductTag.querySelector('.subtot span');

  subTotal.innerText = unitPrice * quantity;  
}

function calculateAll(){
  // Iteration 1.2

  // point to where our "Total: .." price is in the HTML structure
  let totalPrice = document.querySelector("h2 span");

  // reset text to "Total: $0" for every function call 
  // to prevent adding up the amount after clicking multiple times
  totalPrice.innerText = 0;

  // point to where unit prices, quantities and sub-total prices are in the HTML structure
  const basePrices = document.querySelectorAll(".pu span");
  const quantities = document.querySelectorAll(".qty input");
  let subTotal = document.querySelectorAll('.subtot span');
  
  // iterate through every item row and according unit price, quantity to calculate sub-total price
  // add resulting price to the total price in h2
  for(let j = 0; j < basePrices.length; j++){
    subTotal[j].innerText = basePrices[j].innerText * quantities[j].value;
    let newSubTotal = Number(subTotal[j].innerText);
    totalPrice.innerText = Number(totalPrice.innerText) + newSubTotal;
  }

}

function deleteItem(event){
  // 'event' has every information about where user clicks
  // '.currentTarget' returns the actual HTML element, here: '<button class="btn btn-delete">Delete</button>'
  let btnDelete = event.currentTarget;

  // get the parent of btnDelete, here: '<td class="rm" ...>..</td>'
  let tdRM = btnDelete.parentNode;

  //get the parent of 'tdRM', here '<tr class="product"...>..</tr>'
  let trProduct = tdRM.parentNode;

  //as '$cart' is the parent of 'trProduct' (..#cart tbody"..), we can remove it:
  $cart.removeChild(trProduct);
}


function createItem(event){
  // get and save input values when creating new product
  let inputName = document.querySelector(".new input[type=text]").value;
  let unitPrice = document.querySelector(".new input[type=number]").value;

  // define that the new item should be of type <tr></tr>
  let newItem = document.createElement("tr");

  // give class="product" to new <tr..>
  newItem.setAttribute("class", "product");

  // inject whole item row structure with input values above:
  newItem.innerHTML = ` <td class="name">
                          <span>${inputName}</span>
                        </td>

                        <td class="pu">
                          $<span>${unitPrice}</span>
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
                        </td>`;

  // append <tr..> under the <tbody..>
  document.querySelector("tbody").appendChild(newItem);

  // reset input fields
  document.querySelector(".new input[type=text]").value = "";
  document.querySelector(".new input[type=number]").value = "";

  // set onclick events on new item
  // have to reset .onclicks this way, because new elements in HTML structure
  // do not get recognized, ('newItem.onclick = updateSubtotal;'
  // doesn't seem to work)
  document.querySelectorAll(".btn-delete").forEach(function (button){
    button.onclick = deleteItem;
  });

  document.querySelectorAll(".qty input").forEach(function (arrows){
    arrows.onclick = updateSubtotal;
  });
}


// ----- onclick listeners -----
// click event for calculate prices button, default line from Teacher:
$calc.onclick = calculateAll; 

// add an onclick event on all elements with class "btn-delete" => every delete button
document.querySelectorAll(".btn-delete").forEach(function (button){
  button.onclick = deleteItem;
});

// add an onclick event on all elements with type "input" like in column for "Quantity"
document.querySelectorAll(".qty input").forEach(function (arrows){
  arrows.onclick = updateSubtotal;
});

// click event for create button, function createItem gets called
$create.onclick = createItem;



