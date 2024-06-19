import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Bottombar } from "./Bottombar";
import Home from "./Home";
import StudentManagement from "./StudentManagement";
import ExamSchedule from "./ExamSchedule";
import HallConfiguration from "./HallConfiguration";
import Settings from "./Settings";

import {
  FaHome,
  FaCalendar,
  FaList,
  FaUserGraduate,
  FaSignOutAlt,
  FaCog,
  FaArrowLeft,
  FaDesktop,
} from "react-icons/fa";

export const Sidebar = ({ onLogout }) => {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("Home");

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleMenuClick = (title) => {
    if (title === "Logout") {
      onLogout(); // Call the logout handler passed from App.js
    } else {
      setActivePage(title);
    }
  };

  const Menus = [
    { title: "Home", icon: <FaHome />, component: <Home /> },
    {
      title: "Student Management",
      icon: <FaUserGraduate />,
      component: <StudentManagement />,
    },
    {
      title: "Hall Configuration",
      icon: <FaList />,
      component: <HallConfiguration />,
    },
    {
      title: "Exam Schedule",
      icon: <FaCalendar />,
      component: <ExamSchedule />,
    },
  ];
  const Menu = [
    { title: "Settings", icon: <FaCog />, component: <Settings /> },
    { title: "Logout", icon: <FaSignOutAlt />, component: null },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-[#114960] p-4 m-2 rounded-xl pt-8 relative duration-300`}
        style={{ overflow: "hidden" }}
      >
        <FaArrowLeft
          className={`absolute cursor-pointer right-2 top-2 text-2xl text-white border-2 p-1 rounded-full
            ${!open && "rotate-180"}`}
          onClick={toggleSidebar}
        />
        <FaDesktop
          className={`cursor-pointer duration-500 text-white mt-2 ml-1 ${
            open ? "rotate-[360deg] w-10 h-10" : "w-10 h-10"
          }`}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 -mt-12 ml-10 pl-5 ${
              !open && "scale-0"
            }`}
          >
            Exam Hall Management
          </h1>
        </div>
        <div className="mt-7">
          <div className="bg-[#d9d9d9] rounded-xl pb-2">
            <ul className="p-1">
              {Menus.map((menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-md p-1.5 cursor-pointer hover:bg-black text-black hover:text-white font-semibold items-center gap-x-4 ${
                    menu.gap ? "mt-6" : "mt-2"
                  } ${activePage === menu.title && "bg-black text-white"}`}
                  onClick={() => handleMenuClick(menu.title)}
                >
                  <span className="pl-1.5 text-lg">{menu.icon}</span>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#d9d9d9] rounded-xl pb-2 mt-7">
            <ul className="p-1">
              {Menu.map((menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-md p-1.5 cursor-pointer hover:bg-black text-black hover:text-white font-semibold items-center gap-x-4 ${
                    menu.gap ? "mt-6" : "mt-2"
                  } ${activePage === menu.title && "bg-black text-white"}`}
                  onClick={() => handleMenuClick(menu.title)}
                >
                  <span className="pl-1.5 text-lg">{menu.icon}</span>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col flex-1 p-2">
        <Navbar activePage={activePage} />
        <div className="flex-1 mt-2 overflow-y-auto">
          {Menus.map((menu) => {
            if (activePage === menu.title) {
              return menu.component;
            }
            return null;
          })}
        </div>
        <div>
          <Bottombar/>
        </div>
      </div>
    </div>
  );
};
