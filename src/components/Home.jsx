import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaIdBadge, FaDesktop, FaCalendarDay, FaLaptop } from 'react-icons/fa';
import { getAllStudents } from '../requests/students';

const Home = () => {
  const navigate = useNavigate();
  const [studentCount, setStudentCount] = useState(0); // State to hold student count

  useEffect(() => {
    // Fetch student count from backend API
    fetchStudentCount();
  }, []);

  const fetchStudentCount = async () => {
    try {
      const res = await getAllStudents()
      if (res) {
        setStudentCount(res); // Assuming your backend returns a count property
      }
      
    } catch (error) {
      console.error('Error fetching student count:', error);
    }
  };

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-wrap flex-col items-center justify-center gap-2 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-32">
        <div className="flex flex-col justify-center items-center bg-[#d9d9d9] p-6 rounded-xl shadow w-[460px]">
          <div className="text-center font-semibold text-xl mb-4">
            Total Students
            <h1 className="text-3xl">{studentCount}</h1>
          </div>
          <button
            onClick={() => handleButtonClick('/home/register')}
            className="flex flex-col justify-center items-center w-40 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-6 uppercase"
          >
            <FaIdBadge className="text-5xl pb-3" />
            <div className="text-center">Register</div>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#114960] p-6 rounded-xl shadow w-full">
          <FaDesktop className="text-5xl pb-3 text-white" />
          <button
            onClick={() => handleButtonClick('/home/assign')}
            className="flex flex-col justify-center items-center w-40 bg-[#d9d9d9] hover:bg-[#757676] text-black font-bold rounded-lg p-6 mt-4 uppercase"
          >
            <div className="text-center text-xl">Assign PC</div>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#114960] p-6 rounded-xl shadow w-full h-[248px]">
          <FaCalendarDay className="text-5xl pb-3 text-white" />
          <button
            onClick={() => handleButtonClick('/home/schedule')}
            className="flex flex-col justify-center items-center w-40 bg-[#d9d9d9] hover:bg-[#757676] text-black font-bold rounded-lg p-6 mt-4 uppercase"
          >
            <div className="text-center text-xl">Exam Schedule</div>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#d9d9d9] p-6 rounded-xl shadow w-full ">
          <FaLaptop className="text-5xl pb-3 text-black" />
          <button
            onClick={() => handleButtonClick('/home/exam')}
            className="flex flex-col justify-center items-center w-40 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-6 mt-4 uppercase"
          >
            <div className="text-center text-xl">Add Exam</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
