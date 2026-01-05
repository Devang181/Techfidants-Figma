import React from 'react'
import ServiceSlider from '../components/Ui/Service-Slider'

const Services = () => {
  return (
    <>
    <div className="max-w-[1440px] mx-auto mt-[163px] min-h-screen">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src="/section-head.png"
          alt="section-header-map"
          className="
            w-[818px]
            h-[320px]
            object-contain
            pointer-events-none
            select-none
          "
        />
      </div>

      
      <div className="flex flex-col items-center text-center -mt-[200px]">
        <h2 className="font-bold text-[42px] text-white leading-[50.4px]">
          Services
        </h2>

        <p className="font-medium text-[18px] text-[#A7ADBE] mt-2 w-[520px]">
          Discover why Arise excels in delivering innovative,
          <br />
          client-focused web design solutions.
        </p>
      </div>
      <div/>
    <div className='pt-30'>
        <ServiceSlider/>
    </div>
    </div>
    


    </>
  )
}

export default Services
