import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Outlet></Outlet>
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
