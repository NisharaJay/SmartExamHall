import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StudentManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDegree, setSelectedDegree] = useState("IT");
  const [relevantData, setRelevantData] = useState([]);

  const fetchData = async () => {
    // Placeholder for data fetching logic
    // replace this with an actual API call to backend

    // Clear the relevant data while fetching new data
    setRelevantData([]);
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDegreeChange = (event) => {
    setSelectedDegree(event.target.value);
  };

  const handleSearchClick = () => {
    fetchData();
  };

  return (
    <div className="flex flex-col bg-[#D9D9D9] rounded-lg p-8 m-2">
      <div className="flex items-center space-x-4 mb-4 bg-gray-200 rounded-lg p-4">
        <div className="flex flex-col mr-3">
          <label className="mb-2 font-bold">Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="ring-1 ring-gray-300 rounded-md px-4 mb-2 py-2 outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold">Degree:</label>
          <select
            value={selectedDegree}
            onChange={handleDegreeChange}
            className="ring-1 ring-gray-300 rounded-md px-4 mb-2 py-2 outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="IT">IT</option>
            <option value="ITM">ITM</option>
            <option value="AI">AI</option>
          </select>
        </div>
        <div className="flex flex-col">
          <button 
            onClick={handleSearchClick} 
            className="mt-6 ml-3 p-2 bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full p-2">
        <h2 className="mb-4 font-bold text-lg">Attendance</h2>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          {relevantData.length > 0 ? (
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Index No</th>
                </tr>
              </thead>
              <tbody>
                {relevantData.map((student, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{student.name}</td>
                    <td className="py-2 px-4 border-b">{student.indexNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available for the selected date and degree.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
