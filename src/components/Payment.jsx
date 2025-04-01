import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate("/", { state: { message: "Payment Successful!" } });
    }, 2000);
  };
  return (
    <section className="section-payment">
      <div className="main-container">
        <div className="form">
          <form className="form">
            <label className="heading-tertiary">Select Payment Method</label>
            <br />
            <br />
            <br />
            <br />
            <br />
            <label className="options">
              <input type="radio" name="pay" id="upi" />
              UPI
              <svg
                className="end-align"
                width="32px"
                height="32px"
                viewBox="0 0 20.00 20.00"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#45260a"
                stroke="#45260a"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.04"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>money_round [#45260a]</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke-width="0.0002"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-380.000000, -2923.000000)"
                      fill="#45260a"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M332,2769 C332,2767.895 332.895,2767 334,2767 C335.105,2767 336,2767.895 336,2769 C336,2770.105 335.105,2771 334,2771 C332.895,2771 332,2770.105 332,2769 L332,2769 Z M340.343,2765 C341.972,2765 342,2765.384 342,2766.657 L340.343,2765 Z M340.343,2773 L342,2771.343 C342,2772.97 341.62,2773 340.343,2773 L340.343,2773 Z M326,2771.343 L327.657,2773 C326.03,2773 326,2772.62 326,2771.343 L326,2771.343 Z M327.657,2765 L326,2766.657 C326,2765.028 326.384,2765 327.657,2765 L327.657,2765 Z M337.515,2765 L341.515,2769 L337.515,2773 L330.485,2773 L326.485,2769 L330.485,2765 L337.515,2765 Z M342,2763 L326,2763 C324.895,2763 324,2763.895 324,2765 L324,2773 C324,2774.105 324.895,2775 326,2775 L342,2775 C343.105,2775 344,2774.105 344,2773 L344,2765 C344,2763.895 343.105,2763 342,2763 L342,2763 Z"
                          id="money_round-[#45260a]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </label>

            <br />
            <label className="options">
              <input type="radio" name="pay" id="card" /> Card
              <svg
                className="end-align"
                fill="#45260a"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#45260a"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>credit-card</title>{" "}
                  <path d="M0 26.016q0 0.832 0.576 1.408t1.44 0.576h28q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-28q-0.832 0-1.44 0.608t-0.576 1.408v20zM2.016 26.016v-14.016h28v14.016h-28zM2.016 8v-1.984h28v1.984h-28zM4 24h4v-1.984h-4v1.984zM4 20h6.016v-5.984h-6.016v5.984zM10.016 24h4v-1.984h-4v1.984zM16 24h4v-1.984h-4v1.984zM22.016 24h1.984v-1.984h-1.984v1.984zM26.016 24h1.984v-1.984h-1.984v1.984z"></path>{" "}
                </g>
              </svg>
            </label>
            <br />
            <label className="options">
              <input type="radio" name="pay" id="inetbnk" /> Internet Banking
              <svg
                className="end-align"
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#45260a"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8321 1.24802C11.5779 0.917327 12.4221 0.917327 13.1679 1.24802L21.7995 5.0754C23.7751 5.95141 23.1703 9 21.0209 9H2.97906C0.829669 9 0.224891 5.9514 2.20047 5.0754L10.8321 1.24802ZM12.3893 3.12765C12.1407 3.01742 11.8593 3.01742 11.6107 3.12765L3.41076 6.76352C3.31198 6.80732 3.34324 6.95494 3.45129 6.95494H20.5487C20.6568 6.95494 20.688 6.80732 20.5892 6.76352L12.3893 3.12765Z"
                    fill="#45260a"
                  ></path>{" "}
                  <path
                    d="M2 22C2 21.4477 2.44772 21 3 21H21C21.5523 21 22 21.4477 22 22C22 22.5523 21.5523 23 21 23H3C2.44772 23 2 22.5523 2 22Z"
                    fill="#45260a"
                  ></path>{" "}
                  <path
                    d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V19Z"
                    fill="#45260a"
                  ></path>{" "}
                  <path
                    d="M6 20C5.44772 20 5 19.5523 5 19L5 11C5 10.4477 5.44771 10 6 10C6.55228 10 7 10.4477 7 11L7 19C7 19.5523 6.55229 20 6 20Z"
                    fill="#45260a"
                  ></path>{" "}
                  <path
                    d="M17 19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11V19Z"
                    fill="#45260a"
                  ></path>{" "}
                </g>
              </svg>
            </label>
            <br />
            <div className="centre-text">
              <input
                className="cart-btn chkout"
                type="submit"
                value="Checkout"
                onClick={handleSubmit}
              />
            </div>
          </form>
          <br />
          <div className="centre-text">
            <Link className="cart-btn back-btn" to="/cart">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
