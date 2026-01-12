import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaShareAlt,
  FaHeartbeat,
  FaUsers,
  FaRobot,
  FaCode,
} from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const services = [
  { id: 1, title: "Web Development", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: HiOutlineComputerDesktop },
  { id: 2, title: "Mobile App Development", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: FaMobileAlt },
  { id: 3, title: "UI/UX", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: FaPaintBrush },
  { id: 4, title: "Dev ops", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: FaCode },
  { id: 5, title: "SEO & Digital Marketing", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: FaSearch },
  { id: 6, title: "Social Media Management & Analytics", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: FaShareAlt },
  { id: 7, title: "Healthcare Platforms", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: FaHeartbeat },
  { id: 8, title: "CMS / HRMS / Payroll Systems", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: FaUsers },
  { id: 9, title: "AI-based Solutions & Automation", desc: "Tailoring solutions to meet your unique business needs and exceed expectations.", icon: FaRobot },
];

const ServiceSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView="auto"
      spaceBetween={24}
      pagination={{ type: "progressbar" }}
      className="service-swiper"
    >
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <SwiperSlide key={service.id} className="!w-[407px] max-md:!w-[390px] max-sm:!w-[349px]">
            <div className="relative bg-[#0C0D19] text-white rounded-xl p-6 pt-9 max-md:p-5 max-md:pt-9 max-sm:p-5 max-sm:pt-9 ">

              {/* ICON */}
              <div className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-lg bg-[#253872]">
                <Icon className="text-2xl" />
              </div>

              <h3 className="text-[20px] font-semibold mb-2 max-md:text-[18px] max-sm:text-[16px]">
                {service.title}
              </h3>

              <p className="text-[16px] text-[#A7ADBE] mb-3 max-md:text[14px] max-sm:text-[13px]">
                {service.desc}
              </p>

              <button className="text-[16px] font-semibold hover:underline">
                Explore More →
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
