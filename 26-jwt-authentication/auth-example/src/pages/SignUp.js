import React from 'react';

const SignUp = props => (
  <form className="sign-up-form">
    <div className="form-control">
      <label htmlFor="user-email">Email:</label>
      <input name="user[email]" type="email"/>
    </div>

    <div className="form-control">
      <label htmlFor="user-password">Password:</label>
      <input name="user[password]" type="password" />
    </div>

    <button type="submit">Sign Up</button>
  </form>
)

export default SignUp