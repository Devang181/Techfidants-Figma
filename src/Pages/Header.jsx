import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false); // Services dropdown
  const [mobileMenu, setMobileMenu] = useState(false); // Mobile menu
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-[#0A0D1F]/90 font border-b border-[#232D6B] sticky w-full max-w-[1440px] z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-20 py-2 md:py-3 text-white">

        {/* Logo */}
        <img src="/Logo.png" alt="Logo" className="h-6 sm:h-7 md:h-8 lg:h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-3 lg:gap-5 text-[#A7ADBE] font-medium">
          <li className="py-2 px-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer hover:text-white">
            About Us
          </li>

          {/* Services Dropdown */}
          <li ref={dropdownRef} className="relative py-2 px-3 cursor-pointer">
            <div
              onClick={() => setOpen(prev => !prev)}
              className="inline-flex items-center gap-1 sm:gap-2 cursor-pointer hover:text-white select-none"
            >
              <span className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]">Services</span>
              {open ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
            </div>

            {open && (
              <ul className="absolute p-4 left-0 top-full mt-1 w-[326px] bg-[#0A0E22] rounded-lg shadow-lg border border-[#232D6B] overflow-auto z-50">
                
                  <li className="py-2.5  hover:bg-[#11225c] flex gap-3 items-start cursor-pointer">
                    <img src="services_icon.png" alt="" className="" />
                    <div className="flex flex-col text-start">
                      <h6 className="text-[16px] font-semibold text-white">
                        Web Development
                      </h6>
                      <p className="text-[14px] text-[#A7ADBE]">
                        Tailoring solutions to meet your unique business needs
                      </p>
                    </div>
                  </li>
                  <li className="py-2.5  hover:bg-[#11225c] flex gap-3 items-start cursor-pointer">
                    <img src="services_icon.png" alt="" className="" />
                    <div className="flex flex-col text-start">
                      <h6 className="text-[16px] font-semibold text-white">
                        Web Development
                      </h6>
                      <p className="text-[14px] text-[#A7ADBE]">
                        Tailoring solutions to meet your unique business needs
                      </p>
                    </div>
                  </li>
                  <li className="py-2.5  hover:bg-[#11225c] flex gap-3 items-start cursor-pointer">
                    <img src="services_icon.png" alt="" className="" />
                    <div className="flex flex-col text-start">
                      <h6 className="text-[16px] font-semibold text-white">
                        Web Development
                      </h6>
                      <p className="text-[14px] text-[#A7ADBE]">
                        Tailoring solutions to meet your unique business needs
                      </p>
                    </div>
                  </li>
              </ul>
            )}
          </li>

          <li className="py-2 px-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer hover:text-white">Tech Stacks</li>
          <li className="py-2 px-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer hover:text-white">Projects</li>
          <li className="py-2 px-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer hover:text-white">Testimonials</li>
          <li className="py-2 px-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer hover:text-white">Strategy</li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-2 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-4 lg:py-3 lg:px-5 rounded-full text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium hover:opacity-90 transition">
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(prev => !prev)}>
            {mobileMenu ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#0A0D1F]/95 border-t border-[#232D6B]">
          <ul className="flex flex-col text-[#A7ADBE] font-medium">
            <li className="py-2 px-3 text-[13px] cursor-pointer hover:text-white">About Us</li>

            {/* Services Dropdown Mobile */}
            <li ref={dropdownRef} className="py-2 px-3 cursor-pointer">
              <div
                onClick={() => setOpen(prev => !prev)}
                className="inline-flex items-center gap-1 justify-start hover:text-white select-none"
              >
                <span className="text-[13px]">Services</span>
                {open ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
              </div>

              {open && (
                <ul className="mt-1 flex flex-col bg-[#0A0E22] rounded-lg border border-[#232D6B]">
                  {[1, 2, 3].map((i) => (
                    <li className="px-3 py-2 hover:bg-[#11225c] flex gap-2 cursor-pointer items-start">
                      <img src="services_icon.png" alt="" className="h-4 w-4 mt-1" />
                      <div className="flex flex-col text-start">
                        <h6 className="text-[12px] font-semibold text-white">Web Development</h6>
                        <p className="text-[11px] text-[#A7ADBE]">
                          Tailoring solutions to meet your unique business needs
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="py-2 px-3 text-[13px] cursor-pointer hover:text-white">Tech Stacks</li>
            <li className="py-2 px-3 text-[13px] cursor-pointer hover:text-white">Projects</li>
            <li className="py-2 px-3 text-[13px] cursor-pointer hover:text-white">Testimonials</li>
            <li className="py-2 px-3 text-[13px] cursor-pointer hover:text-white">Strategy</li>

            <li className="py-2 px-3">
              <button className="w-full text-white bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-2 rounded-full  text-[18px] font-medium hover:opacity-90 transition">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
