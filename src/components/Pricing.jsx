import React from "react";
import "./styles.css";
import "./queries.css";
import "./general.css";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <section class="section-pricing">
        <div class="container">
          <span class="subheading">Pricing</span>
          <h2 class="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>

        <div class="container grid grid--2--cols margin-bottom-md">
          <div class="pricing-plan pricing-plan--starter">
            <header class="plan-header">
              <p class="plan-name">Starter</p>
              <p class="plan-price">
                <span>$</span>399
              </p>
              <p class="plan-text">per meal. That's just $13 per meal</p>
            </header>
            <ul class="list">
              <li class="list-item">
                <ion-icon name="checkmark-outline" class="list-icon"></ion-icon>
                <span>1 meal per day</span>
              </li>
              <li class="list-item">
                <ion-icon name="checkmark-outline" class="list-icon"></ion-icon>
                <span>Order from 11am to 9pm</span>
              </li>
              <li class="list-item">
                <ion-icon name="checkmark-outline" class="list-icon"></ion-icon>
                <span>Delivery is free</span>
              </li>
              <li class="list-item">
                <ion-icon name="close-outline" class="list-icon"></ion-icon>
                <span>Get access to latest recipes</span>
              </li>
            </ul>
            <div class="plan-sign-up">
              <Link to="/signup" class="btn btn--full">
                Start eating well
              </Link>
            </div>
          </div>
          <div class="pricing-plan pricing-plan--complete">
            <header class="plan-header">
              <p class="plan-name">Complete</p>
              <p class="plan-price">
                <span>$</span>649
              </p>
              <p class="plan-text">per meal. That's just $11 per meal</p>
            </header>
            <ul class="list">
              <li class="list-item">
                <ion-icon name="checkmark-outline" class="list-icon"></ion-icon>
                <span>
                  <strong>2 meals</strong> per day
                </span>
              </li>
              <li class="list-item">
                <ion-icon name="checkmark-outline" class="list-icon"></ion-icon>
                <span>
                  Order<strong> 24/7</strong>
                </span>
              </li>
              <li class="list-item">
                <ion-icon name="checkmark-outline" class="list-icon"></ion-icon>
                <span>Delivery is free</span>
              </li>
              <li class="list-item">
                <ion-icon name="checkmark-outline" class="list-icon"></ion-icon>
                <span>Get access to latest recipes</span>
              </li>
            </ul>
            <div class="plan-sign-up">
              <Link to="/signup" class="btn btn--full">
                Start eating well
              </Link>
            </div>
          </div>
        </div>

        <div class="container grid">
          <aside class="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>

        <div class="container grid grid--4--cols">
          <div class="feature">
            <ion-icon class="featuere-icon" name="infinite-outline"></ion-icon>
            <p class="feature-title">Never cook again!</p>
            <p class="feature-text">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>
          <div class="feature">
            <ion-icon class="featuere-icon" name="nutrition-outline"></ion-icon>
            <p class="feature-title">Local and organic</p>
            <p class="feature-text">
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>
          <div class="feature">
            <ion-icon class="featuere-icon" name="leaf-outline"></ion-icon>
            <p class="feature-title">No waste</p>
            <p class="feature-text">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>
          <div class="feature">
            <ion-icon class="featuere-icon" name="pause-outline"></ion-icon>
            <p class="feature-title">Pause anytime</p>
            <p class="feature-text">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
