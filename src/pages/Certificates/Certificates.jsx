import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Certificates.css";

const Certificates = () => {
  const [certe, SetCert] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePdfClick = (e) => {
    setIsLoading(true);
    // يسمح بتنزيل الملف بعد التأكد من تحميل الرابط
    setTimeout(() => setIsLoading(false), 5000); // توقيت اختياري
  };

  useEffect(() => {
    const data = async () => {
      try {
        const res1 = await axios.get(
          "https://johntekvalves.com/backend/api/certificates"
        );
        SetCert(res1.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, []);

  const arrcerte = certe.map((e) => (
    <div className="cer1">
      <a
        href={`https://johntekvalves.com/backend/storage/Certificates/pdf/${e.pdf}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handlePdfClick}
      >
        {isLoading ? (
          <span>Loading PDF...</span>
        ) : (
          <img
            className="cer2"
            src={`https://johntekvalves.com/backend/storage/Certificates/image/${e.image}`}
            alt="helooo i am not heer"
          />
        )}
      </a>
    </div>
  ));
  return (
    <div className="cerA">
      <Header />
      <div style={{ flex: "1" ,marginBottom:"0"}}>{arrcerte}</div>
      <Footer />
    </div>
  );
};

export default Certificates;
