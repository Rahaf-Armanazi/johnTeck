import React, { useEffect, useState } from "react";
import "./ProductUser.css";
// import "./Stander.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stander from "../BtnStand/Stander";
import { useTranslation } from "react-i18next";

const ProductUser = () => {
  const [infoproCard2, SetIn] = useState([]);
  const { search } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const handlePdfClick = (e) => {
    setIsLoading(true);
    // يسمح بتنزيل الملف بعد التأكد من تحميل الرابط
    setTimeout(() => setIsLoading(false), 5000); // توقيت اختياري
  };

  const { t, i18n } = useTranslation("Home");
  useEffect(() => {
    var dir = i18n.language === "ar" ? "rtl" : "ltr";
    var lang =
      i18n.language === "ar" ? "ar" : i18n.language === "en" ? "en" : "tr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [i18n.language]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search) {
          // https://johntekvalves.com/backend/api/products
          const res = await axios.get(
            `https://johntekvalves.com/backend/api/products/${search}`
          );
          console.log(res.data);
          SetIn(Array.isArray(res.data) ? res.data : [res.data]);
        } else {
          const res = await axios.get(
            "https://johntekvalves.com/backend/api/products"
          );
          SetIn(res.data);
        }
      } catch (err) {
        console.log("the error is", err);
      }
    };
    fetchData();
  }, [search]);

  const showinfoCard2 = infoproCard2?.map((e, index) => (
    <div key={e.id || index} className="Showcard">
      <div className="C1user">
        <img
          className="imageUser"
          src={`https://johntekvalves.com/backend/storage/products/images/${e.image}`}
          alt="helooo i am not heer"
        />
        {/* عرض الـ Stander فقط إذا كان المنتج يحتوي على بيانات الـ standard */}
      </div>

      <div className="C2user">
        <div className="productdetailsuser">
          <h1 className="productNameuser">{e.EnglishName}</h1>
          <div className="PIuser">
            <p className="productdeDescriptionuser">
              {i18n.language === "ar"
                ? e.ArabicDescription
                : i18n.language === "en"
                ? e.EnglishDescription
                : e.TurkishDescription}
            </p>
            <div>
            <a
              href={`https://johntekvalves.com/backend/storage/products/pdfs/${e.pdf}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePdfClick}
            >
              {isLoading ? (
                <span>Loading PDF...</span>
              ) : (
                <img
                  className="pdfuser"
                  src={require("../../Assets/images__3_-removebg-preview.png")}
                  alt="helooo i am not heer"
                />
              )}
            </a>
            {e.standard !== "no information" && (
                <Stander standardData={e.standard} />
              )}
            </div>
          </div>
        </div>

        <p className="C3user" dir="ltr">
          <Link to="/contactUs" className="linuser">
            Contact Us
          </Link>
          to order & inquire about this product
        </p>
      </div>
    </div>
  ));
  return <div>{showinfoCard2}</div>;
};

export default ProductUser;

//   // Search function
//   const submitsearch = async (e) => {
//     e.preventDefault();
//     if (nameProduct === "") {
//       setallprod(allprod);
//       console.log("allproduct");
//     } else {
//     try {
//       const res = await axios.get(
//         `/searchProducts/${nameProduct}`
//       );
//       setShow(res.data);
//       console.log(show); // التحقق من النتائج التي تم إرجاعها
//       if (res.status === 200 ) {
//         // التنقل إلى صفحة Products وتمرير نتائج البحث
//         nav(`/Products`, { state: { results: res.data } });
//       } else {
//         alert("No products found with that name.");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
