import React from "react";
import { FaArrowRight } from "react-icons/fa";


const IntegrationSection = () => {
  return (
    <section className="relative w-full overflow-hidden mt-26 font">
      
      {/* 🔵 BACKGROUND IMAGE (TOP LEFT ONLY) */}
      <div
        className="absolute top-0 -left-21 w-[700px] h-[500px] bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: "url('/123.png')",
        }}
      />

      {/* 🔵 MAIN WRAPPER */}
      <div className="relative max-w-[1440px] mx-auto text-start">
        
        {/* 🔵 2 COLUMN LAYOUT */}
        <div className="flex px-[171px] pt-[104px]">

          {/* ✅ LEFT SIDE (50%) */}
          <div className="w-1/2 flex flex-col gap-3 text-white ">

            <h2 className="text-[42px] font-bold leading-[50.4px] mt-10">
             Scalable Infrastructure, Seamless Integration
            </h2>

            <p className="text-[#A7ADBE] text-[18px] leading-[27px] font-normal">
              Discover what our clients say about their experiences and
              success working with us.
            </p>

            <button
              className=" flex w-fit items-center gap-[19px] p-4 rounded-full bg-gradient-to-r from-[#101636] to-[#0C1027] text-white text-[18px] font-medium"
            >
              Explore all Integrations
              <span><FaArrowRight /></span>
            </button>
          </div>

          {/* ⬜ RIGHT SIDE (50%) — EMPTY FOR NOW */}
          <div className="w-1/2">
            {/* future right-side content */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
