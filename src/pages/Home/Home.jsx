import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import "../../components/Footer/Footer.css";
// import footer from "../../components/footer/Foote";
import Logo from "../../Assets/logo.png"; // تأكد من أن المسار صحيح
import names from "../../Assets/names.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <Header />
        <div className="logo">
          <img src={Logo} alt="Logo" width="230" height="230" />
          <img
            src={names}
            alt="name"
            className="name1"
            width="600"
            height="150"
          />
        </div>
        <h2 className="font-the-h">Our Commitment to Excellence</h2>
        <img
          src={require("../../Assets/12.jpg")}
          alt="_صورة اول"
          className="imgshome "
        />
        <h2 className="font-the-h" style={{marginTop:"10%"}}>Discover Our Selection of Products</h2>
        <div className="imgshome div222">
          <img
            src={require("../../Assets/big4.jpg")}
            alt="منتج تاني"
            className="half"
          />
          <div>
            <div>
              <h2 className="font_h-ener">
                Quality Valves for
                Every Application
              </h2>
            </div>
          <Link to="/Products"><button className="btn1">Products</button></Link>
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default Home;
