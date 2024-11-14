// import React , { useState }from "react";
// import Logo from "../../Assets/logo.png"; // تأكد من أن المسار صحيح
// // import axios from "axios";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد FontAwesome
// import { Link ,  useNavigate , useParams} from "react-router-dom";
// import "./Header.css";
// import axios from "axios";

// function Header() {
//   // تعريف حالة للتحكم في إظهار أو إخفاء حقل الإدخال
//   const [showInput, setShowInput] = useState(false);

//   const [show,setShow]=useState([]);
//   const [allprod, setallprod ] = useState([]);
//   const [nameProduct, setNamePro] = useState("");

//   const nav=useNavigate();
//   // دالة لتغيير حالة الحقل عند الضغط على الأيقونة
//   const handleSearchClick = () => {
//     setShowInput(!showInput); // تبديل الحالة بين إظهار أو إخفاء
//   };

//   // Search function
//   const submitsearch = async (e) => {
//     e.preventDefault();
//     if (nameProduct === "") {
//       setallprod(allprod);
//       console.log("allproduct");
//     } else {
//     try {
//       const res = await axios.get(
//         `http://192.168.137.29:4784/searchProducts/${nameProduct}`
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
//   }
//   return (
//     <div className="header">
//       <div>
//         <img src={Logo} alt="Logo" width="100" margin-right="6%" height="100" />
//       </div>
//       <div className="Transfers">
//         <Link to="/" className="linksss">
//           Home
//         </Link>
//         <Link to="/Products" className="linksss">
//           Products
//         </Link>
//         <Link to="/AboutUs" className="linksss">
//           About Us
//         </Link>
//         <Link to="/Terms" className="linksss">
//           Terms of service
//         </Link>
//         <Link to="/PrivacyPolicy" className="linksss">
//           Privacy policy
//         </Link>
//         <Link to="/ContactUs" className="linksss">
//           Contact Us
//         </Link>
//         <Link to="/Certificates" className="linksss">
//           Certificates
//         </Link>
//         <i className="fas fa-search linksss" onClick={handleSearchClick}></i>
//         {showInput && (
//
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import { useState, useEffect, useRef  } from "react";
import Sidepar from "../Sidepar/Sidepar";
import Button from "../btn/Btn";
import Logo from "../../Assets/logonew.png"; // تأكد من أن المسار صحيح
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد المكون
import { faBars } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونات
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد FontAwesome
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  // حالة للشريط الجانبي
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // تعريف حالة للتحكم في إظهار أو إخفاء حقل الإدخال
  const [showInput, setShowInput] = useState(false);
  const [productName, setNamePro] = useState("");
  const searchRef = useRef(null); // Reference for the search element
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
// Close search input if clicked outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowInput(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div className="all">
      <div className={`header ${isSidebarOpen ? "hide" : ""}`}  ref={searchRef}>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="transfers">
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
          <form action="name the aplication" method="0" className="linksss">
            <select name="language" className="selectlinksss">
              <option> arabic </option>
              <option selected="selected"> English </option>
              <option> Turki </option>
            </select>
          </form>
          
          {showInput && (
            <form onSubmit={submitsearch} className="searchdiv">
              <div className="forsearch">
              <button type="submit" id="ok">
                  ok
                </button>
                <input
                  type="text"
                  placeholder="Search..."
                  className="inputname"
                  value={productName}
                  onChange={(event) => setNamePro(event.target.value)}
                />
              </div>
            </form>
          )}
          <i className="fas fa-search linksss" onClick={handleSearchClick}></i>
        </div>
      </div>
      {/* زر فتح الشريط الجانبي */}

      {!isSidebarOpen && (
        <Button
          onClick={toggleSidebar}
          label={<FontAwesomeIcon icon={faBars} size="small" id="hoom" />}
        />
      )}
      {/* الشريط الجانبي */}
      <Sidepar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Header;
