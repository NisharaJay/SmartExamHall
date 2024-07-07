import React, { useState, useEffect } from "react";
import { getAllPcs } from "../requests/pcs.js";
import { getExamByID, manualAttendence } from "../requests/exams.js";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ExamMode = () => {
  const [relevantData, setRelevantData] = useState([]);
  const [pcs, setPcs] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);
  const { id } = useParams();
  const [examInfo, setExamInfo] = useState({
    examName: "",
    duration: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedPc, setSelectedPc] = useState(null);

  const [indexNumber, setIndexNumber] = useState("");
  const getColor = (active) => (active ? "#00FF00" : "#808080");

  const fetchPcsAndStudents = async () => {
    try {
      const pcsResponse = await getAllPcs();
      setPcs(pcsResponse.pcs);
      console.log("pcs", pcsResponse.pcs);
    } catch (error) {
      console.error("Error fetching PCs:", error);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const fetchData = async () => {
    try {
      // fetching exam information
      const res = await getExamByID(id);
      console.log(res);
      setExamInfo({
        examName: res.module,
        duration: res.duration,
      });
      const durationInSeconds = res.duration * 60;
      const savedStartTime = localStorage.getItem(`examStartTime_${id}`);
      const currentTime = Date.now();
      let timeElapsed;

      if (savedStartTime) {
        timeElapsed = Math.floor(
          (currentTime - parseInt(savedStartTime, 10)) / 1000
        );
      } else {
        localStorage.setItem(`examStartTime_${id}`, currentTime);
        timeElapsed = 0;
      }
      const remaining = durationInSeconds - timeElapsed;
      setRemainingTime(remaining > 0 ? remaining : 0);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleAssign = async () => {
    try {
      const response = await manualAttendence(indexNumber);
      // console.log("Attendance recorded:", response);
      const res = await response.json()
      if (response.status===200) {
        toast.success(`Student: ${res.studentId} was assigned to pc:${res.pcId}`,{
          duration:5000
        })
      }else{
        toast.error("Failed to assign student")
      }
    } catch (error) {
      console.error("Error recording attendance:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Clear interval on component unmount
    }
  }, [remainingTime]);

  useEffect(() => {
    fetchPcsAndStudents();
    const intervalId = setInterval(fetchPcsAndStudents, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handlePcClick = (pc) => {
    if (pc.assigned) {
      setSelectedPc(pc);
      setShowConfirm(true);
    }
  };

  const handleConfirm = () => {
    setPcs(
      pcs.map((pc) =>
        pc.id === selectedPc.id ? { ...pc, assigned: !pc.assigned } : pc
      )
    );
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setSelectedPc(null);
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-5">
        <div className="flex flex-wrap bg-[#d9d9d9] p-3 rounded-lg">
          <input
            type="text"
            placeholder="Enter Index Number"
            className="mr-2 px-3 py-2 border rounded-lg"
            value={indexNumber}
            onChange={(e) => setIndexNumber(e.target.value)}
          />
          <button
            className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold px-4 py-2 rounded-lg"
            onClick={handleAssign}
          >
            Assign
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-[#D9D9D9] rounded-lg mt-2 p-5 m-3">
        <div className="flex justify-center items-center mb-5 w-full">
          <div className="flex flex-wrap p-1 rounded-2xl bg-[#114960] text-black text-[16px] w-2/3">
            <p className="m-2 bg-gray-200 rounded-xl p-3 flex-1">
              <strong className="text-[17px]">Exam Module:</strong> <br />
              {examInfo.examName || "No exam information available"}
            </p>
            <p className="m-2 bg-gray-200 rounded-xl p-3 flex-1">
              <strong className="text-[17px]">Exam Duration:</strong> <br />
              {examInfo.duration || "No exam information available"} minutes
            </p>
            <p className="m-2 bg-gray-200 rounded-xl p-3 flex-1">
              <strong className="text-[17px]">Remaining time:</strong> <br />
              <strong className="text-[20px] text-red-700 font-semibold p-2 rounded-md ">
                {formatTime(remainingTime) || "0:00"}
              </strong>
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
                    {/* <td className="py-2 px-4 border-b">{student.uptime}</td>*/}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available for the current exam.</p>
          )}
        </div>
      </div>

      <div className="m-3 bg-[#D9D9D9] rounded-lg mt-4 p-5 px-8">
      <div className="m-3 bg-[#D9D9D9] rounded-lg mt-4 p-5 px-8">
        <h2 className="mb-4 font-bold text-[22px]">PC Assignment</h2>
        <div className="bg-white rounded-lg p-4 overflow-y-scroll flex justify-center items-center">
        {pcs.length > 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 600 600" // Adjust viewBox as necessary
          >
            {pcs.map((pc, index) => {
              const colIndex = index % 5;
              const rowIndex = Math.floor(index / 10);
              const isLeft = (index % 10) < 5;
        
              // Determine the label for each row
              const labelIndex = Math.floor(index / 5);
              const label = String.fromCharCode(65 + labelIndex);
        
              return (
                <g key={index}
                onClick={() => handlePcClick(pc)}
                style={{ cursor: pc.assigned ? "pointer" : "default" }}
                >
                  {colIndex === 0 && (
                    
                    <text
                      x={isLeft ? 0 : 295} // Adjust position for left and right side labels
                      y={rowIndex * 40 + 12} // Adjust text vertical position based on row index
                      fontSize="8" // Font size for row label
                      fontWeight="bold" // Bold font for row label
                      fill="black"
                      textAnchor="start"
                      alignmentBaseline="middle"
                    >
                      {label} 
                    </text>
                  )}
                  <svg
                    x={isLeft ? colIndex * 50 : colIndex * 50 + 300} // Adjust horizontal position for right column
                    y={rowIndex * 40} // Adjust vertical position based on row index
                    width="40"
                    height="30" // Adjust size
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    stroke={getColor(pc.assigned)}
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                    />
                  </svg>
                  <text
                    x={isLeft ? colIndex * 50 + 20 : colIndex * 50 + 320} // Adjust text position for right column
                    y={12 + rowIndex * 40} // Adjust text vertical position based on row index
                    fontSize="7" // Smaller font size
                    fontWeight="normal" // Less bold
                    fill="black"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                  >
                    {pc.id}
                  </text>
                </g>
              );
            })}
            </svg>
          ) : (
            <p>No PCs available.</p>
          )}
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-xl shadow-lg">
            <p className="mb-4 font-bold p-2 text-lg">
              Are you sure to revoke PC {selectedPc.id}?
            </p>
            <div className="flex justify-between">
              <button
                className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamMode;
