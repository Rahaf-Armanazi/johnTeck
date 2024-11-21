import React, { useEffect, useState } from "react";
import { getBrowserInfo, isBrowserOutdated } from "../../error";

const BrowserWarning = () => {
  const [isOutdated, setIsOutdated] = useState(false);
  const [browserInfo, setBrowserInfo] = useState({ name: "", version: 0 });

  useEffect(() => {
    const minVersions = {
      Chrome: 90,
      Firefox: 85,
      Safari: 14,
      Edge: 90,
      Opera: 75,
    };

    const info = getBrowserInfo();
    setBrowserInfo(info);

    if (isBrowserOutdated(info, minVersions)) {
      setIsOutdated(true);
    }
  }, []);

  if (!isOutdated) {
    return null; // لا يظهر أي شيء إذا كان المتصفح حديثًا
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#ffcc00",
        color: "#000",
        textAlign: "center",
        padding: "10px",
        zIndex: 10000,
      }}
    >
      <p>
        Your browser ({browserInfo.name} {browserInfo.version}) is outdated.
        Please update for a better experience.
      </p>
      <a
        href="https://www.whatismybrowser.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", color: "#000" }}
      >
        Learn how to update your browser
      </a>
    </div>
  );
};

export default BrowserWarning;