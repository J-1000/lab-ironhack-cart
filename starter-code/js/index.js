var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtotal($product) {
  // Iteration 1.1
  document.querySelectorAll(".product").forEach(elem=>{

    elem.querySelector("input").value
    elem.querySelector(".pu span").innerHTML
  let subtot = (elem.querySelector("input").value) * (elem.querySelector(".pu span").innerHTML)
  console.log(subtot)
    elem.querySelector('.btn').addEventListener("click", function(){
    elem.remove() 

    calculateAll()
          });


   
  // elem.querySelector(".subtot").innerHTML = "$";
  elem.querySelector(".subtot span").innerHTML = parseFloat(subtot).toFixed(2);
})
calculateAll()

}



function calculateAll() {
  // Iteration 1.2
let subtotalArr = document.querySelectorAll('.subtot span');
let total = 0; 
subtotalArr.forEach(function(element) {
  total += Number(element.innerHTML);
})
document.querySelector('h2 span').innerText = parseFloat(total).toFixed(2)
}
$calc.onclick = calculateAll;
$cart.onchange=updateSubtotal

updateSubtotal()

document.querySelector('#create').addEventListener("click", function(){
      console.log('WORKS!') 
  console.log(document.querySelector('.product').insertAdjacentHTML(3, 'whatever'))

// document.querySelectorAll('.product tr')
// console.log('product')

/*

      <tr class="product">
        <td class="name">
          <span>Markus</span>
        </td>
    
        <td class="pu">
          $<span>5.00</span>
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
      </tr>


*/



        });