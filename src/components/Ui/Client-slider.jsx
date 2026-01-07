import React from 'react'
import { FaStar } from "react-icons/fa";



const Clientslider = () => {
  return (
    <div>
      
      {/* HERO IMAGE */}
      <div
        className="relative bg-no-repeat bg-center bg-auto w-[980px] h-[416px]  mx-auto"
        style={{
          backgroundImage: "url('/Stories.png')",
        }}
      >

        {/* CONTENT OVER IMAGE */}
        <div className='px-[130px]'>
        <div className="flex justify-center pt-[49px]">
          <img src="/comma.png" alt="commas" className="w-[62px] h-[60px] " />
        </div>
        <div className='font-semibold text-[20px] text-[#A7ADBE] text-center pt-6 px-2.5'>
            <p>Working with tech fidants was a game-changer for us. They delivered a website that not only looks great but also drives significant traffic and conversions. Highly recommended! </p>
        </div>
        <div className='flex justify-center items-center mt-5 text-amber-500 gap-1'>
            <FaStar className='h-[20px] w-[20px]' /><FaStar className='h-[20px] w-[20px]' /><FaStar className='h-[20px] w-[20px]' /><FaStar className='h-[20px] w-[20px]' /><FaStar className='h-[20px] w-[20px]' />

        </div>
        <div className='flex justify-center pt-[42px] text-white'>
            <div className='flex items-center gap-3'>
                <img src="/man.png" alt="" className='w-[52px] h-[52px] rounded-full object-cover'/>
            
            <div className='text-start'>
                <h6 className='text-[18px] font-semibold '>Michael Smith</h6>
                <span className='text-[18px] font-normal text-[#A7ADBE]'>CEO - Zenith</span>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Clientslider
