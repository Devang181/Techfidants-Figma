import React from "react";
import Clientslider from "../components/Ui/Client-slider";

const ClientSuccess = () => {
  return (
    <div className="max-w-[1440px] mx-auto font mt-[144px] px-10 min-h-screen">
      
      {/* HERO IMAGE + TEXT */}
      <div
        className="relative h-[320px] bg-no-repeat bg-center flex flex-col justify-center items-center gap-4"
        style={{
          backgroundImage: "url('/123.png')",
          backgroundSize: "auto",
        }}
      >
        <h2 className="font-bold text-[42px] text-white leading-[50.4px] text-center">
          Client Success Stories
        </h2>

        <p className="font-medium text-[18px] text-[#A7ADBE] text-center max-w-[720px] mt-3">
          Discover why Arise excels in delivering innovative, client-focused web solutions that make a difference.
        </p>
      </div>

      {/* SLIDER SECTION */}
      <div className="mt-10">
        <Clientslider />
      </div>
    </div>
  );
};

export default ClientSuccess;
