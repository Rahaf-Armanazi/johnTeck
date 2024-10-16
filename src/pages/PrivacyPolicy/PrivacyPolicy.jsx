import React from "react";
import "./PrivacyPolicy.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function PrivacyPolicy() {
  return (<>
  <Header/>
    <div className="privacyPolicy">
      <h1 id="H1privacy">Privacy Policy</h1>
      <h6 id="pprivacy"> Last updated October 3, 2024 h3</h6>

      <p className="text1">
        At JohntekValves.com, your privacy is very important to us. This privacy
        policy document outlines the types of information we do not collect when
        you use our website, as well as how we ensure your privacy.
      </p>

      <h2>Information We Do Not Collect</h2>
      <p className="text1">We want to assure you that:</p>

      <p className="text1">
        No personal data is collected when you visit or interact with our
        website.{" "}
      </p>
      <p className="text1">
        We do not ask for or store any personally identifiable information
        (PII), such as your name, email address, or phone number.
      </p>
      <p className="text1">
        We do not collect cookies, IP addresses, or any form of analytics or
        tracking data.
      </p>
      <h2>Third-Party Services</h2>
      <p className="text1">
        Since we do not collect any personal information, no third-party
        services are used to track or monitor user activity on this site. Any
        external links on our website may lead to third-party websites, and we
        recommend you review their privacy policies separately as we are not
        responsible for their practices.
      </p>

      <h2>Data Security</h2>
      <p className="text1">
        As we do not collect any personal data, there are no security risks
        associated with personal information. However, we still prioritize
        website security to ensure a safe browsing experience for all users.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p className="text1">
        We may update this privacy policy periodically to reflect any changes in
        our practices or legal obligations. The latest version will always be
        available on this page, with the effective date listed at the top.
      </p>

      <h2>Contact Us</h2>
      <p className="text1">
        If you have any questions or concerns about this privacy policy, please
        feel free to contact us at :<a href="">info@johntekvalves.com</a>
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default PrivacyPolicy;
