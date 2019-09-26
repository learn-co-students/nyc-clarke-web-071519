import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = props => (
  <nav>
   <ul className="links">
     <li>
       <NavLink to="/login">Login</NavLink>
     </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
   </ul> 
  </nav>
)

export default NavBar;