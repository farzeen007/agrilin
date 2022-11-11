import React from "react";

type Props = {
  imgSrc: string,
}

const LoginImage = ({ imgSrc }:Props) => {
  return (
    <div className="hidden md:block w-[620px] lg:w-[520px] mt-[18px]">
      <img
        alt="login"
        className="hidden inline-block w-[100%] md:flex"
        src={imgSrc}
      />
    </div>
  );
};

export default LoginImage;
