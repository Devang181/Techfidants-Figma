import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = ({ refs }) => { // App.js se refs pass karenge
  const [mobileMenu, setMobileMenu] = useState(false); 
  const [showHeader, setShowHeader] = useState(true); 
  const lastScrollY = useRef(0);

  const menuItems = [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Tech Stacks", id: "techstacks" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Strategy", id: "strategy" },
  ];

  // Scroll to section
  const scrollToSection = (id) => {
    const sectionRef = refs[id];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setMobileMenu(false); // Close mobile menu
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`bg-[#0A0D1F]/90 border-b border-[#232D6B] sticky top-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-20 py-2 md:py-3 text-white">
        
        {/* Logo */}
        <img src="/Logo.png" alt="Logo" className="h-6 sm:h-7 md:h-8 lg:h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-3  text-[#A7ADBE] font-medium">
          {menuItems.map(item => (
            <li
              key={item.id}
              className="py-2 px-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer hover:text-white transition duration-300"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button 
          className="hidden md:block bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-2 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-4 lg:py-3 lg:px-5 rounded-full text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium hover:opacity-80 cursor-pointer transition"
          onClick={() => scrollToSection("contact")}
        >
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
            {menuItems.map(item => (
              <li
                key={item.id}
                className="py-2 px-3 text-[13px] cursor-pointer hover:text-white"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
            <li className="py-2 px-3">
              <button 
                className="w-full text-white bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-2 rounded-full text-[18px] font-medium hover:opacity-90 transition"
                onClick={() => scrollToSection("contact")}
              >
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
