import React from "react";
import "./HeaderAdmin.css";
import { Link } from "react-router-dom";

export const HeaderAdmin = () => {
return (
    <div className="containA">
        <div className="navad">
          <h1 className="nameAdmin">
            DashBoard
           {/* Welcome To The Site Manager */}
          </h1>
          <div className="d-flex">
            <Link to="/Dashboardproducts" className="button">
              Manege Products
            </Link>
            <Link to="/Dashboardcertificates" className="button">
              Manege Certificates
            </Link>
            <Link to="/" className="button">
              Back To The WebSite
            </Link>
          </div>
        </div>
    </div>
  );
};
