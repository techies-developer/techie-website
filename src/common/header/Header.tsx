import React from "react";
import Logo from "../../assets/Logo";

const Header = () => {
  return (
    <div className="w-screen h-[5rem]  px-[3rem] overflow-hidden">
      <div className="h-full w-full flex flex-row items-center justify-between transition-all duration-1000 ease-in-out">
        <div className="h-full w-[10rem] flex items-center justify-center py-4 overflow-hidden">
          <Logo />
        </div>
        <a href="/" className="font-[500] text-[16px]">
          <div className="text-[16px] font-[500] hover:border-b-2 border-[#900000] py-2 transition-all duration-150 ease-in-out">
            Our Services
          </div>
        </a>
        <div className="flex flex-row">
          <a href="/" className="font-[500] text-[16px]">
            <div className="px-3 text-[16px] font-[500] hover:border-b-2 border-[#900000] py-2 transition-all duration-150 ease-in-out">
              About
            </div>
          </a>
          <a href="/">
            <div className="px-3 text-[16px] font-[500] hover:border-b-2 border-[#900000] py-2 transition-all duration-150 ease-in-out">
              Solution
            </div>
          </a>
          <a href="/">
            <div className="px-3 text-[16px] font-[500] hover:border-b-2 border-[#900000] py-2 transition-all duration-150 ease-in-out">
              Products
            </div>
          </a>
        </div>
        <div className="flex flex-row">
          <div className="px-4">
            <p className="uppercase text-[16px] font-[700]">Contact</p>
          </div>
          <div className="px-4 border-l-2">
            <p className="text-[16px] font-[700]">+2349065432718</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
