import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            {/* can possibly replace this with logo */}
            <NavLink to="/">LOGO</NavLink>
        </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;