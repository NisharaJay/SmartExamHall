import React, { useState } from "react";
import StudentForm from "../StudentForm";
import { FingerprintInputForm } from "./FingerprintInputForm";
import  Hall  from "../Hall";
import  ExamADD  from "../ExamADD";

import {
  FaCalendarDay,
  FaIdBadge,
  FaDesktop,
  FaLaptop,
  FaClipboardList,
  FaCalendar,
} from "react-icons/fa";

const Home = () => {
  const [currentForm, setCurrentForm] = useState(null);

  const handleButtonClick = (formName) => {
    setCurrentForm(formName);
  };

  
  const renderForm = () => {
    switch (currentForm) {
      case "register":
        return <StudentForm />;
      case "assign":
        return <FingerprintInputForm />;
      case "hall":
        return <Hall />;
      case "exam":
        return <ExamADD />;
      
      default:
        return null;
    }
  };

  return (
    <div className="p-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {currentForm ? (
        <div className="col-span-full">
          <button
            className="fixed bg-[#114960] hover:bg-[#0f2f3b] text-white p-2 font-bold rounded-lg mb-4"
            onClick={() => setCurrentForm(null)}
          >
            Back to Home
          </button>
          {renderForm()}
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center bg-[#d9d9d9d9] p-4 rounded-xl shadow">
            <div className="text-center font-semibold text-xl">
              Total Students <h1 className="text-3xl">xxx</h1>
            </div>
            <button
              className="flex flex-col justify-center items-center w-40 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-6 mt-4 mb-3 uppercase"
              onClick={() => handleButtonClick("register")}
            >
              <div className="text-center">
                <FaIdBadge className="text-5xl pb-3" />
              </div>
              <div className="text-center">Register</div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#114960] p-4 rounded-xl shadow">
            <div className="text-center text-white">
              <FaDesktop className="text-5xl pb-3" />
            </div>
            <button
              className="flex flex-col justify-center items-center w-40 bg-[#d9d9d9d9] hover:bg-[#757676] text-black font-bold rounded-lg p-6 mt-4 mb-3 uppercase"
              onClick={() => handleButtonClick("assign")}
            >
              <div className="text-center text-xl">Assign PC</div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#d9d9d9d9] p-4 rounded-xl shadow">
            <div className="text-center text-black">
              <FaClipboardList className="text-5xl pb-3" />
            </div>
            <button className="flex flex-col justify-center items-center w-40 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-6 mt-4 mb-3 uppercase"
           onClick={() => handleButtonClick("hall")}
            >
              <div className="text-center text-xl">Hall Assignment</div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#d9d9d9d9] p-4 rounded-xl shadow">
            <div className="text-center text-black">
              <FaLaptop className="text-5xl pb-3" />
            </div>
            <button className="flex flex-col justify-center items-center w-40 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-6 mt-4 mb-3 uppercase"
            onClick={() => handleButtonClick("exam")}
            >
              <div className="text-center text-xl">Add Exam</div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#114960] p-4 rounded-xl shadow">
            <div className="text-center text-white">
              <FaCalendarDay className="text-5xl pb-3" />
            </div>
            <button className="flex flex-col justify-center items-center w-40 bg-[#d9d9d9d9] hover:bg-[#757676] text-black font-bold rounded-lg p-6 mt-4 mb-3 uppercase">
              <div className="text-center text-xl">Exam Schedule</div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#d9d9d9d9] p-4 rounded-xl shadow">
            <div className="text-center font-semibold text-xl">Upcoming Exams</div>
            <button className="flex flex-col justify-center items-center w-40 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-6 mt-4 mb-3 uppercase">
              <div className="text-center">
                <FaCalendar className="text-5xl pb-3" />
              </div>
              <div className="text-center text-xl">View Calendar</div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
