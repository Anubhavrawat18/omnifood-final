import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="signup">
      <section className="section-cta">
        <div className="main-div">
          <div className="login-container">
            <div className="cta-text-box">
              <h2 className="heading-secondary centre-text less-margin">
                Login
              </h2>
              <p className="cta-text heading-tertiary centre-text">
                Welcome Back!
              </p>

              <form className="login-form" action="#">
                <div>
                  <label className="inputs" for="email">
                    Email address:
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="me@example.com"
                    required
                  />
                </div>
                <br />
                <div>
                  <label className="inputs" for="full-name">
                    Password:
                  </label>
                  <input
                    id="full-name"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <br />
                <br />
                <div className="centre-text">
                  <button className="btn btn--form login-btn">Login</button>
                  <br />
                  <br />
                  <p className="small-text">
                    --------------------OR--------------------
                  </p>

                  <br />
                  <Link className="btn btn--form login-btn" to="/signup">
                    Create New Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <Link className="back-to-home" to="/">
          Back to Home
        </Link> */}
      </section>
    </div>
  );
};

export default Login;
