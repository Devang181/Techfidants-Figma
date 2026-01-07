import React from 'react'
import ServiceSlider from '../components/Ui/Service-Slider'

const Services = () => {
  return (
    <div className="max-w-[1440px] mx-auto font mt-[43px] px-4 md:px-8 lg:px-0">
      
      {/* HERO IMAGE + TEXT */}
      <div
        className="relative h-[320px] bg-no-repeat bg-center flex flex-col justify-center items-center gap-4"
        style={{
          backgroundImage: "url('/section-head.png')",
          backgroundSize: "818px auto",
        }}
      >
        {/* TEXT OVER IMAGE */}
        <h2 className="font-bold text-[42px] text-white leading-[50.4px] text-center">
          Services
        </h2>

        <p className="font-medium text-[18px] text-[#A7ADBE] text-center w-full max-w-[520px]">
          Discover why Arise excels in delivering innovative, <br />
          client-focused web design solutions.
        </p>
      </div>

      {/* SLIDER */}
      <div className="pt-12 md:pt-16">
        <ServiceSlider />
      </div>

    </div>
  )
}

export default Services
