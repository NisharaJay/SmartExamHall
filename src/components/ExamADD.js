import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ExamADD = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    module: "",
    date: "",
    duration: "",
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
        "https://e0d2-2401-dd00-10-20-38fd-4990-5ba2-38d8.ngrok-free.app/api/v1/exams",
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
        // Reset form after submission if needed
        setFormData({
          module: "",
          date: "",
          duration: "",
        });
      } else {
        console.error("Failed to submit form data", response);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <button
<<<<<<< Updated upstream
        className="bg-[#114960] hover:bg-[#0f2f3b] text-white p-2 rounded-lg font-bold"
=======
        className="bg-[#114960] hover:bg-[#0f2f3b] text-white p-2 rounded-lg font-bold mb-1"
>>>>>>> Stashed changes
        onClick={handleBack}
      >
        Back to Home
      </button>
<<<<<<< Updated upstream
=======
      <div className="flex flex-col justify-center items-center">
        <div className="p-5 bg-gray-200 rounded-xl border-[10px] border-[#114960] shadow-lg w-full lg:w-2/3">
          <form onSubmit={handleSubmit}>
            {/* Exam Module */}
            <div className="mb-4">
              <label
                htmlFor="examModule"
                className="block text-gray-700 font-bold mb-2"
              >
                Exam Module:
              </label>
              <input
                type="text"
                id="module"
                name="module"
                value={formData.module}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
                required
              />
            </div>
>>>>>>> Stashed changes

      <div className="p-6 ml-5 mr-5 mt-12 bg-gray-200 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Exam Module */}
          <div className="mb-4">
            <label
              htmlFor="examModule"
              className="block text-gray-700 font-bold mb-2"
            >
              Exam Module:
            </label>
            <input
              type="text"
              id="module"
              name="module"
              value={formData.module}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
              required
            />
          </div>

          {/* Exam Date */}
          <div className="mb-4">
            <label
              htmlFor="examDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Exam Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
              required
            />
          </div>

          {/* Exam Duration */}
          <div className="mb-4">
            <label
              htmlFor="examDuration"
              className="block text-gray-700 font-bold mb-2"
            >
              Exam Duration (in minutes):
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 rounded-lg mt-4 focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExamADD;
