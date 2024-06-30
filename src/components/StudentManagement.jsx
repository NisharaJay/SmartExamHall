import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAttendence } from "../requests/exams";

const StudentManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDegree, setSelectedDegree] = useState("IT");
  const [relevantData, setRelevantData] = useState([]);

  const fetchData = async () => {
    // Placeholder for data fetching logic
    // replace this with an actual API call to backend

    // Clear the relevant data while fetching new data
    setRelevantData([]);
    try {
      const res = await getAttendence(selectedDegree,selectedDate)
      console.log(res);
      setRelevantData(res)
    } catch (error) {
      console.log(error);
    }
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
    <div className="flex flex-wrap flex-col bg-[#D9D9D9] rounded-lg p-4 m-2">
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center mb-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-2xl bg-[#114960] text-black text-[16px] w-full sm:w-auto">
            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-0 w-full md:w-auto">
              <label className="mb-2 md:mb-0 font-bold text-white mr-4">Date:</label>
              <div className="w-full md:w-auto">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  className="w-full ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-0 w-full md:w-auto">
              <label className="mb-2 ml-4 md:mb-0 font-bold text-white mr-4">Degree:</label>
              <select
                value={selectedDegree}
                onChange={handleDegreeChange}
                className="w-full md:w-auto ring-1 ring-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-300 sm:mr-8"
              >
                <option value="IT">IT</option>
                <option value="ITM">ITM</option>
                <option value="AI">AI</option>
              </select>
            </div>

            <button
              onClick={handleSearchClick}
              className="p-2 bg-gray-200 hover:bg-gray-400 text-black font-bold rounded-lg px-6 py-2 uppercase"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-2">
        <h2 className="mb-4 font-bold text-[20px]">Attendance</h2>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          {relevantData.length > 0 ? (
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Index No</th>
                  <th className="py-2 px-4 border-b">Exam</th>
                  <th className="py-2 px-4 border-b">PC number</th>
                </tr>
              </thead>
              <tbody>
                {relevantData.map((data, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{data.student.name}</td>
                    <td className="py-2 px-4 border-b">{data.student.studentId}</td>
                    <td className="py-2 px-4 border-b">{data.exam.module}</td>
                    <td className="py-2 px-4 border-b">{data.pc.pcId}</td>
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
