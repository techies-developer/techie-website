import React, { useState } from "react";

const MonthlyPriceList = () => {
  const [activeTab, setActiveTab] = useState("Basic");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="pt-[50px] space-y-[25px] mx-auto">
      <div className="tab">
        <button
          className={
            activeTab === "Basic"
              ? "text-[30px] leading-[40px] font-semibold border-b-2 w-[300px] border-red-800"
              : "text-[30px] leading-[40px] font-semibold border-b-2 w-[300px] border-gray-400"
          }
          onClick={() => handleTabClick("Basic")}
        >
          Basic
        </button>
        <button
          className={
            activeTab === "Premium"
              ? "text-[30px] leading-[40px] font-semibold border-b-2 w-[300px] border-red-800"
              : "text-[30px] leading-[40px] font-semibold border-b-2 w-[300px] border-gray-400"
          }
          onClick={() => handleTabClick("Premium")}
        >
          Premium
        </button>
      </div>
      <div className="tab-content items-center justify-center">
        {activeTab === "Basic" && (
          <div className="">
            <h2>Basic Section</h2>
            <p>This is the Basic section content.</p>
          </div>
        )}
        {activeTab === "Premium" && (
          <div>
            <h2>Premium Section</h2>
            <p>This is the Premium section content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthlyPriceList;
