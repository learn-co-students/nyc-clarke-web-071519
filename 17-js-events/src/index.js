// find the submit button

// add an eventlistener to the button

  // get whatever is in the input text field
  // create a new list item based on value from input field


// append that list item to the todo list

document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');

  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    console.log({ form: event.target});
    let input = event.target[0];

    let newItem = document.createElement('li');
    newItem.innerText = input.value;

    let todoList = document.querySelector('ul.todo-list');

    todoList.appendChild(newItem);
    input.value = '';
  })
})

