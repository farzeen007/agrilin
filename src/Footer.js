import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%]  p-0 ml-0 mt-24 lg:mt-10 md:mt-10  md:mb-[0px] bg-[rgb(255,255,255)] lg:text-[13px]  text-[12px] md:text-[14px] ">
      <div className="md:mx-[100px] lg:mx-[30px] md:mb-[20px] mx-0 mb-[10px]">
        <div className="border-[0.5px]  border-green-lighter h-0 mt-0 mb-2 md:m-5" />
        <div className="block md:flex md:justify-between">
          <div className="text-black-light_dark">
            ©2022 Agrilin,
            <span className="text-green-light">a Growcoms company.</span> All
            rights reserved.
          </div>
          <div className="text-grey-light">
            Various trademarks held by their respective owners.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
