import React from "react";
import Image from 'next/image'

type Props = {
  imgSrc: any,
}

const LoginImage = ({ imgSrc }:Props) => {
  return (
    <div className="hidden md:block w-[620px] lg:w-[520px] mt-[18px]">
      <Image
        alt="login"
        className=" inline-block w-[100%] md:flex"
        src={imgSrc}
      />
    </div>
  );
};

export default LoginImage;
