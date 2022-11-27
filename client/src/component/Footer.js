import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__contain">
          <div className="footer__content">
            <div className="first__part">
              <div className="logo__foter">
                <img src="/images/logo.png" alt="" />
                <h3>PanFood</h3>
              </div>
              <p>
                Which morning fourth great won't is to fly bearing man. Called
                unto shall seed, deep, herb set seed land divide after over
                first creeping. First creature set upon stars deep male gathered
                said she'd an image spirit our
              </p>
            </div>
            <div className="second__part">
              <div className="contact__footer">
                <h3 style={{ color: "#ffb606" }}>Contact Us</h3>
                <div className="location">
                  <i class="uil uil-location-pin-alt"></i>
                  <p>1234 Some St San Francisco, CA 94102, US 1.800.123.4567</p>
                </div>
                <div className="phone">
                  <i class="uil uil-phone"></i>
                  <p> +216 28420108</p>
                </div>
                <div className="email">
                  <i class="uil uil-envelope-edit"></i>
                  <p>hazem@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="third__part">
              <div className="opening">
                <h3 style={{ color: "#ffb606" }}>Opening Hours</h3>
                <p>Monday.............Closed</p>
                <p>Tue-Fri............10 am - 12 pm</p>
                <p>Sat-Sun ...........8 am - 11 pm</p>
                <p>Holidays .......... 10 am - 12 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
