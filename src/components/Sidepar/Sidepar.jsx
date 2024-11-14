import React, { useState, useEffect, useRef } from "react";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import "./Sidepar.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد المكون
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونات
import NameLogo from "../../Assets/names.png";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // تعريف حالة للتحكم في إظهار أو إخفاء حقل الإدخال
  const [showInput, setShowInput] = useState(false);
  const [productName, setNamePro] = useState("");
  // const {productName}=useParams();
  const searchRef = useRef(null); // Reference for the search element
  const sidebarRef = useRef(null); // Reference for the sidebar element

   // دالة لتحديد إذا كان النقر خارج الشريط الجانبي
   const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      toggleSidebar();
    }
  };
   // إضافة حدث النقر عند فتح الشريط الجانبي وإزالته عند إغلاقه
   useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // تنظيف الحدث عند إلغاء المكون
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

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
      if (searchRef.current &&
        // sidebarRef.current &&
         !searchRef.current.contains(event.target)
        // && !sidebarRef.current.contains(event.target)
        ) {
        setShowInput(false);
        // toggleSidebar(); // Close sidebar
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    // toggleSidebar
  ]);
  return (
    <div className={`sidebar ${isOpen ? "open" : "close"}`} ref={sidebarRef
      // searchRef
      }>
      <button onClick={toggleSidebar} className="close-btn">
        <FontAwesomeIcon icon={faChevronLeft}   size="small" id="Left" />{" "}
      </button>
      <div className="">
        <img src={Logo} alt="Logo" className="logo1" />
        <img src={NameLogo} alt="NameLogo" className="logo1" />
      </div>

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
      <i className="fas fa-search linksss" onClick={handleSearchClick}></i>
      {showInput && (
        <form onSubmit={submitsearch} className="searchside"  ref={searchRef}>
          <div className="forsearch">
            <button type="submit" id="okside">
              ok
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="inputnamesid"
              value={productName}
              onChange={(event) => setNamePro(event.target.value)}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Sidebar;
