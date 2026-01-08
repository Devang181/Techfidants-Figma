import React, { useState } from "react";
import Cards from "../components/Ui/Cards";

const tabs = ["Web", "Mobile", "AI", "HRMS", "CMS"];

const RecentProject = () => {
  const [activeTab, setActiveTab] = useState("Web");

  return (
    <div className="max-w-[1440px] mx-auto mt-[70px] font-sans px-5 md:px-8 lg:px-0">
      {/* HERO + TABS */}
      <div
        className="relative h-[248px]  bg-no-repeat bg-center flex flex-col justify-center gap-6 max-md:gap-4"
        style={{
          backgroundImage: "url('/project-head.png')",
          backgroundSize: "auto",
        }}
      >
        {/* TEXT */}
        <div className="text-center px-4">
          <h2 className="font-bold text-[42px] text-white leading-[50.4px] max-md:text-[32px]">
            Explore Our Recent Projects
          </h2>

          <p className="font-medium text-[18px] text-[#A7ADBE] mt-2 leading-[27px] max-md:text-[16px] max-md:mt-3">
            From startups to enterprise – we’ve built it all.
          </p>
        </div>

        {/* TABS */}
        <div className="mt-6 max-md:mt-4">
  <ul className="flex flex-wrap justify-center gap-2 px-2">
    {tabs.map((item) => (
      <li key={item}>
        <button
          onClick={() => setActiveTab(item)}
          className={`text-[16px] font-medium px-[23px] py-2 border rounded-[40px] transition  ${
            activeTab === item
              ? "bg-[#253872] border-[#253872] text-white"
              : "bg-transparent border-[#0E122E] text-white hover:bg-[#253872]"
          }`}
        >
          {item}
        </button>
      </li>
    ))}
  </ul>
</div>
      </div>

      {/* CARDS SECTION - STATIC DATA */}
      <div className=" max-sm:mt-12">
        <Cards />
      </div>
    </div>
  );
};

export default RecentProject;
