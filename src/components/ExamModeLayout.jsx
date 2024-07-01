// components/ExamModeLayout.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";

const ExamModeLayout = ({ children }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBackToHome = () => {
    setShowConfirmation(true);
  };

  const handleConfirmExit = () => {
    setShowConfirmation(false);
    navigate("/home");
  };

  const handleCancelExit = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="text-[25px] font-bold">Exam Mode</h1>
        <button
          onClick={handleBackToHome}
          className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 rounded-xl"
        >
          Back to Home
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">{children}</div>
      {showConfirmation && (
        <ConfirmationDialog
          message="Are you sure you want to exit Exam Mode?"
          onConfirm={handleConfirmExit}
          onCancel={handleCancelExit}
        />
      )}
    </div>
  );
};

export default ExamModeLayout;
