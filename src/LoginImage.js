import React from "react";

const LoginImage = ({ imgSrc }) => {
  return (
    <div className="hidden md:block w-[620px] lg:w-[520px]">
      <img
        alt="login"
        className="hidden inline-block w-[100%] md:flex"
        src={imgSrc}
      />
    </div>
  );
};

export default LoginImage;
