import React, { useState } from "react";
import MonthlyPriceList from "./MonthlyPriceList";

const Pricing = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <section className="items-center justify-center text-center">
      <div className="heading">
        <h1 className="text-[50px] leading-[60px] font-[600]">
          Ready to get started with Tekie?
        </h1>
        <p className="text-[25px] leading-[35px] font-[400]">
          Choose the package that suits you
        </p>
      </div>
      <div className="items-center justify-center text-center pt-[25px] w-[25%] mx-auto">
        <div className="pricing flex items-center justify-evenly">
          <span>Monthly</span>
          <button onClick={handleClick}>{isToggled ? "ON" : "OFF"}</button>
          <span>Yearly</span>
        </div>
      </div>
      {/* Pricelist Tab */}
      <div className="">
        <MonthlyPriceList />
      </div>
    </section>
  );
};

export default Pricing;
