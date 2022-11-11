import React, { useState } from "react";
import CommomLayout from "../src/Layout/CommomLayout";
import LoginImage from "../src/Components/LoginImage";
import SignInImage from "../src/SignInImage.png";
import OtpInput from "react-otp-input";

const SignInOtp = () => {
  const [otp, setOtp] = useState();
  const handleChange = (otp) => {
    setOtp(otp);
    console.log(otp);
  };
  return (
    <CommomLayout>
      <div className="w-[100%] flex mt-1  justify-between">
        <div className="flex-col mt-[10px] w-[100%] md:w-auto md:mt-[55px] ">
          <h3 className="text-black-dark mb-1 md:mb-[16px] text-[25px] md:text-[36px]">
            Enter OTP
          </h3>
          <div className="text-black-darker text-[13px] mb-[15px]">
            OTP sent to your phone:{" "}
            <span className="text-green-light">+44 330 808 1871</span>
          </div>
          <OtpInput
            // value={otp}
            // onChange={handleChange}
            
            numInputs={4}
            className="md:m-auto"
            inputStyle={
              "md:text-[22px] text-[16px] border-color:rgb(231,231,231) text-black border-[1px] m-[5px] px-9 py-[3px] rounded lg:w-[100%]"
            }
          />
          {/* <button className="border-[1px] rounded-lg text-black-light border-color:primary_grey px-0 py-[10px] my-4 font-normal w-[100%] md:w-auto md:px-20">
            Don't have an account?{" "}
            <span className="text-green-light font-bold underline">
              Create Account
            </span>
          </button> */}
          {/* <div className="md:mb-4 mb-1 flex items-center">
            <div className="border-[1px] w-[70px] md:w-[140px] border-color:rgba(231, 231, 231, 1) h-0"></div>
            <span className="text-center block mx-auto text-[12px] md:text-[14px] text-grey-dark">
              Or sign in with
            </span>
            <div className="border-[1px] w-[70px] md:w-[140px]  border-color:rgba(231, 231, 231, 1) h-0 "></div>
          </div> */}
          <div className="text-right my-[10px]">
            Didn’t get the code? <span className="text-red-light">30s</span>
          </div>
          <form className="flex flex-col ">
            <button
              type="submit"
              className="bg-green-light_dark text-white-light text-[14px] md:text-[16px] p-3 mb-3 md:mt-2 md:mb-4 rounded-3xl"
            >
              Confirm OTP
            </button>
          </form>
          <div>
            Having trouble?{" "}
            <span className="text-green-light">Call us on +91 9037766112</span>
          </div>
        </div>
        {/* <LoginImage imgSrc={SignInImage} /> */}
      </div>
    </CommomLayout>
  );
};

export default SignInOtp;