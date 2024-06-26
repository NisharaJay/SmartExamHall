import React, { useState, useEffect } from "react";

const ExamMode = () => {
  const [relevantData, setRelevantData] = useState([]);
  const [examInfo, setExamInfo] = useState({
    examName: "",
    degree: "",
    duration: "",
  });

  const fetchData = async () => {
    // Placeholder for data fetching logic
    // replace this with an actual API call to backend

    // Clear the relevant data while fetching new data
    setRelevantData([]);
    setExamInfo({ examName: "", degree: "", duration: "" });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-[#D9D9D9] rounded-lg mt-2 p-5">
      <div className="flex flex-col w-full p-2">
        <div className="flex justify-center items-center mt-[-10px] mb-5">
          <div className="flex flex-wrap p-1 rounded-2xl bg-[#114960] text-black text-[16px]">
            <p className="m-2 bg-gray-200 rounded-xl p-3 flex-1">
              <strong className="text-[17px]">Exam:</strong> <br />
              {examInfo.examName || "No exam information available"}
            </p>
            <p className="m-2 bg-gray-200 rounded-xl p-3 flex-1">
              <strong className="text-[17px]">Exam Duration:</strong> <br />
              {examInfo.duration || "No exam information available"}
            </p>
            <p className="m-2 bg-gray-200 rounded-xl p-3 flex-1">
              <strong className="text-[17px]">Degree:</strong> <br />
              {examInfo.degree || "No exam information available"}
            </p>
          </div>
        </div>
        <h2 className="mb-4 font-bold text-[22px]">Exam Attendance</h2>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          {relevantData.length > 0 ? (
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Index No</th>
                  <th className="py-2 px-4 border-b">PC Uptime</th>
                </tr>
              </thead>
              <tbody>
                {relevantData.map((student, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{student.name}</td>
                    <td className="py-2 px-4 border-b">{student.indexNo}</td>
                    <td className="py-2 px-4 border-b">{student.uptime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available for the current exam.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamMode;
