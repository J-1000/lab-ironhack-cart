
  let cart = document.querySelector('#cart tbody'); // cart table
  let calc = document.getElementById('calc'); // button
  let products = document.querySelectorAll('.product') // usar querySelectore qdo der pra não ficar tendo probs com HTML collections e métodos de array


  // Iteration 1
  function updateSubtotal(product) {
    let productUnitPrice = product.querySelector('.pu span').innerHTML;
    let productQuantity = product.querySelector('.qty label input').value;
    let productSubtotal = product.querySelector('.subtot')
    let subtotalPrice = productUnitPrice * productQuantity;
    productSubtotal.innerHTML = `$${subtotalPrice}`
    return subtotalPrice;
  }
  // usar product para iterar sobre!!!!! senão fica um treco estático e não dá pra usar calculateAll em cima, precisa da variable

  // Iteration 2 & 3 

  function calculateAll() {
    let totalPrice = 0;
    products.forEach(product => {
      let subtotalPerProduct = updateSubtotal(product);
      totalPrice += subtotalPerProduct;
    });
    document.querySelector("h2 span").innerText = totalPrice;
  }

  calc.addEventListener('click', calculateAll);

  // Iteration 4 - 

  const deleteLine = (event) => {
    let line = event.currentTarget.closest('.product');
    line.remove();
  };

  let deleteButtons = document.querySelectorAll('.btn.btn-delete')
  deleteButtons.forEach((item) => {
    item.onclick = deleteLine;
  });

  // Iteration 5

  const createNewProduct = () => {
    let newProd = document.querySelector('.product').cloneNode(true);
    document.querySelector('tbody').appendChild(newProd);
    newProd.querySelector('.name span').innerText = document.querySelector('#newName').value
    newProd.querySelector('.pu span').innerText = document.querySelector('#newPrice').value
    newProd.querySelector('.subtot span').addEventListener('load', updateSubtotal); // zuado
    newProd.querySelector('.rm button').addEventListener('click', deleteLine)    
  }

  let createButton = document.getElementById('create');
  createButton.addEventListener('click', createNewProduct);