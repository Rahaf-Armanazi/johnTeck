// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"; // استيراد المكون
import "./App.css";
import DashBoard from "./pages/DashBoard/DashBoard";
// import { Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router";
import Product from "./pages/Product/Product";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import AboutUs from "./pages/AboutUs/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

export default function App() {
  const location = useLocation();

  // تحقق من مسار الصفحة
  const isAboutPage = location.pathname === "/AboutUs";

  return (
    <div
      style={{
        backgroundColor: isAboutPage ? "transparent" : "",
      }}
    >
      
      {/* باقي المحتوى */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Terms" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}
