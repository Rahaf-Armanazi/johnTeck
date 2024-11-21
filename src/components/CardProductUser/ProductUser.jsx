import React, { useEffect, useState } from "react";
import "./ProductUser.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stander from "../BtnStand/Stander";
const ProductUser = () => {
  const [infoproCard2, SetIn] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get("/api/products");
          console.log(res.data)
          SetIn(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  , []);

  const showinfoCard2 = infoproCard2?.map((e) => (
    <div key={e.id} className="Showcard">
      <div className="C1user">
        <img
          className="imageUser"
          src={`/storage/products/images/${e.image}`}
          alt="helooo i am not heer"
        />
        {/* <Stander/> */}
      </div>

      <div className="C2user">
        <div className="productdetailsuser">
          <h1 className="productNameuser">{e.EnglishName}</h1>
          <div className="PIuser">
            <p className="productdeDescriptionuser">{e.EnglishDescription}</p>
            <Link to={`/storage/products/pdfs/${e.pdf}`}>
             <img
              className="pdfuser"
              src={require("../../Assets/images__3_-removebg-preview.png")}
              alt="helooo i am not heer"
            />
            </Link>
          </div>
        </div>

        <p className="C3user">
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