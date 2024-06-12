import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";

export const Bottombar = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Consider setting a default value
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const handleCalendarClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  // Update the state every second for real-time display
  useEffect(() => {
    const intervalId = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <div className="relative flex justify-between items-center bg-[#d9d9d9d9] rounded-xl p-2 mb-1">
      
      <div className="flex justify-between">
          <h1 className="text-[17px] text-center font-semibold pl-2 pr-3 text-gray-700 ">
            {dateTime.toLocaleDateString()}
          </h1>
        </div>
        <div className="flex justify-between pr-2">
        <FaCalendar className="h-12 ml-3 cursor-pointer" onClick={handleCalendarClick} />
      </div>
      {isCalendarOpen && (
        <div className="absolute bottom-full right-0 mb-2 pr-2 z-8">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            className="mr-3" 
          />
        </div>
      )}
    </div>
  );
};
