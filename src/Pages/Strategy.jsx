import React from 'react';
import { GiTwirlyFlower } from "react-icons/gi";
import { PiPenNibFill, PiCodeSimpleFill, PiRocketLaunchFill } from "react-icons/pi";

const Strategy = () => {
  const stepsData = [
    { id: 1, title: "Discovery & Consultation", desc: "We start by understanding your goals and challenges. Through a quick audit of your current workflows, we identify where AI can create the biggest impact.", icon: GiTwirlyFlower },
    { id: 2, title: "Design & Prototyping", desc: "We translate insights into concepts and prototypes that balance technical feasibility with elegant UX.", icon: PiPenNibFill },
    { id: 3, title: "Development & Testing", desc: "Our team develops and tests AI solutions tailored to your needs, ensuring reliability and performance.", icon: PiCodeSimpleFill },
    { id: 4, title: "Launch & Support", desc: "We help you go live with confidence. After launch, we monitor performance and make improvements so your tools stay sharp, relevant, and effective over time.", icon: PiRocketLaunchFill },
  ];

  return (
    <section className="relative w-full font overflow-hidden mt-[59px]">
      {/* BG IMAGE */}
      <div className="absolute -top-5 -left-[42px] w-[881.62px] h-[320px] bg-no-repeat bg-contain pointer-events-none max-xl:w-[750px] max-lg:w-[650px] max-md:w-[650px] max-sm:w-[420px] max-xl:-left-40 max-lg:left-[41px] max-md:left-0 max-sm:-left-8"
        style={{ backgroundImage: "url('/section-head.png')" }} />

      <div className="max-w-[1440px] mx-auto">
        {/* FLEX CONTAINER */}
        <div className="flex max-lg:flex-col px-[171px] pt-[104px] max-xl:px-5 max-lg:gap-10 relative">

          {/* LEFT COLUMN WRAPPER */}
          <div className="w-1/2 max-lg:w-full flex flex-col">
            <div className="sticky top-[100px] self-start px-7 text-white max-lg:text-center max-lg:px-10">
              <h2 className="mb-3 text-[42px] font-bold leading-[50px] max-md:text-[32px]">
                Strategy & Approach
              </h2>
              <p className="text-[#A7ADBE] text-[18px] leading-[27px] max-md:text-[16px]">
                Follow a clear path from first spark to full deployment.
                We align goals, craft custom AI, and launch solutions that scale with your business—fast.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-1/2 max-lg:w-full pl-[95px] max-lg:px-10 flex justify-center">
            <div className="flex flex-col gap-4 w-full">
              {stepsData.map(({ id, title, desc, icon: Icon }) => (
                <div key={id} className="rounded-[16px] px-4 py-6 bg-gradient-to-b from-[#00041F00] to-[#00041F] border border-[#1F275F]">
                  {/* ICON + TITLE */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="p-2 rounded-[10px] bg-[#0C0D19] border border-[#0E122E] text-[#FFEB9A]">
                      <Icon className="w-[30px] h-[30px]" />
                    </div>
                    <h3 className="text-white text-[24px] font-semibold leading-[30px] max-md:text-[20px]">{title}</h3>
                  </div>
                  {/* DESCRIPTION */}
                  <p className="text-[#A7ADBE] text-[16px] font-medium leading-[130%]">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Strategy;
