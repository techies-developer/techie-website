import React, { useState } from "react";

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
      <div className="w-[15%] items-center justify-between mx-auto">
        <div className="pricing flex  items-center justify-between text-center">
          <p>Monthly</p>
          <button onClick={handleClick}>{isToggled ? "ON" : "OFF"}</button>
          <p>Yearly</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
