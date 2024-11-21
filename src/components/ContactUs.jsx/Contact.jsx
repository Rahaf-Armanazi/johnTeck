import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Contact.css'; // تأكد من أنك تضيف هذا الملف

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="icon" />
        <p className="contact-title">Facebook</p>
        <Link to="https://www.facebook.com/profile.php?id=61556634712053" className="contact-link"> facebook.com</Link>
      </div>

      <div className="contact-item">
        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
        <p className="contact-title">Instagram</p>
        <Link to="https://www.instagram.com/johntekvalves/" className="contact-link">instagram.com/johntekvalves/ </Link>
      </div>

      <div className="contact-item">
        <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
        <p className="contact-title">Email</p>
        <Link to="mailto:info@johntekvalves.com" className="contact-link">info@johntekvalves.com </Link>
      </div>

      <div className="contact-item">
        <FontAwesomeIcon icon={faPhone} size="2x" className="icon" />
        <p className="contact-title">Phone</p>
        <Link to="tel:+0981398162735" className="contact-link">+0981398162735 </Link>
      </div>
    </div>
  );
};

export default Contact;
