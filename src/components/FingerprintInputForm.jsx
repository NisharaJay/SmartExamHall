import React, { useState } from "react";

export const FingerprintInputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    indexNumber: "",
    degree: "",
    batch: ""
  });

  const [error, setError] = useState("");

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

      alert("PC assigned successfully!");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      indexNumber: "",
      degree: "",
      batch: ""
    });
  };

  return (
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
              <label htmlFor="name" className="text-sm font-bold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                readOnly
              />
            </div>

            <div>
              <label htmlFor="indexNumber" className="text-sm font-bold">
                Index Number:
              </label>
              <input
                type="text"
                name="indexNumber"
                id="indexNumber"
                value={formData.indexNumber}
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                readOnly
              />
            </div>

            <div>
              <label htmlFor="degree" className="text-sm font-bold">
                Degree:
              </label>
              <input
                type="text"
                name="degree"
                id="degree"
                value={formData.degree}
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                readOnly
              />
            </div>

            <div>
              <label htmlFor="batch" className="text-sm font-bold">
                Batch:
              </label>
              <input
                type="text"
                name="batch"
                id="batch"
                value={formData.batch}
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                readOnly
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
  );
};
