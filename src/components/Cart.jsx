import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const WEB_PROJECT_KEY = "WEB_PROJECT_KEY";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pickled Ramen",
      cost: 12,
      qty: 0,
      img: "img/gallery/gallery-1.jpg",
    },
    {
      id: 2,
      name: "Oatmeal",
      cost: 10,
      qty: 0,
      img: "img/gallery/gallery-13.jpg",
    },
    {
      id: 3,
      name: "Fig Salad",
      cost: 300,
      qty: 0,
      img: "img/gallery/gallery-3.jpg",
    },
    {
      id: 4,
      name: "Fruit Bowl",
      cost: 4000,
      qty: 0,
      img: "img/gallery/gallery-4.jpg",
    },
    {
      id: 5,
      name: "Pesto Salad",
      cost: 50,
      qty: 0,
      img: "img/gallery/gallery-17.jpg",
    },
    {
      id: 6,
      name: "Veggie Bowl with Hummus",
      cost: 20,
      qty: 0,
      img: "img/gallery/gallery-6.jpg",
    },
    {
      id: 7,
      name: "Toast",
      cost: 70,
      qty: 0,
      img: "img/gallery/gallery-7.jpg",
    },
    {
      id: 8,
      name: "MeatBalls",
      cost: 200,
      qty: 0,
      img: "img/gallery/gallery-16.jpg",
    },
  ]);

  const [emptyCart, setEmptyCart] = useState(false);

  const fetchLocalStorage = () => {
    const localData = localStorage.getItem(WEB_PROJECT_KEY);
    if (localData) {
      setProducts(JSON.parse(localData));
    }
  };

  useEffect(() => {
    fetchLocalStorage();
  }, []);

  useEffect(() => {
    let totalProds = 0;
    Array.from(products)?.map((p) => (totalProds += p?.qty));
    if (totalProds) {
      setEmptyCart(false);
      console.log(emptyCart);
    } else {
      setEmptyCart(true);
      console.log(emptyCart);
    }
  }, [products]);

  const updateItem = (id, action) => {
    const productsData = Array.from(products);
    action === "add"
      ? productsData?.map((p) => (p?.id === id ? { ...p, qty: p.qty++ } : p))
      : productsData?.map((p) => (p?.id === id ? { ...p, qty: p.qty-- } : p));
    setProducts(productsData);
    localStorage.setItem(WEB_PROJECT_KEY, JSON.stringify(productsData));
  };

  const resetCart = () => {
    setProducts([
      {
        id: 1,
        name: "Pickled Ramen",
        cost: 12,
        qty: 0,
        img: "img/gallery/gallery-1.jpg",
      },
      {
        id: 2,
        name: "Oatmeal",
        cost: 10,
        qty: 0,
        img: "img/gallery/gallery-13.jpg",
      },
      {
        id: 3,
        name: "Fig Salad",
        cost: 300,
        qty: 0,
        img: "img/gallery/gallery-3.jpg",
      },
      {
        id: 4,
        name: "Fruit Bowl",
        cost: 4000,
        qty: 0,
        img: "img/gallery/gallery-4.jpg",
      },
      {
        id: 5,
        name: "Pesto Salad",
        cost: 50,
        qty: 0,
        img: "img/gallery/gallery-17.jpg",
      },
      {
        id: 6,
        name: "Veggie Bowl with Hummus",
        cost: 20,
        qty: 0,
        img: "img/gallery/gallery-6.jpg",
      },
      {
        id: 7,
        name: "Toast",
        cost: 70,
        qty: 0,
        img: "img/gallery/gallery-7.jpg",
      },
      {
        id: 8,
        name: "MeatBalls",
        cost: 200,
        qty: 0,
        img: "img/gallery/gallery-16.jpg",
      },
    ]);
    localStorage.removeItem(WEB_PROJECT_KEY);
  };

  const total = () => {
    let totalCost = 0;
    products?.map((e) => {
      return (totalCost += e?.qty * e?.cost);
    });
    return totalCost;
  };

  return (
    <section className="main_cont">
      <h1 className="heading-primary top-heading ">FOOD MY DOOR</h1>
      <hr />
      <div
        style={{ textAlign: "center" }}
        className=" top-text heading-tertiary"
      >
        WHAT WOULD YOU LIKE TODAY ?
      </div>
      <div className="prods">
        {products?.map((prod, index) => (
          <div key={index} className="prodCard">
            <img className="card-img" src={prod?.img} alt="" />
            <div className="prodInfo">
              <div className="prodName detail-text">{prod.name}</div>
              <p className="prodCost detail-text">{" $" + prod?.cost}</p>
              <button
                className="cartBtn"
                onClick={() => {
                  updateItem(prod?.id, "add");
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart summary_text">
        <p
          style={{
            textAlign: "center",
            textDecoration: "underline",
            marginBottom: "60px",
          }}
        >
          YOUR CART
        </p>
        <div
          className="emptyCart"
          style={{ display: emptyCart ? "block" : "none" }}
        >
          Your cart is empty :(
        </div>
        {products?.map((prod) => (
          <div className="singleProducts" key={prod?.id}>
            {prod?.qty > 0 && (
              <>
                <span>{`${prod?.name}:  $${prod?.cost}`}</span>
                <br />
                <span>Quantity: </span>
                <button
                  className="addCart"
                  onClick={() => {
                    updateItem(prod?.id, "rem");
                  }}
                >
                  -
                </button>
                <span> {prod?.qty} </span>
                <button
                  className="remCart"
                  onClick={() => {
                    updateItem(prod?.id, "add");
                  }}
                >
                  +
                </button>
              </>
            )}
          </div>
        ))}
        <p className="summary_text blocks">Your Total</p>
        <p className="   summary_text blocks">{"$" + total()}</p>
        <div className="buttons">
          <Link className="proceed-btn" to="/payment">
            Proceed to Checkout
          </Link>
          <button className="resCart" onClick={resetCart}>
            Reset Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
