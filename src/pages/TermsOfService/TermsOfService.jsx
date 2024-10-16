import React from "react";
import "./TermsOfService.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function TermsOfService() {
  return (
    <div>
      <Header />

      <div className="termsOfService">
        <h1 id="H1termsOfService">Terms of Service</h1>
        <h6 id="ptermsOfService"> Last updated October 3, 2024 h3</h6>

        <p className="text1">
          Welcome to JohntekValves.com . By accessing or using our website, you
          agree to be bound by the following Terms of Service. If you do not
          agree with these terms, you should not use this website.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p className="text1">
          By accessing and using this website, you accept and agree to be bound
          by the terms and conditions outlined in this agreement. If you do not
          agree to these terms, please refrain from using the website.
        </p>
        <h2>2. Description of Services</h2>
        <p className="text1">
          {" "}
          JohntekValves.com provides information about the products offered by
          Johntek Valves, including images, descriptions, and technical
          specifications in the form of downloadable PDF files. The website is
          for informational purposes only and does not provide pricing, payment
          options, or the ability to purchase products directly through the
          website.{" "}
        </p>
        <h2>3. No Sales or Registration</h2>
        <p className="text1">
          Our website is designed purely for information purposes. We do not
          offer online sales, and you cannot register for any services on this
          site. Any purchase inquiries or other business matters must be
          directed to our company through the contact information provided on
          the website.
        </p>
        <h2>4. Intellectual Property</h2>
        <p className="text1">
          All content on this website, including but not limited to product
          images, descriptions, technical documentation, logos, and other
          materials, are the intellectual property of Johntek Valves or licensed
          to us, unless otherwise noted. You may not copy, distribute,
          reproduce, or use any of the materials without our prior written
          consent.
        </p>
        <h2>5. Use of Website</h2>
        <p className="text1">
          You agree to use the website only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use of the website. You must not attempt to gain unauthorized
          access to any part of the website or to disrupt the functioning of the
          website in any way
        </p>

        <h2>6. Links to Third-Party Websites</h2>
        <p className="text1">
          Our website may contain links to third-party websites. These links are
          provided for your convenience and reference. We do not endorse or have
          control over the content or practices of these third-party sites. We
          encourage you to review the terms and privacy policies of any
          third-party websites you visit.
        </p>

        <h2>7. No Collection of Personal Data</h2>
        <p className="text1">
          We do not collect, store, or process any personal data from users of
          this website. For more details, please refer to our [Privacy
          Policy](هاد رابط لسياسة الخصوصية).
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default TermsOfService;
