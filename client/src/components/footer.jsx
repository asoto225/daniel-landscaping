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
            <footer>
                <p>© 2024 Daniel & Son's Landscaping. All Rights Reserved.</p>
                <Link to='/contact'>Contact Us</Link> |
                <Link to={facebookLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></Link> |
                <Link to={instagramLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></Link> |
            </footer>
        </div>
    );
}

export default Footer;