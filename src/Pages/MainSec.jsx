import React from "react";
import "../CSS/slider.css";

const MainSec = () => {

  const slides = [
    "/1sec-1slide.jpg",
    "/1sec-2slide.jpg",
    "/1sec-3slide.jpg",
    "/1sec-3slide.jpg",
  ];

  const continuousSlides = [...slides, ...slides];

  return (
    <div className="relative flex flex-col items-center bg-[#0B0F1A] px-4 sm:px-6 lg:px-0 overflow-hidden">

      
      <img
        src="/bg.png"
        alt="shadow"
        className='
          absolute top-0 left-1/2 -translate-x-1/2 opacity-80'
      />

      
      <div className="relative z-10 max-w-[892px] mt-[80px] lg:mt-[144px] text-center">

        <div className="bg-white/10 py-2 px-4 rounded-full inline-flex text-[#A7ADBE]">
          <p className="text-[14px] font-medium">
            We Design websites that matter, users can’t resist
          </p>
        </div>

        <h1 className="mt-4 text-white font-bold text-[28px] sm:text-[40px] lg:text-[64px]">
          Empowering Businesses with
          <span className="block text-[#FFEB9A]">
            Smart IT Solutions
          </span>
        </h1>

        <p className="mt-4 text-[#A7ADBE] text-[16px] sm:text-[20px]">
          Web. Mobile. Marketing. AI. We do it all.
        </p>

        <button className="mt-6 bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] px-6 py-3 rounded-full text-white hover:scale-105 transition">
          Get Started
        </button>
      </div>

      {/* 🔹 SLIDER */}
      <div className="relative z-10 mt-10 w-full overflow-hidden">
        <div className="slider-track flex w-max animate-scroll">
          {continuousSlides.map((src, index) => (
            <div key={index} className="mx-3">
              <img
                src={src}
                alt={`slide-${index}`}
                className="h-[180px] sm:h-[240px] lg:h-[307px] rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MainSec;
