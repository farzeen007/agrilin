import React, { useState } from "react";
import LoginImage from "./LoginImage";
import SignInImage from "./SignInImage.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommomLayout from "./Layout/CommomLayout";
import { useNavigate } from "react-router-dom";

// const schema = yup.object({
//   phone: yup.string().required(),
// });
// .required();

const SignIn = () => {
  const [phone, setPhone] = useState("");
  const locate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { phone: "" } });

  const onSubmit = (data) => {
    console.log(data);
    locate("signin-otp");
  };
  return (
    <CommomLayout>
      <div className="w-[100%] flex mt-1  justify-between ">
        <div className="flex-col mt-[10px] w-[100%] md:w-auto md:mt-[55px] ">
          <h3 className="text-black-dark mb-1 md:mb-[16px] text-[25px] md:text-[36px] lg:text-[34px]">
            Sign In
          </h3>
          <div className="text-black-darker text-[13px]">
            to continue to Agri-Tech Platform
          </div>
          <button className="border-[1px] rounded-lg text-black-light border-color:primary_grey px-0 py-[13px] lg:text-[13px] lg:w-[100%] lg:px-[10px] my-4 font-normal w-[100%] md:w-[100%] md:px-8">
            Don't have an account?{" "}
            <span className="text-green-light font-bold underline">
              Create Account
            </span>
          </button>
          <div className="md:mb-4 mb-1 flex items-center">
            <div className="lg:w-[50px] border-[1px] w-[70px] md:w-[120px] border-color:rgba(231, 231, 231, 1) h-0"></div>
            <span className="text-center block  lg:text-[13px] text-[14px] mx-[15px] lg:mx-auto md:text-[14px] text-grey-dark">
              Or sign in with
            </span>
            <div className="lg:w-[50px] border-[1px] w-[70px] md:w-[120px]  border-color:rgba(231, 231, 231, 1) h-0 "></div>
          </div>
          <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
            <label className="text-[12px] md:text-[14px] text-black-dark mb-[8px]">
              Enter Mobile Number
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...register("phone")}
                  {...field}
                  inputStyle={{
                    width: "100%",
                    border: "1px solid #e7e7e7",
                    fontSize: "15px",
                  }}
                  specialLabel={null}
                  country={"in"}

                  // value={phone}
                  // className="border-2 border-color: rgb(0 0 0) my-3 md:my-4"
                />
              )}
            />
            <button
              type="submit"
              className="bg-black-light_dark text-white-light text-[14px] md:text-[16px] p-3 mt-3 mt-[25px] md:mb-4 rounded-md"
            >
              Request OTP
            </button>
            {/* <p>{errors.phone?.message}</p> */}

            {/* <label className="text-black-dark text-[12px] md:text-[14px]">
            Enter mobile number
          </label>
          <PhoneInput
            specialLabel={null}
            country={"in"}
            value={phone}
            onChange={(e) => {
              setPhone(e);
            }}
            // className="border-2 border-color: rgb(0 0 0) my-3 md:my-4"
          />
          <input
            type="text"
            className="border-2 border-color: rgb(0 0 0) my-3 md:my-4"
          ></input>
          <button className="bg-black-light_dark text-white text-[14px] md:text-[16px] p-3 mb-3 md:mt-2 md:mb-4 rounded-md">
            Request OTP
          </button> */}
          </form>
          <div className="mt-[15px] md:mt-[5px]">
            <span className="text-green-light font-normal text-[13px] md:text-[16px] lg:text-[14px]">
              Having trouble?{" "}
            </span>
            <span className="text-black-light_dark text-[13px] md:text-[16px] lg:text-[14px]">
              Call us on +91 9037766112
            </span>
          </div>
        </div>
        <LoginImage imgSrc={SignInImage} />
      </div>
    </CommomLayout>
  );
};

export default SignIn;
