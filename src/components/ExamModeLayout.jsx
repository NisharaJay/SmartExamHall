import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";

const ExamModeLayout = ({ children }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [examID, setExamID] = useState(""); // State to store current exam ID

  const handleBackToHome = () => {
    setShowConfirmation(true);
  };

  const handleConfirmExit = async () => {
    try {
      const response = await fetch("/api/v1/exam/setActive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          examID: examID,
          active: 0, // Set active as 0 to deactivate the exam
        }),
      });

      if (response.ok) {
        navigate("/home");
      } else {
        throw new Error("Failed to deactivate exam");
      }
    } catch (error) {
      console.error("Error deactivating exam:", error);
      // Handle error state or feedback to the user
    }
  };

  const handleCancelExit = () => {
    setShowConfirmation(false);
  };

  // Function to set the exam ID, assuming it's passed from props or fetched
  const setExamId = (id) => {
    setExamID(id);
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
          setExamId={setExamId} // Pass setExamId function to update examID state
        />
      )}
    </div>
  );
};

export default ExamModeLayout;
