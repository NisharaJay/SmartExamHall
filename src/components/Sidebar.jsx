import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaCalendar, FaUserGraduate, FaSignOutAlt, FaCog, FaArrowLeft, FaDesktop } from "react-icons/fa";
import { onLogout } from "../requests/admin";

const Sidebar = () => {
  const [open, setOpen] = useState(window.innerWidth >= 640);
  const [activePage, setActivePage] = useState("home"); // Set default active page to "home"
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const toggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setActivePage(location.pathname.substring(1) || "home");
  }, [location.pathname]);

  const handleMenuClick = (title, path) => {
    if (title === "Logout") {
      onLogout()
      navigate("/login");
    } else if (title === "Exam Mode") {
      navigate("/confirm-enter-exam-mode");
    } else {
      setActivePage(path);
      navigate(`/${path}`);
    }
  };

  const Menus = [
    { title: "Home", icon: <FaHome />, path: "home", gap: true },
    // { title: "Exam Mode", icon: <FaDesktop />, path: "exam-mode" },
    { title: "Student Management", icon: <FaUserGraduate />, path: "student-management" },
    { title: "Exam Schedule", icon: <FaCalendar />, path: "exam-schedule" },
  ];

  const Menu = [
    // { title: "Settings", icon: <FaCog />, path: "settings" },
    { title: "Logout", icon: <FaSignOutAlt />, path: null },
  ];

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Set default active page to "home" and apply styling
    setActivePage("home");
    // Optionally, handle the state change programmatically if needed
    handleMenuClick("Home", "home");
  }, []); // Run once on component mount

  return (
    <div className="flex h-screen relative">
      <div
        className={`${open ? "w-72" : "w-20"} bg-[#114960] p-4 m-2 rounded-xl pt-5 relative duration-300 md:static`}
        style={{ overflow: "hidden" }}
      >
        <FaArrowLeft
          className={`absolute top-4 cursor-pointer text-2xl text-white border-2 p-1 rounded-full transition-transform duration-300 ${open ? "left-[263px]" : "rotate-180"}`}
          onClick={toggleSidebar}
        />
        <FaDesktop
          className={`cursor-pointer duration-500 text-white mt-6 ml-1 ${open ? "rotate-[360deg] w-10 h-10" : "w-10 h-10"}`}
        />
        <div className="flex gap-x-4 items-center">
          <h1 className={`text-white origin-left font-medium text-xl duration-200 -mt-12 ml-10 pl-5 ${!open && "scale-0"}`}>
            Exam Hall Management
          </h1>
        </div>
        <div className="mt-7">
          <div className="bg-[#d9d9d9] rounded-xl pb-2">
            <ul className="p-1">
              {Menus.map((menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-lg p-1.5 cursor-pointer hover:bg-black text-black hover:text-white font-semibold items-center gap-x-4 mt-2 ${activePage === menu.path && "bg-black text-white"}`}
                  onClick={() => handleMenuClick(menu.title, menu.path)}
                >
                  <span className="pl-1.5 text-lg">{menu.icon}</span>
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
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
                  className={`flex rounded-lg p-1.5 cursor-pointer hover:bg-black text-black hover:text-white font-semibold items-center gap-x-4 mt-2 ${activePage === menu.path && "bg-black text-white"}`}
                  onClick={() => handleMenuClick(menu.title, menu.path)}
                >
                  <span className="pl-1.5 text-lg">{menu.icon}</span>
                  {menu.path ? (
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                      {menu.title}
                    </span>
                  ) : (
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                      {menu.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
