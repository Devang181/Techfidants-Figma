import React from 'react'
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className='max-w-[1440px] mx-auto min-h-screen font'>

      {/* IMAGE CARD */}
      <div className='px-[130px] mt-40 flex justify-center max-xl:px-5 max-lg:px-5 max-md:px-5 max-sm:px-4 max-sm:mt-20'>
        <div
          className="
            relative rounded-[24px] bg-no-repeat bg-center bg-cover
            w-full max-w-[1180px] min-h-[699px]
            max-md:min-h-auto
          "
          style={{ backgroundImage: "url('/contact.png')" }}
        >

          {/* CONTENT WRAPPER */}
          <div className="
            relative z-10 px-[52px] py-[41px] w-full h-full
            max-lg:px-6 max-lg:py-6
            max-sm:px-0 max-sm:py-6
          ">

            {/* MAIN LAYOUT */}
            <div className="
              flex h-full gap-[95px]
              max-md:flex-col max-lg:gap-10
              max-sm:gap-10
            ">

              {/* LEFT SIDE */}
              <div className="w-1/2 flex flex-col justify-between max-md:w-full">
                <div className='text-start mt-10 text-white max-md:mt-0'>
                  <h3 className="text-[42px] font-bold leading-[50.4px] max-sm:text-[32px] max-md:text-center">
                    Contact Us
                  </h3>

                  <p className="mt-2 text-[#6D7792] text-[18px]  leading-[27px] font-medium max-sm:text-[16px] max-md:mt-5 max-md:text-[20px]">
                    We’re a passionate team of technologists, designers, and marketers providing scalable digital solutions.
                  </p>

                  <button className="
                    bg-gradient-to-r from-[#101636] to-[#0C1027]
                    text-white p-4 rounded-full w-max mt-6
                    text-[18px] font-medium
                     max-sm:text-center
                     max-sm:px-10
                  ">
                    Get in Touch
                    <FaArrowRight className="ml-[19px] h-5 w-5 inline-block" />
                  </button>
                </div>

                {/* CONTACT INFO */}
                <div className="space-y-[14px] text-[#A7ADBE] mt-10">
                  <div className="flex items-center gap-6.5">
                    <div className="p-3 bg-[#0E122E] rounded-full flex items-center justify-center">
                      <HiOutlineMail className="text-white text-2xl" />
                    </div>
                    <span className="text-[18px] max-sm:text-[16px]">
                      techfidants@gmail.com
                    </span>
                  </div>

                  <div className="flex items-center gap-6.5">
                    <div className="p-3 bg-[#0E122E] rounded-full flex items-center justify-center">
                      <IoCall className="text-white text-2xl" />
                    </div>
                    <span className="text-[18px] max-sm:text-[16px]">
                      +91 7802504444
                    </span>
                  </div>

                  <div className="flex items-center gap-6.5">
                    <div className="p-3 bg-[#0E122E] rounded-full flex items-center justify-center">
                      <HiOutlineLocationMarker className="text-white text-2xl" />
                    </div>
                    <span className="text-[18px] max-sm:text-[16px]">
                      Gurugram, Haryana
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div
                className="
                  w-1/2 rounded-[16px] p-11.25
                  max-md:w-full max-lg:p-8
                  max-sm:p-6
                "
                style={{
                  backgroundImage: "url('/fet-in-touch.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h3 className="text-[32px] text-white mb-5.5 max-sm:text-[26px]">
                  Get in Touch
                </h3>

                <form className="flex flex-col gap-5.5">

                  {/* First / Last */}
                  <div className="flex gap-7.5 max-sm:flex-col">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-1/2 max-sm:w-full bg-white/5 rounded-[20px] p-5 text-white outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-1/2 max-sm:w-full bg-white/5 rounded-[20px] p-5 text-white outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-white/5 rounded-[20px] p-5 text-white outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Service of Interest"
                    className="bg-white/5 rounded-[20px] p-5 text-white outline-none"
                  />

                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="bg-white/5 rounded-[20px] p-5 text-white resize-none outline-none"
                  />

                  <button
                    type="submit"
                    className="
                      bg-gradient-to-r from-[#4C75FF] to-[#1A4FFF]
                      rounded-full py-3.5 text-white text-[16px]
                      max-sm:w-full
                    "
                  >
                    Let’s Build Together
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
