import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Navbar } from "./Navbar";
import { Bottombar } from "./Bottombar";

const MainLayout = ({ onLogout }) => {
  const location = useLocation();
  const activePage = location.pathname.split("/")[1] || "home";

  return (
    <div className="flex h-screen">
      <Sidebar onLogout={onLogout} />
      <div className="flex flex-col flex-1">
        <Navbar onLogout={onLogout} activePage={activePage} />
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
        <Bottombar />
      </div>
    </div>
  );
};

export default MainLayout;
