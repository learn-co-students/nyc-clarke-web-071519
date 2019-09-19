import React, { Component } from 'react';
import Child from './Child';
import AnotherChild from './AnotherChild';
import { stringify } from 'querystring';

class App extends Component {
  constructor(props) {
    super(props)
    // const time = new Date()

    this.state = {
      // time: `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`
      todoList: [],
      todoInput: '',
      loading: true
    }
  }

  // getTime = () => {
  //   const time = new Date()
  //   this.setState({
  //     time: `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`
  //   })
  // }

  componentDidMount() {
    fetch('http://localhost:3000/todoList')
    .then(response => response.json())
    .then(todoData => {
      this.setState({ todoList: todoData, loading: false })
    })
  }

  addTodo = e => {
    e.preventDefault();
    // update the state
    const newTodo = { content: this.state.todoInput };
    // send a fetch request
    fetch('http://localhost:3000/todoList', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then( response => response.json())
      .then( todoObj => {
        const updatedTodoList = [...this.state.todoList, todoObj];
        this.setState({ todoList: updatedTodoList })
      })
  }

  handleTodoInput = e => {
    this.setState({ todoInput: e.target.value })
  }

  // componentDidUpdate() {
  //   console.log('App did update')
  // }

  render () {
    const time = new Date()
    console.log('app rendered', time.getUTCMilliseconds())
    return (
      <div className="App">

        <form onSubmit={this.addTodo}>
          <input type="text"
            onChange={this.handleTodoInput}
            name="newTodo" 
            value={this.state.todoInput} />
          <button type="submit">Add Todo</button>
        </form>


        { this.state.loading ? "loading..." :
          <ul>
            {
              this.state.todoList.map((todoItem, idx) => <li key={idx}>{todoItem.content}</li>)
            }
          </ul>
        }
      </div>
    );
  }
}

export default App;
