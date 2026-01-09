import React from "react";
import { FaArrowRight } from "react-icons/fa";

const IntegrationSection = () => {
  return (
    <section className="relative w-full font overflow-hidden mt-[66px]">

      {/* DECORATIVE BG IMAGE */}
      <div
        className="
          absolute -top-5 -left-[42px]
          w-[881.62px] h-[320px]
          bg-no-repeat bg-contain pointer-events-none
          max-xl:w-[750px]
          max-lg:w-[650px]
          max-md:w-[650px]
          max-sm:w-[420px]
          max-xl:-left-40
          max-lg:left-[41px]
          max-md:left-0
          max-sm:-left-8


          
          
        "
        style={{ backgroundImage: "url('/section-head.png')" }}
      />

      <div className="relative max-w-[1440px] mx-auto text-start">
        <div
          className="
            flex px-[171px] pt-[104px] h-150
            max-xl:px-5
            max-lg:flex-col
            max-lg:px-[20px]
            max-md:pt-[80px]
            max-lg:h-220
            max-sm:px-5 
            max-sm:pt-[60px]
            max-lg:gap-10
            max-md:gap-0
            max-md:h-180
            max-md:px-[5px]

          "
        >

          {/* LEFT SIDE */}
          <div
            className="
              w-1/2 flex  flex-col gap-3 text-white
              max-lg:w-full
              max-lg:items-center
              max-lg:text-center
              max-lg:px-20
              max-lg:justify-center
              max-md:px-5
              max-sm:px-0

            "
          >
            <h2 className="text-[42px] font-bold leading-[50.4px] pt-10 px-[3px] max-xl:pt-8 
            max-lg:pt-0 max-md:text-[32px] max-sm:text-[28px] max-md:leading-[40px]  max-sm:leading-[35px]">
              Scalable Infrastructure, Seamless Integration
            </h2>

            <p className="text-[#A7ADBE] text-[18px] leading-[27px]  max-md:text-[16px] max-sm:text-[15px] max-md:leading-[20px] ">
              Discover what our clients say about their experiences and success working with us.
            </p>

            <button
              className="
                flex w-fit items-center gap-[19px] p-4 rounded-full
                bg-gradient-to-r from-[#101636] to-[#0C1027]
                text-white text-[18px] font-medium max-md:text-[16px]
              "
            >
              Explore all Integrations
              <FaArrowRight />
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              w-1/2 pl-[76px]
              max-lg:w-full
              max-md:pl-10
              max-lg:pl-15
              max-lg:flex
              max-lg:item-center
              max-lg:justify-center
              
             

            "
          >
            {/* OUTER RING */}
            <div
              className="
                outer-ring p-[68.73px] rounded-full border-[2.7px] border-[#1F275F]
                mt-[28.34px] mr-[36.38px] relative z-0
                min-h-[438px] min-w-[432px]
                max-h-[438px] max-w-[432px]

                max-md:scale-[0.9]
                max-sm:scale-[0.75]
              "
            >
              <div className="absolute inset-0 z-1">
                <div className="bg-[#131839] w-[67px] h-[67px] rounded-full item i-b1 border border-[#1F275F]">
                  <img src="/angular.png" className="p-[17px]" />
                </div>
                <div className="bg-[#131839] w-[67px] h-[67px] rounded-full item i-b2 border border-[#1F275F]">
                  <img src="/veujs.png" className="p-[16px] -rotate-72" />
                </div>
                <div className="bg-[#131839] w-[67px] h-[67px] rounded-full item i-b3 border border-[#1F275F]">
                  <img src="/fllutter.png" className="p-[18px] rotate-208" />
                </div>
                <div className="bg-[#131839] w-[67px] h-[67px] rounded-full item i-b4 border border-[#1F275F]">
                  <img src="/wordpress.png" className="p-[17px] rotate-126" />
                </div>
                <div className="bg-[#131839] w-[67px] h-[67px] rounded-full item i-b5 border border-[#1F275F]">
                  <img src="/nodejs.png" className="p-[17px] rotate-65" />
                </div>
              </div>

              {/* INNER RING */}
              <div className="inner-ring rounded-full border-[1.85px] border-[#1F275F] pt-22.5 pb-26.25 pr-[94.33px] pl-25.25 relative z-0">
                <div className="absolute inset-0 z-1">
                  <div className="bg-[#131839] w-[70px] h-[70px] rounded-full item i-i1 border border-[#1F275F]">
                    <img src="/reactjs.png" className="p-[16px] rotate-123" />
                  </div>
                  <div className="bg-[#131839] w-[70px] h-[70px] rounded-full item i-i2 border border-[#1F275F]">
                    <img src="/shopify.png" className="p-[18px] rotate-228" />
                  </div>
                  <div className="bg-[#131839] w-[70px] h-[70px] rounded-full item i-i3 border border-[#1F275F]">
                    <img src="/dotnet.png" className="p-[17px] rotate-113" />
                  </div>
                  <div className="bg-[#131839] w-[70px] h-[70px] rounded-full item i-i4 border border-[#1F275F]">
                    <img src="/php.png" className="px-[14px] py-6 rotate-48" />
                  </div>
                </div>

                {/* CENTER CORE */}
                <div className="center-div flex items-center justify-center z-10">
                  <img src="/fi.png" className="h-24 w-26 rotate-72" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
