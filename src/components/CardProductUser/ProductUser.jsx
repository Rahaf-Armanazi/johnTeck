import React, { useEffect, useState } from "react";
import "./ProductUser.css";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductUser = () => {
  const [infoproCard2, SetIn] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://192.168.43.97:4784/AllProducts");
        SetIn(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  const showinfoCard2 = infoproCard2?.map((e) => (
    <div key={e.id} className="Showcard">
      <div className="C1user">
        <img
          className="imageUser"
          src={`http://192.168.43.97:4784/images/${e.Image}`}
          alt="helooo i am not heer"
        />
      </div>

      <div className="C2user">
        <div className="productdetailsuser">
          <h1 className="productNameuser">{e.name}</h1>
          <div className="PIuser">
            <p className="productdeDescriptionuser">{e.Description}</p>
            <Link to={`http://192.168.43.97:4784/Document/${e.pdf}`}> <img
              className="pdfuser"
              src={require("../../Assets/images__3_-removebg-preview.png")}
              alt="helooo i am not heer"
            />
            </Link>
          </div>
        </div>

        <p className="C3user">
          <Link to="/contactUs" className="linuser">
            Contact Us{" "}
          </Link>
          to order & inquire about this product
        </p>
      </div>
    </div>
  ));
  return <div>{showinfoCard2}</div>;
};

export default ProductUser;
