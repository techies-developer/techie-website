import React, { useState } from "react";
import { heroBg } from "../../assets";
import HeroBg from "../../assets/HeroBg";
type tabsProps = "hosting" | "web-service" | "ui-ux";
const HeroSection = () => {
  const [tabs, setTabs] = useState<tabsProps>("hosting");
  const handleSwitch = (data: tabsProps) => {
    setTabs(data);
  };
  return (
    <div className="h-[calc(100vh - 5rem)] w-screen overflow-hidden px-[10rem] section-hidden py-5">
      <div className="flex flex-row">
        <div className="flex-1 flex py-[3rem] px-[2.5rem]">
          <div>
            <div className="flex flex-row mb-[2rem]">
              <div
                className={`px-4 border-b-[2px] hover:border-[#B00000] font-[600]   cursor-pointer  py-2 ${
                  tabs === "hosting"
                    ? `border-[#B00000] text-[#B00000]`
                    : `border-[#F1F1F1] text-[#D6D4D4]`
                }`}
                onClick={() => handleSwitch("hosting")}
              >
                Hosting
              </div>
              <div
                className={`px-4 border-b-[2px] hover:border-[#B00000] font-[600] cursor-pointer py-2 ${
                  tabs === "web-service"
                    ? `border-[#B00000] text-[#B00000]`
                    : `border-[#F1F1F1] text-[#D6D4D4]`
                }`}
                onClick={() => handleSwitch("web-service")}
              >
                Web Service
              </div>
              <div
                className={`px-4 border-b-[2px] hover:border-[#B00000] font-[600] cursor-pointer py-2 ${
                  tabs === "ui-ux"
                    ? `border-[#B00000] text-[#B00000]`
                    : `border-[#F1F1F1] text-[#D6D4D4]`
                }`}
                onClick={() => handleSwitch("ui-ux")}
              >
                UI-UX Design
              </div>
            </div>
            <div className="w-[80%] mb-[2rem]">
              <h1 className="text-[3rem] leading-[1.35] font-[700] uppercase mb-[4rem]">
                Managed IT For Small To Midsize Businesses
              </h1>
              <p className="w-[90%]">
                Preventing tech-induced headaches and data security threats
                isn’t your job—it’s ours.{" "}
                <span className="text-[#B00000] font-[500]">Read more..</span>
              </p>
            </div>
            <div className="bg-[#FFF]">
              <button className="bg-[#B00000] text-[#FFF]  drop-shadow-[0_50px_80px_rgba(144, 0, 0, 0.9)] border-[1px] border-[#B00000] px-4 mr-2 py-3 rounded-[5px]">
                Access Service
              </button>
              <button className="bg-[#FFF] border-[1px] border-[#000] rounded-[5px] px-4 py-3">
                Choose your plan
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex-1 h-[35rem] w-full">
          <img src={heroBg} alt="" className="h-full w-full img-p" />
          <div className="absolute top-0">
            <HeroBg />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
