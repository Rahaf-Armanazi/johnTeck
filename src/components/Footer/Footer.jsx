import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t, i18n } = useTranslation("footer");
  useEffect(() => {
    var dir = "";
    if (i18n.language === "ar") {
      dir = "rtl";
    } else {
      dir = "ltr";
    }
    var lang = "";
    if (i18n.language === "ar") {
      lang = "ar";
    } else if (i18n.language === "en") {
      lang = "en";
    } else {
      lang = "tr";
    }
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [i18n.language]);

  return (
    <div className="contentFooter">
      <div className="allfooter">
        <div className="d1">
          <Link to="#" className="linkk">
            <h3 className="h3footer">Johntek Valves</h3>
          </Link>
          <Link to="/AboutUs" className="linkk">
            <h3 className="h3footer">{t("L1")}</h3>
          </Link>
        </div>
        <div className="d1">
          <Link to="/Terms" className="linkk">
            <h3 className="h3footer">{t("L2")}</h3>
          </Link>
          <Link to="/PrivacyPolicy" className="linkk">
            <h3 className="h3footer">{t("L3")}</h3>
          </Link>
          <Link to="/Certificates" className="linkk">
            <h3 className="h3footer">{t("L5")}</h3>
          </Link>
        </div>

        <div className="d1">
          <h3 className="h3footer"><Link to="/ContactUs">{t("L4")}</Link></h3>
          <Link to="mailto:info@johntekvalves.com" className="linkk">
            <h5 className="h3footer em">info@johntekvalves.com </h5>
          </Link>
          <Link to="mailto:sales@johntekvalves.com" className="linkk">
            <h5 className="h3footer em">sales@johntekvalves.com</h5>
          </Link>
        </div>
        <div className="d1 top">
          <Link to="mailto:export@johntekvalves.com" className="linkk">
            <h5 className="h3footer em">export@johntekvalves.com</h5>
          </Link>
          <Link to="tel:+0981398162735" className="linkk">
            <h5 className="h3footer em">+0981398162735</h5>
          </Link>
        </div>
      </div>
      <div className="lastfooter">
        <h6>JohntekValves.com © 2024 All Rights Reserved. </h6>
        <h6>made by RAYS_Tech</h6>
      </div>
    </div>
  );
}

export default Footer;
