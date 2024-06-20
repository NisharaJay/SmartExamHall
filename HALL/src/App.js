import React, { useState, useEffect } from 'react';
import Hall from './Hall';

function App() {
  const [studentName, setStudentName] = useState('Student Name');
  const [assignedHall, setAssignedHall] = useState(1);

  // Simulate fetching data from a database
  useEffect(() => {
    // Replace this with actual data fetching logic
    // For example, fetching from an API and setting the state with response data
    setStudentName('Student Name');
    setAssignedHall(1);
  }, []);

  return (
    <div style={{ backgroundColor: '#114960' }} className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto p-6 bg-gray-100 rounded-lg border-4">
        <Hall studentName={studentName} assignedHall={assignedHall} />
      </div>
    </div>
  );
}

export default App;

