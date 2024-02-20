import React from "react";
import { BottomLeftObj, BottomRightObj, TopMiddleObject } from "../../assets";
import { FaWhatsapp } from "react-icons/fa6";

type ctaSection = {
  topInput?: string;
  middleInput?: string;
  bottomInput?: string;
};

export const CtaSection: React.FC<ctaSection> = ({
  topInput,
  middleInput,
  bottomInput,
}) => {
  return (
    <div className='pt-20'>
      <div className='flex flex-row w-[100%] justify-center items-center'>
        <TopMiddleObject />
      </div>
      <div className='flex flex-row items-center w-[100%] justify-center'>
        <BottomLeftObj />
        <div className='w-[80%] bg-[#F7FAFE]  py-[4rem] rounded-2xl'>
          <h4 className='font-[600] text-[30px] md:text-[45px] lg:text-[60px] flex justify-center'>
            {topInput}
          </h4>
          <h4 className='font-[600] text-[30px] md:text-[45px] lg:text-[60px] flex justify-center'>
            {middleInput}
          </h4>
          <h4 className='font-[600] text-[30px] md:text-[45px] lg:text-[60px] flex justify-center'>
            {bottomInput}
          </h4>
          <div className='flex justify-center mt-3'>
            <button className='flex gap-2 text-white bg-[#B00000] items-center py-[0.5rem] px-[0.5rem] rounded-xl duration-500 hover:bg-[#b00000cd]'>
              <FaWhatsapp className='w-[2rem] h-[2rem]' />{" "}
              <span>Get in touch with us</span>
            </button>
          </div>
        </div>
        <BottomRightObj />
      </div>
    </div>
  );
};
