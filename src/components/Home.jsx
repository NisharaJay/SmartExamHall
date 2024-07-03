<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaIdBadge, FaDesktop, FaCalendarDay, FaLaptop } from 'react-icons/fa';
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaIdBadge, FaCalendarDay, FaLaptop } from "react-icons/fa";
import { getAllStudents } from "../requests/students";
>>>>>>> Stashed changes

const Home = () => {
  const navigate = useNavigate();
  const [studentCount, setStudentCount] = useState(0); // State to hold student count

  useEffect(() => {
    // Fetch student count from backend API
    fetchStudentCount();
  }, []);

  const fetchStudentCount = async () => {
    try {
<<<<<<< Updated upstream
      const response = await fetch('your-backend-api-endpoint');
      if (!response.ok) {
        throw new Error('Failed to fetch student count');
      }
      const data = await response.json();
      setStudentCount(data.count); // Assuming your backend returns a count property
=======
      const res = await getAllStudents();
      if (res) {
        setStudentCount(res); // Assuming your backend returns a count property
      }
>>>>>>> Stashed changes
    } catch (error) {
      console.error("Error fetching student count:", error);
    }
  };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-2">
      {/* Total Students */}
      <div className="bg-[#114960] rounded-xl p-4">
        <div className="flex justify-center items-center bg-[#d9d9d9] p-4 md:p-6 rounded-xl shadow-md w-full md:w-[300px] h-[200px]">
          <div className="text-center font-semibold text-2xl">
            Total Students
            <h1 className="text-3xl">{studentCount}</h1>
          </div>
        </div>
      </div>

      {/* Register */}
      <div className="bg-[#114960] rounded-xl p-4">
        <div className="flex flex-col justify-center items-center bg-[#d9d9d9] p-4 md:p-6 rounded-xl shadow-md w-full md:w-[300px] h-[200px]">
          <button
            onClick={() => handleButtonClick("/home/register")}
            className="flex flex-col justify-center items-center bg-[#114960] hover:bg-[#0f2f3b] text-white text-lg font-bold rounded-lg p-4 md:p-6 uppercase"
          >
            <FaIdBadge className="text-5xl text-white mb-2 md:mb-3" />
            <span className="text-center">Register</span>
          </button>
        </div>
      </div>

      {/* Second line with Exam Schedule and Add Exam */}
      <div className="flex flex-wrap justify-center gap-4 md:w-full">
        {/* Exam Schedule */}
        <div className="flex flex-col justify-center items-center bg-[#114960] p-4 md:p-6 rounded-xl shadow-md w-full md:w-[468px] h-[248px]">
          <FaCalendarDay className="text-5xl text-white mb-2 md:mb-3" />
          <button
            onClick={() => handleButtonClick("/home/schedule")}
            className="w-32 md:w-40 bg-[#d9d9d9] hover:bg-[#757676] text-black text-xl font-bold rounded-lg p-4 md:p-6 uppercase"
          >
            Exam Schedule
          </button>
        </div>

        {/* Add Exam */}
        <div className="flex flex-col justify-center items-center bg-[#114960] p-4 md:p-6 rounded-xl shadow-md w-full md:w-[468px] h-[248px]">
          <FaLaptop className="text-5xl text-white mb-2 md:mb-3" />
          <button
            onClick={() => handleButtonClick("/home/exam")}
            className="w-32 md:w-40 bg-[#d9d9d9] hover:bg-[#757676] text-black text-xl font-bold rounded-lg p-4 md:p-6 uppercase"
          >
            Add Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
