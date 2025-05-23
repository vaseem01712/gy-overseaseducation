import React, { useState, useEffect } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlideActive, setAutoSlideActive] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    setAutoSlideActive(false); // Stop automatic sliding when manually navigating
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    setAutoSlideActive(false); // Stop automatic sliding when manually navigating
  };

  // Automatically transition to next slide every 3 seconds when autoSlideActive is true
  useEffect(() => {
    let interval;
    if (autoSlideActive) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000); // Change interval duration as needed
    }

    return () => clearInterval(interval);
  }, [autoSlideActive, slides.length]);

  return (
    <div className="relative w-full h-96 sm:h-96 md:h-96 lg:h-[1200px]">
      {/* Hide buttons on small screens (sm) */}
      <FaChevronCircleLeft
        className="hidden sm:block absolute top-1/2 left-2 transform -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl text-white z-10 cursor-pointer"
        onClick={prevSlide}
      />
      <FaChevronCircleRight
        className="hidden sm:block absolute top-1/2 right-2 transform -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl text-white z-10 cursor-pointer"
        onClick={nextSlide}
      />
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
