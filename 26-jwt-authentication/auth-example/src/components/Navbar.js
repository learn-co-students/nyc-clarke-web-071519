import React from 'react';
import { NavLink, Link } from 'react-router-dom'

import withAuth from './withAuth'

const NavBar = props => {
  console.log(props)
  return (
  <nav>
   <ul className="links">
     <li>
       {
         props.loggedIn ? 
          <Link to="/logout">Logout</Link> : 
          <NavLink to="/login">Login</NavLink> 
        }
     </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
   </ul> 
  </nav>
)}

export default withAuth(NavBar);