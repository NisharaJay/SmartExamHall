import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setMode } from "./requests/fingerprint";

function StudentForm() {
  const [formData, setFormData] = useState({
    stu_id: "",
    name: "",
    degree: "IT",
    batch: "",
    fingerprint: 12345,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://e0d2-2401-dd00-10-20-38fd-4990-5ba2-38d8.ngrok-free.app/api/v1/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      if (response.ok) {
        console.log("Form data successfully submitted!");

        setFormData({
          name: "",
          stu_id: "",
          degree: "IT",
          batch: "",
        });
        const res = await setMode();
        console.log(res);
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const navigate = useNavigate();

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
      <div className="max-w-3xl mx-auto mt-4 p-6 bg-gray-200 rounded-xl border-[10px] border-[#114960] shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="stu_id"
              className="block text-gray-700 font-bold mb-2"
            >
              Index Number:
            </label>
            <input
              type="text"
              id="stu_id"
              name="stu_id"
              value={formData.stu_id}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="degree"
              className="block text-gray-700 font-bold mb-2"
            >
              Degree:
            </label>
            <select
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
              required
            >
              <option value="IT">IT</option>
              <option value="ITM">ITM</option>
              <option value="AI">AI</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="batch"
              className="block text-gray-700 font-bold mb-2"
            >
              Batch:
            </label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 rounded-lg mt-4 focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
