import React from 'react';

class SignUpPage extends React.Component {
  state = {
    "email": '',
    "password": ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3005/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      this.props.loginUser(data.currentUser);
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="sign-up-page">
        <h1>New Account</h1>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          className="sign-up-form">
          <div className="form-control">
            <label htmlFor="user-email">Email:</label>
            <input name="email" type="email" value={this.state.email} />
          </div>

          <div className="form-control">
            <label htmlFor="user-password">Password:</label>
            <input name="password" type="password" value={this.state.password} />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}


export default SignUpPage