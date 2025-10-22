import React from "react";
import { Outlet } from "react-router";
import Wrapper from "../Component/Common/Wraper";
import Navbar from "../Component/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <div className="shadow-sm">
        <Wrapper>
          <Navbar />
        </Wrapper>
      </div>

      <Outlet></Outlet>

       <ToastContainer />
    </div>
  );
};

export default MainLayout;
