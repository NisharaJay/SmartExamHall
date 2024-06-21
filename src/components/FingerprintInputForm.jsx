import React, { useState } from "react";

export const FingerprintInputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    indexNumber: "",
    degree: "",
    batch: ""
  });

  // State variable for error handling
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

  // Function to capture the finger and populate the form fields
  const handleCaptureFinger = async () => {
    try {
      // Make API call to the backend to capture fingerprint and get data
      const response = await fetch("/api/capture-fingerprint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({ fingerprintData: "dummyData" })
      });

      if (!response.ok) {
        throw new Error("Failed to capture fingerprint");
      }

      const data = await response.json();

      // Update form data with the received data
      setFormData({
        name: data.name,
        indexNumber: data.indexNumber,
        degree: data.degree,
        batch: data.batch
      });

      // Clear any previous error messages
      setError("");
    } catch (err) {
      // Handle errors by setting the error state
      setError(err.message);
    }
  };

  // Function to clear the form fields
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
      <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 bg-[#D9D9D9D9] w-full max-w-4xl p-6 rounded-xl text-black">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:w-96 h-80"></div>
            <button className="inline-block bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-5 py-1.5 mt-4 mb-3 uppercase"
            onClick={handleCaptureFinger}
            >
              Capture Finger
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-xl shadow-lg p-7 text-gray-600">
          {error && (
              <div className="text-red-500 text-sm font-bold mb-4">
                {error}
              </div>
            )}
            <form className="flex flex-col space-y-2">
              <button
                type="button"
                className=" bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
              >
                Check student
              </button>
              <div>
                <label htmlFor="name" className="text-sm font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  className="ring-1  ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
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
    </div>
  );
};
