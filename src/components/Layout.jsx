import React from "react";
import { Outlet } from "react-router-dom";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
