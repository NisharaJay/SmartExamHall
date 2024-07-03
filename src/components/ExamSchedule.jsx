import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamSchedule = () => {
  const [exams, setExams] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching data from API
    fetch('/api/exams')
      .then(response => response.json())
      .then(data => setExams(data))
      .catch(error => console.error('Error fetching exams:', error));
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleActivate = (examID) => {
    navigate('/confirmation', {
      state: {
        message: 'Are you sure you want to activate this exam?',
        examID: examID,
        onConfirmPath: '/', // Adjust the path as necessary
        onCancelPath: '/',  // Adjust the path as necessary
      }
    });
  };

  return (
    <div style={{ backgroundColor: '#114960' }} className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto p-6 bg-gray-100 rounded-lg border-4">
        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">Exam Schedule</h1>

        {/* Table displaying exam schedule */}
        <div className="overflow-x-auto mx-8">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-3 px-6 border-b">Date & Time</th>
                <th className="py-3 px-6 border-b">Subject</th>
                <th className="py-3 px-6 border-b">Duration</th>
                <th className="py-3 px-6 border-b">Special Instructions</th>
                <th className="py-3 px-6 border-b">Activate</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam) => (
                <tr key={exam.id}>
                  <td className="py-3 px-6 border-b whitespace-nowrap">{new Date(exam.date).toLocaleString()}</td>
                  <td className="py-3 px-6 border-b whitespace-nowrap">{exam.subject}</td>
                  <td className="py-3 px-6 border-b whitespace-nowrap">{exam.duration} minutes</td>
                  <td className="py-3 px-6 border-b whitespace-nowrap">{exam.instructions}</td>
                  <td className="py-3 px-6 border-b whitespace-nowrap">
                    <button
                      onClick={() => handleActivate(exam.id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Activate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
