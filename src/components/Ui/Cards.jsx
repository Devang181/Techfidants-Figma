import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const Cards = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-white mt-10">
        No projects available in this category.
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-2 max-lg:px-0">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0A0D1FCC]/80 border border-[#0E122E] rounded-2xl flex flex-col text-start max-md:w-[530px] max-sm:w-auto max-md:mx-auto h-full overflow-hidden"
          >
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-auto h-auto max-w-full"
              />
            </div>

            <div className="flex flex-col flex-grow p-5 max-md:p-3">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white text-[24px] max-md:text-[20px] font-bold leading-tight">
                  {project.title}
                </h3>
                <span className="text-[13px] px-3 py-1 rounded-full bg-white/10 text-[#A7ADBE] whitespace-nowrap">
                  {project.badge}
                </span>
              </div>

              <p className="text-[#A7ADBE] font-medium text-[18px] max-md:text-[16px] leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex justify-between items-center mt-6">
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

                <button className="rounded-full px-4 py-2 max-md:px-2 max-md:py-1 bg-[#0E122E] text-white flex items-center justify-center hover:bg-[#253872] transition">
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-[#0E122E] text-white text-[16px] sm:text-[18px] font-medium px-6 sm:px-8 py-3 sm:py-4 border border-[#0E122E] rounded-full hover:bg-[#253872] transition flex items-center gap-2">
          View All Works <FaArrowRightLong size={20} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
