document.addEventListener('DOMContentLoaded', function() {
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
      console.log(event.target.parentNode.remove());
    }
  })

})