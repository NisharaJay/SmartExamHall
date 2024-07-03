import React, { useState, useEffect } from "react";

const ExamMode = () => {
  const [relevantData, setRelevantData] = useState([]);
  const [pcs, setPcs] = useState([]);
  const [examInfo, setExamInfo] = useState({
    examName: "",
    degree: "",
    duration: "",
  });

  const fetchData = async () => {
    // Placeholder for data fetching logic
    // Replace this with an actual API call to backend
    try {
      // fetching exam information
      const response = await fetch("/api/exam-info");
      if (!response.ok) {
        throw new Error("Failed to fetch exam information");
      }
      const data = await response.json();
      setExamInfo({
        examName: data.examName,
        degree: data.degree,
        duration: data.duration,
      });

      // fetching relevant data for exam attendance
      const attendanceResponse = await fetch("/api/exam-attendance");
      if (!attendanceResponse.ok) {
        throw new Error("Failed to fetch exam attendance data");
      }
      const attendanceData = await attendanceResponse.json();
      setRelevantData(attendanceData);

      // fetching PCs assignment data
      const pcsResponse = await fetch("/api/pcs");
      if (!pcsResponse.ok) {
        throw new Error("Failed to fetch PC assignment data");
      }
      const pcsData = await pcsResponse.json();
      setPcs(pcsData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mb-5">
        <div className="flex flex-wrap bg-[#d9d9d9] p-3 rounded-lg">
          <input
            type="text"
            placeholder="Enter Index Number"
            className="mr-2 px-3 py-2 border rounded-lg"
          />
          <button className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold px-4 py-2 rounded-lg">
            Assign
          </button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-2/3 bg-[#D9D9D9] rounded-lg mt-2 p-5">
          <div className="flex justify-center items-center mb-5">
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

        <div className="ml-5 w-1/3 bg-[#D9D9D9] rounded-lg mt-2 p-5">
          <h2 className="mb-4 font-bold text-[22px]">PC Assignment</h2>
          <div className="bg-white rounded-lg p-4">
            {pcs.length > 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 400 200" // Adjusted height to 200 for smaller boxes
              >
                {pcs.map((pc, index) => (
                  <g key={index}>
                    <rect
                      x={(index % 4) * 100}
                      y={Math.floor(index / 4) * 50} // Adjusted height to 50
                      width="80"
                      height="40" // Adjusted height to 40
                      fill={pc.active ? "#00C49F" : "#FFBB28"}
                    />
                    <text
                      x={(index % 4) * 100 + 40} // Centered text horizontally
                      y={Math.floor(index / 4) * 50 + 25} // Centered text vertically
                      fontSize="12" // Adjusted font size
                      fontWeight="bold"
                      fill="black"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                    >
                      {pc.name}
                    </text>
                  </g>
                ))}
              </svg>
            ) : (
              <p>No PCs available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamMode;
