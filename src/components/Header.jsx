import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "./queries.css";
import "./general.css";

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img
          alt="Omnifood Logo"
          className="logo"
          src="/img/omnifood-logo.png"
        />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-links">
          <li>
            <Link className="main-nav-link" to="#">
              How It Works
            </Link>
          </li>
          <li>
            <Link className="main-nav-link" to="#">
              Meals
            </Link>
          </li>
          <li>
            <Link className="main-nav-link" to="#">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="main-nav-link" to="#">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/login" className="main-nav-link nav-cta">
              Try for Free
            </Link>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}

export default Header;
