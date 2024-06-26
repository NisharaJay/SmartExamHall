import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);

  useEffect(() => {
    // Fetch existing students and notification settings from the database
    fetch('/api/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));

    fetch('/api/notifications')
      .then(response => response.json())
      .then(data => setEmailNotifications(data.emailNotifications))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  const handleAddStudent = () => {
    fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newStudent }),
    })
      .then(response => response.json())
      .then(student => {
        setStudents([...students, student]);
        setNewStudent('');
      })
      .catch(error => console.error('Error adding student:', error));
  };

  const handleRemoveStudent = (id) => {
    fetch(`/api/students/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch(error => console.error('Error removing student:', error));
  };

  const handleNotificationChange = () => {
    fetch('/api/notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailNotifications: !emailNotifications }),
    })
      .then(() => {
        setEmailNotifications(!emailNotifications);
      })
      .catch(error => console.error('Error updating notifications:', error));
  };

  const handleSubmitTicket = () => {
    const ticketDetails = prompt('Enter your ticket details:');
    if (ticketDetails) {
      fetch('/api/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ details: ticketDetails }),
      })
        .then(response => response.json())
        .then(data => alert('Ticket submitted successfully'))
        .catch(error => console.error('Error submitting ticket:', error));
    }
  };

  return (
    <div style={{ backgroundColor: '#114960' }} className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto p-6 bg-white rounded-lg border border-gray-300 shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-black-700">Settings</h1>

        {/* Add/Remove Students */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Add/Remove Students</h2>
          <div className="flex mb-2">
            <input
              type="text"
              value={newStudent}
              onChange={(e) => setNewStudent(e.target.value)}
              placeholder="Enter student name"
              className="border p-2 mr-2 flex-1"
            />
            <button
              onClick={handleAddStudent}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Student
            </button>
          </div>
          <ul>
            {students.map((student) => (
              <li key={student.id} className="flex justify-between mb-2">
                {student.name}
                <button
                  onClick={() => handleRemoveStudent(student.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Notifications and Alerts */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notifications and Alerts</h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={handleNotificationChange}
              className="mr-2"
            />
            <label>Enable Email Notifications</label>
          </div>
        </div>

        {/* Support and Help */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Support and Help</h2>
          <p>If you need help, please contact support.</p>
          <button
            onClick={handleSubmitTicket}
            className="bg-blue-500 text-white p-2 rounded mt-2"
          >
            Submit a Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
