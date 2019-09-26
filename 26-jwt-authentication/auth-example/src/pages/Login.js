import React from 'react';

const LoginPage = props => (
  <div className="login-page">
    <h1>Login</h1>
    <form className="sign-up-form">
      <div className="form-control">
        <label htmlFor="user-email">Email:</label>
        <input name="user[email]" type="email" />
      </div>

      <div className="form-control">
        <label htmlFor="user-password">Password:</label>
        <input name="user[password]" type="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
)

export default LoginPage