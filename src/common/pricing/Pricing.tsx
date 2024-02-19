import React, { useState } from "react";

const Pricing = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
  };
  
  return (
    <section className="container items-center justify-center text-center">
      <div className="heading">
        <h1 className="text-[50px] leading-[60px] font-[600]">
          Ready to get started with Tekie?
        </h1>
        <p className="text-[25px] leading-[35px] font-[400]">
          Choose the package that suits you
        </p>
      </div>
      <div className="pricing">
        <button onClick={handleClick}>{isToggled ? "ON" : "OFF"}</button>
      </div>
    </section>
  );
};

export default Pricing;
