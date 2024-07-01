import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PCAssign = () => {
  const [formData, setFormData] = useState({
        indexNumber: ""
 
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAssign = async () => {
    try {
      const response = await fetch("/api/assign-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to assign student");
      }

      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClear = () => {
    setFormData({
      indexNumber: ""
    });
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <button
        className="bg-[#114960] hover:bg-[#0f2f3b] text-white p-2 rounded-lg font-bold"
        onClick={handleBack}
      >
        Back to Home
      </button>
      <div className="flex w-full justify-center mt-[-5px]">
        <div className="flex flex-col bg-[#114960] w-full max-w-4xl p-4 rounded-xl text-black">
          <div className="bg-white rounded-xl shadow-lg p-7 text-gray-600">
            {error && (
              <div className="text-red-500 text-sm font-bold mb-4">
                {error}
              </div>
            )}
            <form className="flex flex-col space-y-2">
              <div>
                <label htmlFor="indexNumber" className="text-sm font-bold">
                  Index Number:
                </label>
                <input
                  type="text"
                  name="indexNumber"
                  id="indexNumber"
                  value={formData.indexNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, indexNumber: e.target.value })
                  }
                  className="ring-1 ring-gray-300 w-full rounded-md px-3 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300 mb-5"
                />
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="reset"
                  className="inline-block self-start bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
                  onClick={handleClear}
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="inline-block self-end bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
                  onClick={handleAssign}
                >
                  Assign
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCAssign;
