import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Steps from "./components/Steps";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import "./components/styles.css";
import "./components/general.css";
import "./components/queries.css";

function Layout() {
  return (
    <div>
      <Header />
      <Hero />
      <Steps />
      <Meals />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Layout;
