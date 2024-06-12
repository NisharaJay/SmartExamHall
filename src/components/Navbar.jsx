import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export const Navbar = ({ activePage }) => {
  const [dateTime, setDateTime] = useState(new Date());

  // Update the state every second for real-time display
  useEffect(() => {
    const intervalId = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center bg-[#d9d9d9d9] rounded-xl p-2 mt-1">
        <h1 className="text-[17px] font-semibold pl-2 text-gray-700">
          Dashboard /{" "}
          <span className="text-gray-500 text-[15px]">{activePage}</span>
        </h1>
        <h1 className="text-lg font-semibold pl-2"></h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm border-2 border-transparent rounded-2xl focus:border-gray-400 px-3 py-1 pl-8 pr-3"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#d9d9d9d9] rounded-xl p-2 mt-3">
        <div className="flex justify-between">
          <h1 className="text-[17px] text-center font-semibold pl-2 pr-3 text-gray-700 ">
            
          </h1>
        </div>
        <div className="relative">
          <h1 className="text-[17px] text-center font-semibold pl-2 pr-3 text-gray-700 ">
            {dateTime.toLocaleTimeString()}
          </h1>
        </div>
      </div>
    </div>
  );
};
