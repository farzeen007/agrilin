import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1000px] m-auto mb-6 text-[12px] md:text-[14px] mt-[75px]">
      <div className="border-[0.5px]  border-green-lighter h-0 mt-0 mb-2 md:mt-4 md:mb-6"  />
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
  );
};

export default Footer;
