import React from "react";
import { useState } from "react";
import Logo from "../../Assets/logo.png"; // تأكد من أن المسار صحيح
// import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد FontAwesome
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
function Header() {
  // تعريف حالة للتحكم في إظهار أو إخفاء حقل الإدخال
  const [showInput, setShowInput] = useState(false);
  const [productName, setNamePro] = useState("");
  // const {productName}=useParams();
  // دالة لتغيير حالة الحقل عند الضغط على الأيقونة
  const handleSearchClick = () => {
    setShowInput(!showInput); // تبديل الحالة بين إظهار أو إخفاء
  };

  // Search function
  const submitsearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`api/${productName}`);
      setNamePro(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="Logo" width="100" margin-right="6%" height="100" />
      </div>
      <div className="Transfers">
        <Link to="/" className="linksss">
          Home
        </Link>
        <Link to="/Products" className="linksss">
          Products
        </Link>
        <Link to="/AboutUs" className="linksss">
          About Us
        </Link>
        <Link to="/Terms" className="linksss">
          Terms of service
        </Link>
        <Link to="/PrivacyPolicy" className="linksss">
          Privacy policy
        </Link>
        <Link to="/ContactUs" className="linksss">
          Contact Us
        </Link>
        <Link to="/Certificates" className="linksss">
          Certificates
        </Link>
        <i className="fas fa-search linksss" onClick={handleSearchClick}></i>
        {showInput && (
          <form  onSubmit={submitsearch}>
            <div className="forsearch">
            <input
              type="text"
              placeholder="Search..."
              className="inputname"
              value={productName}
              onChange={(event) => setNamePro(event.target.value)}
            />
            <button type="submit" className="bsearch"><i className="fas fa-search linksss" style={{position:"absolute"}}></i></button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Header;
