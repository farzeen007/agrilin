import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
import SignIn from "./SignIn";
import SignInOtp from "./SignInOtp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin-otp" element={<SignInOtp />} />
      </Routes>
    </>
  );
};

export default App;
