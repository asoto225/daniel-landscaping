import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
    const facebookLink = "https://www.facebook.com/profile.php?id=100084795498929";
    const instagramLink = "https://www.instagram.com/danielandsons520/"
    return (
        <div>
            <footer className="footer">
                <p>© 2024 Daniel & Son's Landscaping. All Rights Reserved.</p>
                <ul>
                <li><Link to='/contact' className="footer-links">Contact Us</Link></li>
                <li><Link to={facebookLink} target="_blank" rel="noopener noreferrer" className="footer-links"><FontAwesomeIcon icon={faFacebook} size="lg"/></Link> </li>
                <li><Link to={instagramLink} target="_blank" rel="noopener noreferrer" className="footer-links"><FontAwesomeIcon icon={faInstagram} size="lg"/></Link> </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;