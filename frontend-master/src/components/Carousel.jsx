import React, { useState, useEffect } from 'react';
import carusel1 from '../assets/carusel1.png';
import carusel2 from '../assets/carusel2.png';
import carusel3 from '../assets/carusel3.png';
import carusel4 from '../assets/carusel4.png'; 
import './Carousel.css';

export default function Carousel() {
  const images = [carusel1, carusel2, carusel3, carusel4];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container h-[315px]">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === activeIndex ? 'active' : ''
            }`}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${
              index === activeIndex ? 'active' : ''
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}