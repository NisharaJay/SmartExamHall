import React, { useState } from 'react';

const ExamADD = () => {
  const [formData, setFormData] = useState({
    examModule: '',
    examDate: '',
    examDuration: '',
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
      const response = await fetch('https://example.com/api/add-exam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data successfully submitted!');
        // Reset form after submission if needed
        setFormData({
          examModule: '',
          examDate: '',
          examDuration: '',
        });
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 bg-gray-200 rounded shadow-lg">
      <form onSubmit={handleSubmit}>
        {/* Exam Module */}
        <div className="mb-4">
          <label htmlFor="examModule" className="block text-gray-700 font-bold mb-2">
            Exam Module:
          </label>
          <input
            type="text"
            id="examModule"
            name="examModule"
            value={formData.examModule}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
            required
          />
        </div>

        {/* Exam Date */}
        <div className="mb-4">
          <label htmlFor="examDate" className="block text-gray-700 font-bold mb-2">
            Exam Date:
          </label>
          <input
            type="date"
            id="examDate"
            name="examDate"
            value={formData.examDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
            required
          />
        </div>

        {/* Exam Duration */}
        <div className="mb-4">
          <label htmlFor="examDuration" className="block text-gray-700 font-bold mb-2">
            Exam Duration (in minutes):
          </label>
          <input
            type="number"
            id="examDuration"
            name="examDuration"
            value={formData.examDuration}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExamADD;
