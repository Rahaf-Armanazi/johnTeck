import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Certificates.css";

const Certificates = () => {
  const [certe, SetCert] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const res1 = await axios.get(
          "/api/certificates"
        );
        SetCert(res1.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, []);

  const arrcerte = certe.map((e) => (
    <div>
      <Link to={`/storage/Certificates/pdf/${e.pdf}`}>
        <img
          className="pdfuser"
          src={`/storage/Certificates/image/${e.image}`}
          alt="helooo i am not heer"
        />
      </Link>
    </div>
  ));
  return (
    <div className="cerA">
      <Header />
      <div style={{ flex: "1", margin: "5%" }}>{arrcerte}</div>
      <Footer />
    </div>
  );
};

export default Certificates;
