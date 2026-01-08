import React from "react";
import Clientslider from "../components/Ui/Client-slider";

const ClientSuccess = () => {
  return (
    <div className="rmax-w-[1440px] mx-auto font mt-[144px] px-5 xl:px-10 ">

      {/* HERO SECTION */}
      <div
        className="relative h-[320px] sm:h-[400px] bg-no-repeat bg-center flex flex-col justify-center items-center gap-4"
        style={{
          backgroundImage: "url('/123.png')",
          backgroundSize: "auto", 
        }}
      >
        <h2 className="font-bold text-[32px] sm:text-[42px] text-white leading-[40px] sm:leading-[50.4px] text-center px-2 sm:px-0">
          Client Success Stories
        </h2>

        <p className="font-medium text-[16px] sm:text-[18px] text-[#A7ADBE] text-center max-w-[720px] mt-3 px-2 sm:px-0 max-md:mt-0">
          Discover what our clients say about their experiences and success working with us.
        </p>
      </div>

      {/* SLIDER */}
      <div className="-mt-9 sm:-mt-9 ">
        <Clientslider />
      </div>
    </div>
  );
};

export default ClientSuccess;
