import React, { useState, useEffect } from "react";
import "./Carousel.css";

export default function GalleryCarousel({ object }) {
  const images = object || [];
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

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className="gcarousel-container py-4">
      <div className="gcarousel w-[1039px] h-[630px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gcarousel-slide ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            <img src={image} alt={`Slide ${index}`} className="" />
          </div>
        ))}
      </div>
      <div className="flex justify-between w-[150px] py-8 items-center">
        <i
          className="fa fa-angle-left bg-white w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#5661CB]"
          aria-hidden="true"
          onClick={goToPreviousSlide}
        ></i>
        <div className="index text-white flex">
          <div className="pr-1 font-[500]">{activeIndex + 1}</div>{" / "}
          <div className="pl-1 font-[200]">{images.length}</div>
        </div>
        <i
          className="fa fa-angle-right bg-white w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#5661CB]"
          aria-hidden="true"
          onClick={goToNextSlide}
        ></i>
      </div>
    </div>
  );
}
