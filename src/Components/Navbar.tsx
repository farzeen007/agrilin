import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import navBarImg from "../navbarImage.png";
import Image from 'next/image'

type Image = {
  src: string;
};

const Navbar = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const navigate = useRouter();
  const handleNav = (e) => {
    setShowNavMobile(!showNavMobile);
    console.log(e.view.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setShowNavMobile(false);
      }
      return () => {
        window.removeEventListener("resize");
      };
    });
  }, []);

  return (
    <div>
      <div className="md:hidden flex justify-between items-center my-6">
        <Image
          className="w-[100px] cursor-pointer ls:cursor-pointer"
          src={navBarImg}
          alt="home"
          onClick={() => {
            navigate.replace("/");
          }}
        />
        <div onClick={handleNav} className="z-10 cursor-pointer">
          {!showNavMobile ? (
            <AiOutlineMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </div>
      </div>
      <div
        className={
          showNavMobile
            ? " fixed w-[100%] h-full top-0 left-0 right-0 bottom-0 bg-white-light z-[8]"
            : "hidden md:flex justify-between text-center items-center mt-[20px] "
        }
      >
        {!showNavMobile ? (
          <Image alt="login" className="w-[100px] align-middle" src={navBarImg} />
        ) : (
          <div className="mt-8 ml-[20px] text-[15px] font-medium text-black-dark">
            M E N U
          </div>
        )}

        <div className=" md:hidden border-grey-mobile_dark md:border-primary_grey border-[0.5px] w-[90%] m-auto h-0 my-4"></div>

        <ul className="flex flex-col md:flex-row">
          <li className="p-2 m-3 text-black-darker text-md font-normal  lg:text-[14px]">
            <a href="#">How It Works</a>
          </li>
          <li className="p-2 m-3 text-black-darker text-md font-normal lg:text-[14px]">
            <a href="#">Why Agrilin?</a>
          </li>
          <li className="p-2 m-3 text-black-darker text-md font-normal lg:text-[14px]">
            <a href="#">Contact</a>
          </li>
          <button className="border-[1px] text-[15px] text-black-light_dark rounded-md px-[28px] py-[8px] lg:px-[10px] lg:py-[10px] lg:text-[14px] md:m-3 font-medium border-primary_grey mt-[210px] mx-5 mb-4 ">
            <a href="#">SIGN IN</a>
          </button>
          <button className="rounded-md text-[15px] px-[28px] lg:px-[10px] lg:py-[10px] lg:text-[14px]   py-[8px] md:m-3 md:mr-0 mx-5 bg-primary_green md:text-white-light text-white-light font-medium">
            <a href="#">REGISTER</a>
          </button>
        </ul>
      </div>

      <div className="border-grey-mobile_dark md:border-grey-mobile_dark border-[0.5px]  h-0 my-4"></div>
    </div>
  );
};

export default Navbar;
