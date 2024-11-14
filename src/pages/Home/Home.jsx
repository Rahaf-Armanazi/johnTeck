import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import "../../components/Footer/Footer.css";
// import footer from "../../components/footer/Foote";
import Logo from "../../Assets/logo.png"; // تأكد من أن المسار صحيح
import names from "../../Assets/names.png";
import { Link } from "react-router-dom";

function Home() {
  const images = [
    require("../../Assets/12.jpg"),
    require("../../Assets/doc_2024-10-01_23-38-20.png"),
    require("../../Assets/big3.jpg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // تغيير الصورة كل 3 ثواني

    return () => clearInterval(intervalId); // تنظيف المؤقت عند انتهاء المكون
  }, [images.length]);

  return (
    <div className="homepage">
      <Header />
      <div className="logooo">
        <img src={Logo} alt="Logo" className="logoimg1" />
        <img src={names} alt="name" className="name1" />
      </div>
      <h2 className="p_home">
        Discover the precision and reliability of our expertly crafted valve
        products.
      </h2>
      <h3 className="p_home">
        With years of industry experience, we are committed to delivering
        solutions that meet the highest standards of quality and performance.
      </h3>
      <h2 className="font-the-h">Our Commitment to Excellence</h2>

      <div className="imgshome">
        <div className="imgshomeall">
        <img
        src={images[currentIndex]}
        alt="صورة متغيرة"
        className="im1"
      />
          {/* {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`صورة ${index}`}
              className={`image ${
                index === currentIndex ? 'active' : ''
              }`}
            />
          ))} */}
        </div>
      </div>

      <h2 className="font-the-h">Discover Our Selection of Products</h2>
      
      <div className="imgshome div222">
        <div className="half pppppp">
          <img src={require("../../Assets/big4.jpg")} alt="منتج تاني" />
        </div>
        <div className="half2 pppppp">
          <div>
            <h2 className="font_h-ener">
              Quality Valves for Every Application
            </h2>
          </div>
          <Link to="/Products">
            <button className="btn1">Products</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
