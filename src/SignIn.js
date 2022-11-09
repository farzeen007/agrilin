import React from "react";
import LoginImage from "./LoginImage";
import SignInImage from "./SignInImage.png";

const SignIn = () => {
  return (
    <div className="w-[100%] flex mt-1  justify-between">
      <div className="flex-col mt-[10px] w-[100%] md:w-auto md:mt-[55px] ">
        <h3 className="text-black-dark mb-1 md:mb-[16px] text-[25px] md:text-[36px]">
          Sign In
        </h3>
        <div className="text-black-darker text-[13px]">
          to continue to Agri-Tech Platform
        </div>
        <button className="border-[1px] rounded-lg text-black-light border-color:primary_grey px-0 py-[10px] my-4 font-normal w-[100%] md:w-auto md:px-20">
          Don't have an account?{" "}
          <span className="text-green-light font-bold underline">
            Create Account
          </span>
        </button>
        <div className="md:mb-4 mb-1 flex items-center">
          <div className="border-[1px] w-[70px] md:w-[140px] border-color:rgba(231, 231, 231, 1) h-0"></div>
          <span className="text-center block mx-auto text-[12px] md:text-[14px] text-grey-dark">
            Or sign in with
          </span>
          <div className="border-[1px] w-[70px] md:w-[140px]  border-color:rgba(231, 231, 231, 1) h-0 "></div>
        </div>
        <form className="flex flex-col ">
          <label className="text-black-dark text-[12px] md:text-[14px]">
            Enter mobile number
          </label>
          <input
            type="text"
            className="border-2 border-color: rgb(0 0 0) my-3 md:my-4"
          ></input>
          <button className="bg-black-light_dark text-white text-[14px] md:text-[16px] p-3 mb-3 md:mt-2 md:mb-4 rounded-md">
            Request OTP
          </button>
        </form>
        <div>
          <span className="text-green-light font-normal text-[13px] md:text-[16px]">
            Having trouble?{" "}
          </span>
          <span className="text-black-light_dark text-[13px] md:text-[16px]">
            Call us on +91 9037766112
          </span>
        </div>
      </div>
      <LoginImage imgSrc={SignInImage} />
    </div>
  );
};

export default SignIn;
