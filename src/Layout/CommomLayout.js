import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

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
