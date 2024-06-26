import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    stu_id: '',
    name: '',
    degree: 'IT',
    batch: '',
    fingerprint: 12345
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://7cb1-2407-c00-c003-5ffe-f10a-7b8e-5ae5-4b62.ngrok-free.app/api/v1/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data successfully submitted!');
        
        setFormData({
          name: '',
          stu_id: '',
          degree: 'IT',
          batch: '',
          fingerprint: 1234
        });
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 bg-gray-200 rounded-lg shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
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
          <label htmlFor="stu_id" className="block text-gray-700 font-bold mb-2">Index Number:</label>
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
          <label htmlFor="degree" className="block text-gray-700 font-bold mb-2">Degree:</label>
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
          <label htmlFor="batch" className="block text-gray-700 font-bold mb-2">Batch:</label>
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

        <button type="submit" className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 rounded-lg mt-4 focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;

