import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaIdBadge, FaCalendarDay, FaLaptop } from "react-icons/fa";
import { getAllStudents } from "../requests/students";

const Home = () => {
  const navigate = useNavigate();
  const [studentCount, setStudentCount] = useState(0); // State to hold student count

  useEffect(() => {
    // Fetch student count from backend API
    fetchStudentCount();
  }, []);

  const fetchStudentCount = async () => {
    try {
      const res = await getAllStudents();
      if (res) {
        setStudentCount(res); // Assuming your backend returns a count property
      }
    } catch (error) {
      console.error("Error fetching student count:", error);
    }
  };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-32">
      {/* Total Students */}
      <div className="bg-[#114960] rounded-xl p-4">
        <div className="bg-[#d9d9d9] h-full p-6 rounded-xl shadow flex flex-col justify-center items-center">
          <div className="font-semibold text-2xl mb-2">Total Students</div>
          <h1 className="text-3xl">{studentCount}</h1>
        </div>
      </div>

      {/* Register Button */}
      <div className="bg-[#114960] rounded-xl p-4">
        <div className="bg-[#d9d9d9] p-6 rounded-xl shadow flex flex-col justify-center items-center py-8">
          <button
            onClick={() => handleButtonClick("/home/register")}
            className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-4 md:p-6 uppercase flex flex-col items-center"
          >
            <FaIdBadge className="text-5xl text-white mb-2 md:mb-3" />
            <span className="text-xl mt-2">Register</span>
          </button>
        </div>
      </div>

      {/* Exam Schedule */}
      <div className="bg-[#d9d9d9] rounded-xl p-4">
        <div className="bg-[#114960] p-6 rounded-xl shadow flex flex-col justify-center items-center py-12">
          <FaCalendarDay className="text-6xl pb-3 text-white" />
          <button
            onClick={() => handleButtonClick("/home/schedule")}
            className="bg-[#d9d9d9] hover:bg-[#757676] text-black text-xl mt-3 font-bold rounded-lg p-4 md:p-6 uppercase flex flex-col items-center"
          >
            Exam Schedule
          </button>
        </div>
      </div>

      {/* Add Exam */}
      <div className="bg-[#d9d9d9] rounded-xl p-4">
        <div className="bg-[#114960] p-6 rounded-xl shadow flex flex-col justify-center items-center py-12">
          <FaLaptop className="text-6xl pb-3 text-white" />
          <button
            onClick={() => handleButtonClick("/home/exam")}
            className="bg-[#d9d9d9] hover:bg-[#757676] text-black text-xl mt-3 font-bold rounded-lg p-4 md:p-6 uppercase flex flex-col items-center"
          >
            Add Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
