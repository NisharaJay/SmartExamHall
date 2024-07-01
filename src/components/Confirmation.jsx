import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = ({ message, onConfirmPath, onCancelPath }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate(onConfirmPath);
  };

  const handleCancel = () => {
    navigate(onCancelPath);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
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
