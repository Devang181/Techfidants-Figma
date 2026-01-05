import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaShareAlt,
  FaHeartbeat,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: HiOutlineComputerDesktop ,
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: FaMobileAlt,
  },
  {
    id: 3,
    title: "UI/UX",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: FaPaintBrush,
  },
  {
    id: 4,
    title: "DevOps",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: FaCode,
  },
  {
    id: 5,
    title: "SEO & Digital Marketing",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: FaSearch,
  },
  {
    id: 6,
    title: "Social Media Management",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: FaShareAlt,
  },
  {
    id: 7,
    title: "Healthcare Platforms",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: FaHeartbeat,
  },
  {
    id: 8,
    title: "CMS / HRMS / Payroll",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: FaUsers,
  },
  {
    id: 9,
    title: "AI Solutions & Automation",
    desc: "Tailoring solutions to meet your unique business needs.",
    icon: FaRobot,
  },
];

const ServiceSlider = () => {
  return (
    <div className="w-full overflow-x-auto font">
      <div className="flex gap-6 px-4 py-6 min-w-max">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="relative w-[407px] bg-[#0C0D19] text-white rounded-xl p-6 pt-9 transition text-start"
            >
              <div className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-lg bg-[#253872] mb-4">
                <Icon className="text-2xl" />
              </div>

              <h3 className="text-[20px] font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-[16px] text-[#A7ADBE] mb-2 font-normal">
                {service.desc}
              </p>

              <button className="text-[16px] hover:underline font-semibold">
                Explore More → 
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSlider;
