import React from "react";
import "./styles.css";
import "./queries.css";
import "./general.css";

function Meals() {
  return (
    <div>
      <section className="section-meals">
        <div className="container centre-text">
          <span className="subheading">Meals</span>
          <h2 className="heading-secondary">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>
        <div className="container grid grid--3--cols margin-bottom-md no-vert-gap">
          <div className="meal meal-1">
            <img
              src="/img/meals/meal-1.jpg"
              alt="Japanese Gyozas"
              className="meal-img"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegetarian">Vegetarian</span>
              </div>
              <p className="meal-title">Japanese Gyozas</p>
              <ul className="meal-attributes">
                <li className="meal-atttribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li className="meal-atttribute">
                  <ion-icon
                    className="meal-icon"
                    name="nutrition-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg;<strong>74</strong>
                  </span>
                </li>
                <li className="meal-atttribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-half-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> rating(537)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal meal-2">
            <img
              src="/img/meals/meal-2.jpg"
              alt="Japanese Gyozas"
              className="meal-img"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan"> Vegan</span>
                <span className="tag tag--paleo">Paleo</span>
              </div>
              <p className="meal-title">Avocado Salad</p>
              <ul className="meal-attributes">
                <li className="meal-atttribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong> 400</strong> calories
                  </span>
                </li>
                <li className="meal-atttribute">
                  <ion-icon
                    className="meal-icon"
                    name="nutrition-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg;<strong>92</strong>
                  </span>
                </li>
                <li className="meal-atttribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-half-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.8</strong> rating(441)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="diets">
            <h3 className="heading-tertiary">Works with any diet:</h3>
            <ul className="list">
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Vegetarian</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Vegan</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Pescatarian</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Gluten-free</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Lactose-free</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Keto</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Paleo</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Low FOODMAP</span>
              </li>
              <li className="list-item">
                <ion-icon
                  name="checkmark-outline"
                  className="list-icon"
                ></ion-icon>
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container all-recipes">
          <a href="#" className="link">
            See all recipes &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}

export default Meals;
