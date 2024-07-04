import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const ExamADD = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    module: "",
    date: "",
    duration: "",
    instructions: "",
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
        "https://d206-2402-d000-a400-4266-458e-cb07-e111-57aa.ngrok-free.app/api/v1/exams",
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
        toast.success("Exam successfully added!", { position: "top-center" });
        // Reset form after submission if needed
        setFormData({
          module: "",
          date: "",
          duration: "",
          instructions: "",
        });
      } else {
        toast.error("Failed to add exam", { position: "top-center" });
        console.error("Failed to submit form data", response);
      }
    } catch (error) {
      toast.error("Error adding exam", { position: "top-center" });
      console.error("Error submitting form data:", error);
    }
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <button
    className="bg-[#114960] hover:bg-[#0f2f3b] text-white p-2 rounded-lg font-bold mb-1"

        onClick={handleBack}
      >
        Back to Home
      </button>
  <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col w-2/3 p-6 bg-gray-200 rounded-xl border-[10px] border-[#114960] shadow-lg">

          <form onSubmit={handleSubmit}>
            {/* Exam Module */}
            <div className="mb-4">
              <label
 htmlFor="module"

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
  htmlFor="date"

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
 htmlFor="duration"

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
   <div className="mb-4">
              <label
                htmlFor="instructions"
                className="block text-gray-700 font-bold mb-2"
              >
                Special Instructions:
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"


            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExamADD;
