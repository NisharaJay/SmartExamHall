import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message, examID, onConfirmPath, onCancelPath } = location.state;
  console.log(examID);
  const handleConfirm = async () => {
    try {
      const response = await fetch("https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/exams/setActive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420"
        },
        body: JSON.stringify({
          examId: examID,
          active: 1, // Set active as 1 (assuming you always want to activate)
        }),
        credentials:'include'
      });
      
      if (response.ok) {
        navigate(onConfirmPath);
      } else {
        const res= await response.json()
        console.log(res);
        throw new Error("Failed to activate exam");
      }
    } catch (error) {
      console.error("Error activating exam:", error);
      // Handle error state or feedback to the user
    }
  };

  const handleCancel = () => {
    navigate(onCancelPath);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-gray-200 p-7 rounded-xl shadow-lg text-center">
        <p className="mb-7 text-[18px]">{message}</p>
        <div className="flex justify-around">
          <button
            onClick={handleCancel}
            className="justify-start bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg text-[18px]"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="justify-end bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 rounded-lg text-[18px]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
