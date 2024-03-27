import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const NavBar = () => {
    const facebookLink = "https://www.facebook.com/profile.php?id=100084795498929";
    const instagramLink = "https://www.instagram.com/danielandsons520/"
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
            <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <ul className="nav-icons">
        <li>
            <NavLink to={facebookLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg"/></NavLink>
        </li>
        <li>
            <NavLink to={instagramLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg"/></NavLink> 
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;