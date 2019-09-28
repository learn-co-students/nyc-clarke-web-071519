import React from 'react';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3005/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.token)
      })
  }

  render() {
    return (
      <div className="login-page">
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          className="sign-up-form">
          <div className="form-control">
            <label htmlFor="user-email">Email:</label>
            <input value={this.state.email} name="email" type="email" />
          </div>

          <div className="form-control">
            <label htmlFor="user-password">Password:</label>
            <input value={this.state.password} name="password" type="password" />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
} 

export default LoginPage