document.addEventListener('DOMContentLoaded', function() {
  // talk to the server that has our coffee orders data
  // use the data and make coffee-divs with them
  // append the coffee divs to ul.coffee-orders

  fetch('http://localhost:3000/orders')
    .then(response => response.json())
    .then(ordersArray => ordersArray.forEach(coffeeOrder => {

      let newCoffeOrderDiv = document.createElement('div');
      newCoffeOrderDiv.dataset.id = coffeeOrder.id;

      
      newCoffeOrderDiv.innerHTML = `
        <p>Order #${coffeeOrder.id}</p>
        <p>${coffeeOrder.name}</p>
        <p>$${coffeeOrder.price}.00</p>
        <button class="fulfill-button">Fulfill Order</button>
      `

      let coffeeOrdersDiv = document.querySelector('ul.coffee-orders');
      coffeeOrdersDiv.appendChild(newCoffeOrderDiv);
    }))


  // look for the div with class of coffee-kiosk

  let deliCounter = 1;
  let coffeeKiosk = document.querySelector('div.coffee-kiosk');


  // CREATE NEW COFFEE ORDER
  coffeeKiosk.addEventListener('click', function(event){
    if (event.target.className === "coffee-button") {
      // create the div that we will append
      // consider abstracting the creation of a div node into it's own function
      let newCoffeOrder = document.createElement('div');
      newCoffeOrder.innerHTML = `<p>Order #${deliCounter}</p> <p>${event.target.innerText}</p><p>$${event.target.dataset.price}.00</p><button class="fulfill-button">Fulfill Order</button>`

      // look for the list that we want to append
      let orderList = document.querySelector('ul.coffee-orders');
      orderList.appendChild(newCoffeOrder);
      deliCounter++;
    }
  })

  // FULFILL COFFEE ORDER (DELETE)
  let coffeeOrders = document.querySelector('ul.coffee-orders');

  coffeeOrders.addEventListener('click', function(event) {
    if (event.target.className === "fulfill-button") {
      const orderId = event.target.parentNode.dataset.id

      fetch(`http://localhost:3000/orders/${orderId}`, {
        method: 'DELETE'
      })
      event.target.parentNode.remove();

    }
  })

})