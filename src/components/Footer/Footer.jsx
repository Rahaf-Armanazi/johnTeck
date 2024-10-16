import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="contentFooter">
      <div className="allfooter">
        <div className="d1">
          <Link to="#" className="linkk">
            <h3 className="h3footer">Johntek Valves</h3>
          </Link>
          <Link to="/about us" className="linkk">
            <h3 className="h3footer">About Us</h3>
          </Link>
        </div>
        <div className="d1">
          <Link to="/Terms of service" className="linkk">
            <h3 className="h3footer">Terms of service</h3>
          </Link>
          <Link to="/Privacy policy" className="linkk">
            <h3 className="h3footer">Privacy policy</h3>
          </Link>
        </div>
        <div className="d1">
          <h3 className="h3footer">Contact Us:</h3>
          <Link to="jsdfgksdgh@gmail.com" className="linkk">
            <h4 className="h3footer">jsdfgksdgh@gmail.com</h4>
          </Link>
          <Link to="jsdfgksdgh@gmail.com" className="linkk">
            <h4 className="h3footer">jsdfgksdgh@gmail.com</h4>
          </Link>
          <Link to="jsdfgksdgh@gmail.com" className="linkk">
            <h4 className="h3footer">jsdfgksdgh@gmail.com</h4>
          </Link>
        </div>
        <div>
          <Link to="+0981398162735" className="linkk">
            <h4 className="h3footer">+0981398162735</h4>
          </Link>
        </div>
        {/* </div> */}
      </div>
      <div className="lastfooter"
      >
        <h6 >JohntekValves.com © 2024 All Rights Reserved. </h6>
        <h6 >made by RAYS_Tech</h6>
      </div>
    </div>
  );
}

export default Footer;
