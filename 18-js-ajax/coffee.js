document.addEventListener('DOMContentLoaded', function() {
  // talk to the server that has our coffee orders data
  // use the data and make coffee-divs with them
  // append the coffee divs to ul.coffee-orders

  fetch('http://localhost:3000/orders')
    .then(response => response.json())
    .then(ordersArray => ordersArray.forEach(coffeeOrder => {

      let newCoffeOrderDiv = createCoffeeOrderDiv(coffeeOrder);

      let coffeeOrdersDiv = document.querySelector('ul.coffee-orders');
      coffeeOrdersDiv.appendChild(newCoffeOrderDiv);
    }))


  // look for the div with class of coffee-kiosk
  let coffeeKiosk = document.querySelector('div.coffee-kiosk');


  // CREATE NEW COFFEE ORDER
  coffeeKiosk.addEventListener('click', function(event){
    if (event.target.className === "coffee-button") {
      // create the div that we will append
      // consider abstracting the creation of a div node into it's own function
      // use fetch to send a post request to create a new order on the backend
      fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: event.target.innerText,
          price: event.target.dataset.price
        })
      })
        .then(response => response.json())
        .then(coffeeOrder => {
          let newCoffeOrder = createCoffeeOrderDiv(coffeeOrder);

          let orderList = document.querySelector('ul.coffee-orders');
          orderList.appendChild(newCoffeOrder);
        })
    }
  })

  // FULFILL COFFEE ORDER (DELETE)
  let coffeeOrders = document.querySelector('ul.coffee-orders');

  coffeeOrders.addEventListener('click', function(event) {
    if (event.target.className === "fulfill-button") {
      const orderId = event.target.parentNode.dataset.id

      fetch(`http://localhost:3000/orders/${orderId}`, { method: 'DELETE' })
      event.target.parentNode.remove()

    }
  })

})

const createCoffeeOrderDiv = order => {
  let newCoffeOrder = document.createElement('div');
  newCoffeOrder.dataset.id = order.id;
  newCoffeOrder.innerHTML = `
    <p>Order #${order.id}</p>
    <p>${order.name}</p>
    <p>$${order.price}.00</p>
    <button class="fulfill-button">Fulfill Order</button>
  `
  return newCoffeOrder
}