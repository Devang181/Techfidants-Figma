import React from 'react'

const About = () => {
  return (
    <section className="mt-26 w-full font">
      <div className="max-w-[1440px] mx-auto px-20 max-xl:px-0  flex flex-col gap-11">

        {/* Heading */}
        <h2 className="text-white font-bold text-[42px] text-center">
          About Us
        </h2>

        {/* GRID */}
        <div className="grid max-md:grid-cols-1 grid-cols-4  max-lg:grid-cols-2 gap-6 px-[91px] max-xl:px-0 max-lg:px-25 max-md:px-5  text-start">

          {/* CARD 1 – INTRO (2 columns) */}
          <div className="md:col-span-2 relative rounded-[24px]  bg-black/30 overflow-hidden border border-[#FFFFFF]/5">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: "url('/ABOUT-INTRO.png')" }}
            ></div>

            {/* Overlay for readability */}
            <div className="absolute inset-0"></div>

            {/* Content */}
            <div className="relative z-10 p-[45px] flex flex-col gap-6">
              <span className="bg-[#253872] px-4 py-1 text-[13px] rounded-sm w-fit text-white">
                INTRO
              </span>
              <p className="text-white pr-5 max-lg:pr-0 text-[32px] max-md:text-[26px] max-sm:text-[22px] font-medium tracking-[-2px] leading-[40px] max-md:tracking-normal">
                "We’re a passionate team of technologists, designers, and marketers
                providing scalable  digital solutions."
              </p>
            </div>
          </div>

          {/* CARD 2 – STATS */}
          <div className="flex flex-col gap-4 h-full">
            {/* Top */}
            <div className="flex-1 bg-[#0e0f19] backdrop-blur-md rounded-[24px] flex items-center justify-start p-6 border border-[#FFFFFF]/5">
              <div className="flex items-center gap-3 text-white">
                <p className="text-[48px] font-medium tracking-[-4px]">15+</p>
                <span className="bg-[#253872] uppercase px-4 py-1 text-[12px] rounded-sm">
                  Live Projects
                </span>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex-1 bg-[#0e0f19] backdrop-blur-md rounded-[24px] flex items-center justify-start p-6 border border-[#FFFFFF]/5">
              <div className="flex items-center gap-3 text-white">
                <p className="text-[48px] font-medium tracking-[-4px]">360°</p>
                <span className="bg-[#253872] uppercase px-4 py-1 text-[12px] rounded-sm">
                  IT Services
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3 – MAP */}
          <div className="relative rounded-[24px] overflow-hidden bg-black/30 flex items-center justify-center border border-[#FFFFFF]/5">
            {/* Map Image */}
            <div
              className="absolute inset-0 bg-no-repeat bg-bottom bg-cover opacity-80"
              style={{ backgroundImage: "url('/about-map.png')" }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex max-md:py-25 justify-center items-center text-white text-start">
              <p className="text-[28px] font-medium">
                Happy Clients <br/>Globally
              
              <span className="text-[16px] font-normal inline-block ">
                (counter based)
              </span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About
