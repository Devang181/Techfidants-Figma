import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Clientslider = () => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* SWIPER */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Pagination]}
        pagination={{
          el: ".client-pagination",
          clickable: true,
        }}
        className="client-swiper w-full"
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide key={item}>
            {/* CARD */}
            <div
              className="relative bg-no-repeat bg-center bg-auto w-[980px] h-[416px] mx-auto
                        max-sm:w-[100%] max-sm:h-auto
                        max-lg:w-[100%] max-md:h-auto
                        px-[130px] max-sm:px-4 max-md:px-4 rounded-[24px]"
              style={{ backgroundImage: "url('/Stories.png')" }}
            >
              <div className="flex flex-col items-center">

                <div className="flex justify-center pt-[49px] max-sm:pt-8 max-md:pt-12">
                  <img
                    src="/comma.png"
                    alt="comma"
                    className="w-[62px] h-[60px] max-sm:w-[50px] max-sm:h-[48px] max-md:w-[55px] max-md:h-[54px]"
                  />
                </div>

                <p className="font-semibold text-[20px] text-[#A7ADBE] text-center pt-6 px-2.5
                              max-sm:text-[16px] max-sm:pt-4
                              max-md:text-[18px] max-md:pt-5">
                  Working with tech fidants was a game-changer for us. They delivered
                  a website that not only looks great but also drives significant
                  traffic and conversions. Highly recommended!
                </p>

                <div className="flex justify-center items-center mt-[26px] text-amber-400 gap-1
                                max-sm:mt-4 max-md:mt-5">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <div className="flex justify-center pt-[42px] text-white
                                max-sm:pt-4 max-md:pt-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/man.png"
                      alt=""
                      className="w-[52px] h-[52px] object-cover
                                 max-sm:w-[42px] max-sm:h-[42px]
                                 max-md:w-[48px] max-md:h-[48px]"
                    />
                    <div>
                      <h6 className="text-[18px] font-semibold
                                     max-sm:text-[14px]
                                     max-md:text-[16px]">
                        Michael Smith
                      </h6>
                      <span className="text-[18px] text-[#A7ADBE]
                                      max-sm:text-[14px]
                                      max-md:text-[16px]">
                        CEO – Zenith
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION OUTSIDE CARD */}
      <div className="client-pagination mt-10"></div>
    </div>
  );
};

export default Clientslider;
