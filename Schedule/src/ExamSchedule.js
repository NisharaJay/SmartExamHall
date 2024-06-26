import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AddToCalendar from 'react-add-to-calendar';

const ExamSchedule = () => {
  const [exams, setExams] = useState([
    { id: 1, date: new Date(2024, 6, 1, 10, 0), subject: 'Mathematics', duration: 90, instructions: 'Bring your own calculator.' },
    { id: 2, date: new Date(2024, 6, 2, 14, 0), subject: 'History', duration: 120, instructions: 'No materials allowed.' },
    { id: 3, date: new Date(2024, 6, 3, 9, 0), subject: 'Science', duration: 60, instructions: 'Lab coats required.' }
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Simulating fetching data from API
    const mockExams = [
      { id: 1, date: new Date(2024, 6, 1, 10, 0), subject: 'Mathematics', duration: 90, instructions: 'Bring your own calculator.' },
      { id: 2, date: new Date(2024, 6, 2, 14, 0), subject: 'History', duration: 120, instructions: 'No materials allowed.' },
      { id: 3, date: new Date(2024, 6, 3, 9, 0), subject: 'Science', duration: 60, instructions: 'Lab coats required.' }
    ];

    // Setting state with mock data (replace with actual fetch call)
    setExams(mockExams);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ backgroundColor: '#114960' }} className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto p-6 bg-gray-100 rounded-lg border-4">
        <h1 className="text-3xl font-semibold text-center text-blue mb-6">Exam Schedule</h1>

        {/* Table displaying exam schedule */}
        <div className="overflow-x-auto mx-8">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-3 px-6 border-b">Date & Time</th>
                <th className="py-3 px-6 border-b">Subject</th>
                <th className="py-3 px-6 border-b">Duration</th>
                <th className="py-3 px-6 border-b">Special Instructions</th>
                <th className="py-3 px-6 border-b">Add to Calendar</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam) => (
                <tr key={exam.id}>
                  <td className="py-3 px-6 border-b">{exam.date.toLocaleString()}</td>
                  <td className="py-3 px-6 border-b">{exam.subject}</td>
                  <td className="py-3 px-6 border-b">{exam.duration} minutes</td>
                  <td className="py-3 px-6 border-b">{exam.instructions}</td>
                  <td className="py-3 px-6 border-b">
                    <AddToCalendar
                      event={{
                        title: exam.subject,
                        description: exam.instructions,
                        location: 'Exam Hall',
                        startTime: exam.date,
                        endTime: new Date(exam.date.getTime() + exam.duration * 60000)
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Calendar component */}
        <div className="mt-6 mx-auto" style={{ width: 'fit-content' }}>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
