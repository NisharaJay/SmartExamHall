// components/ConfirmationDialog.js
import React from "react";

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
      <div className="bg-gray-200 p-7 rounded-xl shadow-lg text-center">
        <p className="mb-7 text-[18px]">{message}</p>
        <div className="flex justify-around">
          <button
            onClick={onConfirm}
            className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 rounded-lg text-[18px]"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg text-[18px]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
