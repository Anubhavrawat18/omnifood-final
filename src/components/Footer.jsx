import React from "react";
import "./styles.css";
import "./queries.css";
import "./general.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <img
                alt="Omnifood Logo"
                className="logo"
                src="/img/omnifood-logo.png"
              />
            </a>

            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <ion-icon
                    name="logo-instagram"
                    className="social-icons"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <ion-icon
                    name="logo-facebook"
                    className="social-icons"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <ion-icon
                    name="logo-twitter"
                    className="social-icons"
                  ></ion-icon>
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
            </p>
          </div>

          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                Address: Chennai, Tamil Nadu, India, 390012
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a className="footer-link" href="mailto:hello@omnifood.com">
                  hello@omnifood.com
                </a>
              </p>
              <p></p>
            </address>
          </div>
          <div className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Create account
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  About Omnifood
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Cooking partners
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Recipe directory
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
