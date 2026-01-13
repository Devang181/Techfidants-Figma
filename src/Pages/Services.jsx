import React, { forwardRef } from "react";
import ServiceSlider from "../components/Ui/Service-Slider.jsx";

const Services = forwardRef((props,ref) => {
  return (
    <section ref={ref} className=" mx-auto mt-[43px]  overflow-hidden">

      {/* HERO */}
      <div
        className="relative h-[320px] flex flex-col justify-center items-center gap-4 px-5 md:px-8 lg:px-0"
        style={{
          backgroundImage: "url('/section-head.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "818px auto",
        }}
      >
        <h2 className="text-[42px] font-bold text-white">Services</h2>

        <p className="text-[18px] text-[#A7ADBE] text-center max-w-[520px]">
          Discover why Arise excels in delivering innovative, <br />
          client-focused web design solutions.
        </p>
      </div>

      {/* SLIDER */}
      <div className="pt-16 text-start px-2">
        <ServiceSlider />
      </div>

    </section>
  );
});

export default Services;
