import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1440px] mx-auto font'>
      <div className='mt-[89px] px-[33px] max-xl:px-5 max-lg:px-5 max-md:px-5 max-sm:px-4'>
        <div className='bg-[#0C0D19] rounded-tr-[55px] rounded-tl-[55px] px-[90px] pt-[41px] pb-7.5 max-xl:px-6 max-lg:px-6 max-md:px-6 max-sm:px-6'>

          {/* TOP SECTION - Flex layout */}
          <div className="flex flex-wrap justify-between text-start gap-y-10 max-md:gap-y-4">

            {/* LEFT - LOGO & SUBSCRIBE */}
            <div className='flex-shrink-0 '>
              <div
                style={{ backgroundImage: 'url(/Logo.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '115px', height: '48px' }}
              />
              <p className='mt-4 text-[#A7ADBE] text-[14.6px] text-start font-normal max-sm:text-[13px] max-sm:mt-3'>
                Your AI-Powered Workflow.
              </p>

              {/* Input + Button */}
              <div className='mt-4 flex  gap-3 max-sm:flex-col max-sm:gap-3'>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className='bg-white/10 flex-grow px-5 py-4.5 text-[20px] text-white outline-none placeholder:text-white rounded-full max-sm:text-sm max-sm:px-4 max-sm:py-3 w-auto min-w-0'
                  style={{ minWidth: '0' }}
                />
                <button className='bg-[#0E122E] my-1 text-start text-white px-8 py-4 rounded-full text-[18px] font-semibold whitespace-nowrap max-sm:text-base max-sm:w-full max-sm:px-4 max-sm:py-3 w-auto min-w-0'>
                  Subscribe
                </button>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className='flex-shrink-0 w-[150px] max-md:w-full max-md:mt-6'>
              <h4 className='text-white text-[16px] font-medium mb-4 max-sm:text-[15px]'>
                Quick Links
              </h4>
              <ul className='space-y-4 text-[#A7ADBE] text-[14px] font-normal max-sm:text-sm'>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* OFFICE */}
            <div className='flex-shrink-0 max-w-[230px] w-full max-md:max-w-full max-md:mt-6'>
              <h4 className='text-white text-[16px] font-medium mb-4.5 max-sm:text-[15px]'>
                Our Office
              </h4>
              <p className='text-[#A7ADBE] text-[14px] leading-[24px] max-sm:text-sm max-sm:leading-6'>
                88 Market Street, San Francisco,
                CA 94103 United States
              </p>

              <h4 className='text-white text-[16px] font-medium mt-[31px] mb-4.5 max-sm:text-[15px] max-md:mt-5'>
                Our Phone
              </h4>
              <p className='text-[#A7ADBE] text-[14px] max-sm:text-sm'>
                +117 2345 6948
              </p>
            </div>

            {/* SOCIAL */}
            <div className='flex-shrink-0 w-[150px] max-md:w-full max-md:mt-6'>
              <h4 className='text-white text-[16px] font-medium mb-5 max-sm:text-[15px]'>
                Get in touch
              </h4>

              <div className='flex gap-3 max-sm:justify-start max-sm:gap-4'>
                <div className='w-7 h-7 rounded-full bg-[#0E122E] flex items-center justify-center text-white'>
                  <FaTwitter />
                </div>
                <div className='w-7 h-7 rounded-full bg-gradient-to-r from-[#4C75FF] to-[#1A4FFF] flex items-center justify-center text-white'>
                  <FaFacebookF />
                </div>
                <div className='w-7 h-7 rounded-full bg-[#0E122E] flex items-center justify-center text-white'>
                  <FaInstagram />
                </div>
                <div className='w-7 h-7 rounded-full bg-[#0E122E] flex items-center justify-center text-white'>
                  <FaGithub />
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM SECTION */}
          <div className='py-[15px] border-t border-white/10 mt-20'>
            <div className='flex justify-between items-center font-normal text-[#A7ADBE] text-[14.6px] flex-wrap gap-4 max-lg:gap-2 max-sm:flex-col '>
              <p>© 2025 techfidants. All Rights Reserved.</p>

              <div className='flex gap-8  max-sm:flex-wrap max-sm:justify-center max-lg:gap-4'>
                <span className='text-[#A7ADBE] text-[16px] font-normal max-sm:text-sm'>Privacy Policy</span>
                <span className='text-[#A7ADBE] text-[16px] font-normal max-sm:text-sm'>Terms & Condition</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
