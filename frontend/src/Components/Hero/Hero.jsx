import React, { useState, useEffect } from "react";
import banner1 from "../Assets/banner-1.webp";
import banner2 from "../Assets/banner-2.webp";
import banner3 from "../Assets/banner-3.webp";
import './Hero.css';

const banners = [banner1, banner2, banner3];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Previous button handler
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // Next button handler
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "500px",
      }}
    >
      {/* Sliding container */}
      <div
        style={{
          display: "flex",
          width: `${banners.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / banners.length)}%)`,
          transition: "transform 0.7s ease-in-out",
          height: "500px",
        }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            style={{
              width: `${100 / banners.length}%`,
              height: "500px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;





