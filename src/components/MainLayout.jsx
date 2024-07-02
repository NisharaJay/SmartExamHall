import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Navbar } from "./Navbar";
import { Bottombar } from "./Bottombar";

const MainLayout = () => {
  const location = useLocation();
  const getActivePageName = (pathname) => {
    switch (pathname) {
      case "/home":
        return "Home";
      case "/home/exam":
        return "Add Exam";
      case "/home/register":
        return "Register Student";
      case "/home/assign":
        return "Assign PC";
      case "/home/schedule":
        return "Exam Schedule";
      case "/student-management":
        return "Student Management";
      case "/exam-schedule":
        return "Exam Schedule";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  const activePage = getActivePageName(location.pathname);


  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Navbar  activePage={activePage} />
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
        <Bottombar />
      </div>
    </div>
  );
};

export default MainLayout;
