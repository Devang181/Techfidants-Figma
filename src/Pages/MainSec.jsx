import React from 'react';
import '../CSS/slider.css';

const MainSec = () => {
    const slides = [
        '/1sec-1slide.jpg',
        '/1sec-2slide.jpg',
        '/1sec-3slide.jpg',
        '/1sec-4slide.jpg',
    ];

    const continuousSlides = [...slides, ...slides];

    return (
        <div className='flex flex-col items-center bg-[#0B0F1A] px-4 sm:px-6 lg:px-0'>

            {/* Header Section */}
            <div className='max-w-[892px] mt-[80px] sm:mt-30 lg:mt-[144px] text-center'>
                <div className='bg-white/10 m-1.5 py-2 px-4 rounded-full inline-flex text-[#A7ADBE] leading-[1.5rem] sm:leading-[1.7rem]'>
                    <p className='text-[14px] sm:text-[15px] font-medium'>
                        We Design websites that matter, user’s can’t resist
                    </p>
                </div>

                <div className='mt-2 mb-4 flex flex-col w-full'>
                    <h1 className='text-white font-bold text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[34px] sm:leading-[48px] md:leading-[62px] lg:leading-[75px]'>
                        Empowering Businesses with
                        <span className='text-[#FFEB9A] block'>Smart IT Solutions</span>
                    </h1>
                    <p className='mt-4 text-[#A7ADBE] font-medium text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[32px]'>
                        Web. Mobile. Marketing. AI. We do it all.
                    </p>
                </div>

                <div className='mt-2 text-white'>
                    <button className='bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-3 px-5 sm:py-3.5 sm:px-6 rounded-full text-[16px] sm:text-[18px] font-medium hover:scale-105 transition-transform duration-300'>
                        Get Started
                    </button>
                </div>
            </div>

            {/* Continuous Slider */}
            <div className='mt-6 sm:mt-10 w-full overflow-hidden'>
                <div className='slider-track flex w-max animate-scroll'>
                    {continuousSlides.map((src, index) => (
                        <div key={index} className="slide-wrapper">
                            <img
                                src={src}
                                alt={`slide-${index}`}
                                className={`h-[180px] sm:h-[240px] lg:h-[307px] object-cover rounded-[12px] ${index % 2 === 0 ? 'gradient-border' : 'border-4 sm:border-6 border-[#0f1529]'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSec;
