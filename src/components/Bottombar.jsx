import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


export const Bottombar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div className="relative flex justify-between items-center bg-[#d9d9d9d9] rounded-xl p-1 mb-2 mr-2">
      <div className="flex justify-between">
      </div>
      <div className="flex justify-between pr-2">
      <h1 className="text-[17px] text-center font-semibold p-2 text-gray-700 ">
          {dateTime.toLocaleDateString()}
        </h1>
      </div>
      
    </div>
  );
};
