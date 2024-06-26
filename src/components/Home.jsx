import React, { useState } from "react";
import StudentForm from "../StudentForm";
import { FingerprintInputForm } from "./FingerprintInputForm";
import ExamADD from "../ExamADD";
import ExamSchedule from "../ExamSchedule";

import { FaCalendarDay, FaIdBadge, FaDesktop, FaLaptop } from "react-icons/fa";

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
      case "schedule":
        return <ExamSchedule />;
      case "exam":
        return <ExamADD />;
      default:
        return null;
    }
  };

  return (
    <div className="p-2 flex flex-col items-center justify-center gap-2 mt-2 w-full">
      {currentForm ? (
        <div className="w-full">
          <button
            className="fixed bg-[#114960] hover:bg-[#0f2f3b] text-white p-2 font-bold rounded-lg mb-4 left-[320px]"
            onClick={() => setCurrentForm(null)}
          >
            Back to Home
          </button>
          {renderForm()}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 lg:px-32">
          <div className="flex flex-col justify-center items-center bg-[#d9d9d9] p-6 rounded-xl shadow w-full">
            <div className="text-center font-semibold text-xl mb-4">
              Total Students <h1 className="text-3xl">xxx</h1>
            </div>
            <button
              className="flex flex-col justify-center items-center w-40 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-6 uppercase"
              onClick={() => handleButtonClick("register")}
            >
              <FaIdBadge className="text-5xl pb-3" />
              <div className="text-center">Register</div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#114960] p-6 rounded-xl shadow w-full">
            <FaDesktop className="text-5xl pb-3 text-white" />
            <button
              className="flex flex-col justify-center items-center w-40 bg-[#d9d9d9] hover:bg-[#757676] text-black font-bold rounded-lg p-6 mt-4 uppercase"
              onClick={() => handleButtonClick("assign")}
            >
              <div className="text-center text-xl">Assign PC</div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#114960] p-6 rounded-xl shadow w-full h-[248px]">
            <FaCalendarDay className="text-5xl pb-3 text-white" />
            <button
              className="flex flex-col justify-center items-center w-40 bg-[#d9d9d9] hover:bg-[#757676] text-black font-bold rounded-lg p-6 mt-4 uppercase"
              onClick={() => handleButtonClick("schedule")}
            >
              <div className="text-center text-xl">Exam Schedule</div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#d9d9d9] p-6 rounded-xl shadow w-full ">
            <FaLaptop className="text-5xl pb-3 text-black" />
            <button
              className="flex flex-col justify-center items-center w-40 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg p-6 mt-4 uppercase"
              onClick={() => handleButtonClick("exam")}
            >
              <div className="text-center text-xl">Add Exam</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
