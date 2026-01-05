import React from 'react'

const About = () => {
    return (
        <>
            <div className='mt-26  max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0'>
                <div className='flex flex-col justify-center font h-full gap-11'>
                    <div>
                        <h2 className='text-white font-bold text-[42px] text-center sm:text-center'>About Us</h2>
                    </div>
                    <div className='text-white flex flex-wrap justify-center gap-6'>
                        
                        <div className="bg-black/30 relative rounded-lg overflow-hidden max-w-[531px] w-full sm:w-auto">
                            <img
                                src="/ABOUT-INTRO.png"
                                alt="about-intro"
                                className='absolute h-full top-0 left-1/2 -translate-x-1/2 object-cover'
                            />
                            <div className="p-11.25 flex flex-col justify-center items-start text-start gap-6 relative z-20">
                                <h6 className='bg-[#253872] px-[15px] py-1 text-[13.2px] font-400 rounded-sm'>INTRO</h6>
                                <p className='text-[32px] max-md:text-[26px] max-sm:text-[22px]font-medium tracking-[-2px] leading-[40px]'>
                                    "We’re a passionate team of technologists, designers, and marketers providing scalable digital solutions."
                                </p>
                            </div>
                        </div>

                        <div className='text-white/105 flex flex-col gap-3 max-w-[255px] w-full sm:w-auto'>
                            <div className='backdrop-blur-[7px] bg-black/30 rounded-lg h-[140px] flex justify-center items-center'>
                                <div className='flex items-center gap-2'>
                                    <p className='font-medium text-[48px] tracking-[-4px]'>15+</p>
                                    <span className='bg-[#253872] uppercase tracking-[-0.28px] px-[15px] py-1 text-[12.8px] font-400 rounded-sm'>
                                        Live Projects
                                    </span>
                                </div>
                            </div>

                            <div className='backdrop-blur-[7px] bg-black/30 rounded-lg h-[140px] flex justify-center items-center'>
                                <div className='flex items-center gap-2'>
                                    <p className='font-medium text-[48px] tracking-[-4px] text-white'>360°</p>
                                    <span className='bg-[#253872] uppercase tracking-[-0.28px] px-3 py-1 text-[12.8px] font-400 rounded-sm text-white'>
                                        IT Services
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/30 relative rounded-[24px] overflow-hidden flex flex-col justify-center items-center max-w-[280px] w-full sm:w-[280px] h-[295px]">
                            <h6 className="font-medium text-[28px] text-center relative z-20 text-white px-6 leading-tight">
                                Happy Clients Globally
                                <span className="block font-normal text-[16px] mt-2">(counter based)</span>
                            </h6>
                            <img
                                src="/about-map.png"
                                alt="about-map"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2  object-contain opacity-80 z-10 pointer-events-none select-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
