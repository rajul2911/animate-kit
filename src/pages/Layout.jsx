import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <NavBar />

      <main className="pt-[64px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;