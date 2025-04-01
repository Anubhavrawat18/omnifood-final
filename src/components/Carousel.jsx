import React, { useState, useEffect } from "react";
import "./carousel.css";

const images = [
  "img/gallery/gallery-1.jpg",
  "img/gallery/gallery-2.jpg",
  "img/gallery/gallery-3.jpg",
  "img/gallery/gallery-4.jpg",
  "img/gallery/gallery-11.jpg",
  "img/gallery/gallery-6.jpg",
  "img/gallery/gallery-7.jpg",
  "img/gallery/gallery-8.jpg",
  "img/gallery/gallery-9.jpg",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={img} alt={`Slide ${index + 1}`} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
