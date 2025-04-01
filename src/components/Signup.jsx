import React from "react";
import "./styles.css";
import "./queries.css";
import "./general.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <section className="section-cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Get your first meal for free!
              </h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              <form className="cta-form" action="#">
                <div>
                  <label for="full-name">Full Name:</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email address:</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="me@example.com"
                    required
                  />
                </div>

                <div>
                  <label for="select-where">Where did you hear from us?</label>
                  <select id="select-where" required>
                    <option value="">Please choose an option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">Youtube Video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button className="btn btn--form">Sign up now!</button>
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>

        <Link className="back-to-home" to="/">
          Back to Home
        </Link>
      </section>
    </div>
  );
}

export default Signup;
