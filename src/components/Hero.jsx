import React, { useEffect, useState } from "react";
import "./styles.css";
import "./queries.css";
import "./general.css";
import Carousel from "./Carousel";
import { Link, useLocation } from "react-router-dom";

function Hero() {
  const [msg, setMsg] = useState(false);
  const location = useLocation();
  const message = location.state?.message;
  useEffect(() => {
    if (message) {
      setMsg(true);

      const timeoutId = setTimeout(() => {
        setMsg(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [message]);
  const displayMsg = message && (
    <div
      className="container"
      style={{
        position: "absolute",
        width: "30vw",
        height: "20vh",
        backgroundColor: "white",
        borderRadius: "9px",
        border: "2px",
        borderStyle: "solid",
        borderColor: "#888",
        right: "0vw",
        padding: "1.5rem",
        zIndex: "999",
        visibility: msg ? "visible" : "hidden",
        color: "white",
      }}
    >
      <h1 className="subheading">New Notification</h1>
      <p
        style={{
          color: "#555",
          fontFamily: "Rubik",
          fontWeight: "400",
          lineHeight: "1",
          fontSize: "1.4rem",
        }}
      >
        {message}
      </p>
    </div>
  );

  return (
    <div>
      {displayMsg}
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>

            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>

            <Link to="/cart" className="btn btn--full margin-right-sm">
              Start eating well
            </Link>
            <a href="#" className="btn btn--outline">
              Learn more &darr;
            </a>

            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="/img/customers/customer-1.jpg" alt="Customer-photo" />
                <img src="/img/customers/customer-2.jpg" alt="Customer-photo" />
                <img src="/img/customers/customer-3.jpg" alt="Customer-photo" />
                <img src="/img/customers/customer-4.jpg" alt="Customer-photo" />
                <img src="/img/customers/customer-5.jpg" alt="Customer-photo" />
                <img src="/img/customers/customer-6.jpg" alt="Customer-photo" />
              </div>
              <div>
                <p className="delivered-text">
                  <span>250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
          </div>

          <div className="hero-img-box">
            <Carousel />
          </div>
        </div>
      </section>

      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src="/img/logos/techcrunch.png" alt="Techcrunch Logo" />
            <img
              src="/img/logos/business-insider.png"
              alt="Bussiness Insider Logo"
            />
            <img
              src="/img/logos/the-new-york-times.png"
              alt="The New York Times Logo"
            />
            <img src="/img/logos/forbes.png" alt="Forbes Logo" />
            <img src="/img/logos/usa-today.png" alt="USA Today Logo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
