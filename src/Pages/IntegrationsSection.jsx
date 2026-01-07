import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const IntegrationsSection = () => {
  return (
    <section className="relative max-w-[1440px] mx-autooverflow-hidden px-[171px] font  mt-[66px]">
      {/* Top-left Background Image */}
      <div
        className="absolute top- left-0 w-[900px] h-[350px] bg-no-repeat bg-contain pointer-events-none select-none"
        style={{ backgroundImage: "url('/123.png')" }}
      ></div>

      {/* Main Content over Image */}
      <div className="relative z-10 top-[124px] flex flex-col md:flex-row items-center gap-20">
        {/* Left Text Content */}
        <div className="w-1/2 text-white text-start">
          <h2 className="text-[42px] md:text-5xl font-bold  leading-[50.4px] pt-10">
            Scalable Infrastructure,  Seamless Integration
          </h2>
          <p className="text-[#A7ADBE] pt-3 text-[18px] font-medium leading-[27px]">
            Discover what our clients say about their experiences and success working with us.  
          </p>
          <button className=" bg-gradient-to-r from-[#101636] to-[#0C1027] hover:bg-[#1f2e62] text-white text-[18px] font-medium  mt-3 p-4 rounded-[100px] flex items-center gap-4 transition">
            Explore all Integrations <FaArrowRightLong />
          </button>
        </div>

        {/* Right placeholder (for future orbit / animation) */}
        <div className="w-1/2 relative flex justify-center items-center">
          {/* Right orbit / image / animation can go here */}
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
