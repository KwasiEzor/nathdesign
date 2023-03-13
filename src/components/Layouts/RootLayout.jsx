import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
