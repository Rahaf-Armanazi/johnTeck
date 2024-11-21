import React from "react";
import "./TermsOfService.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function TermsOfService() {
  const { t, i18n } = useTranslation("TermsOfService");
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
    <div>
      <Header />
      <div className="termsOfService">
        <h1 id="H1termsOfService">{t("h")}</h1>
        <h6 id="ptermsOfService">{t("hh")}</h6>

        <p className="text1">{t("p1")}</p>

        <h2 className="h2p">{t("h1")}</h2>
        <p className="text1">{t("p2")}</p>
        <h2 className="h2p">{t("h2")}</h2>
        <p className="text1">{t("p3")}</p>
        <h2 className="h2p">{t("h3")}</h2>
        <p className="text1">{t("p4")}</p>
        <h2 className="h2p">{t("h4")}</h2>
        <p className="text1">{t("p5")}</p>
        <h2 className="h2p">{t("h5")}</h2>
        <p className="text1">{t("p6")}</p>

        <h2 className="h2p">{t("h6")}</h2>
        <p className="text1">{t("p7")}</p>

        <h2 className="h2p">{t("h7")}</h2>
        <p className="text1">{t("p8")}</p>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfService;
