import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const CommomLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CommomLayout;
