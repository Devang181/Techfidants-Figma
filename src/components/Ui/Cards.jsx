import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "Clever — Saas Landing Page",
    description:
      "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
    image: "/project-1.png",
    badge: "Agency",
    tech: ["/React.png", "/vue.png", "/next.png"],
  },
  {
    id: 2,
    title: "BankDash — Finance Dashboard",
    description:
      "A powerful finance dashboard for tracking transactions and analytics.",
    image: "/project-2.png",
    badge: "Agency",
    tech: ["/React.png", "/vue.png", "/next.png"],
  },
  {
    id: 3,
    title: "Enterprise Network Solution",
    description:
      "Enterprise-grade network solution for secure business operations.",
    image: "/project-3.png",
    badge: "Enterprise",
    tech: ["/React.png", "/vue.png", "/next.png"],
  },
  {
    id: 4,
    title: "HRMS Management System",
    description:
      "Complete HRMS system with payroll, attendance, and reporting.",
    image: "/project-4.png",
    badge: "Agency",
    tech: ["/React.png", "/vue.png", "/next.png"],
  },
];

const Cards = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-2 max-lg:px-0">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0A0D1FCC]/80 border border-[#0E122E] rounded-2xl flex flex-col text-start max-md:w-[530px] max-sm:w-auto max-md:mx-auto h-full overflow-hidden"
          >
            {/* BACKGROUND IMAGE */}
            <div className="rounded-xl overflow-hidden mb-4">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-auto h-auto max-w-full"
                />
                </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-grow p-5 max-md:p-3">
              {/* TITLE + BADGE */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white text-[24px] max-md:text-[20px] font-bold leading-tight">
                  {project.title}
                </h3>

                <span className="text-[13px] px-3 py-1 rounded-full bg-white/10 text-[#A7ADBE] whitespace-nowrap">
                  {project.badge}
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[#A7ADBE] font-medium text-[18px] max-md:text-[16px] leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-6">
                {/* TECH ICONS */}
                <div className="flex gap-4">
                  {project.tech.map((t, index) => (
                    <img
                      key={index}
                      src={t}
                      alt={`tech-${index}`}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    />
                  ))}
                </div>

                {/* ARROW BUTTON */}
                <button className="rounded-full px-4 py-2 max-md:px-2 max-md:py-1 bg-[#0E122E] text-white flex items-center justify-center hover:bg-[#253872] transition">
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#0E122E] text-white text-[16px] sm:text-[18px] font-medium px-6 sm:px-8 py-3 sm:py-4 border border-[#0E122E] rounded-full hover:bg-[#253872] transition flex items-center gap-2">
          View All Works <FaArrowRightLong size={20} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
