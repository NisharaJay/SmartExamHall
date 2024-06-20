import React from 'react';
import ExamADD from './ExamADD';

function App() {
  return (
    <div style={{ backgroundColor: '#114960' }} className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue mb-6">Add Examination Form</h1>
        <ExamADD />
      </div>
    </div>
  );
}

export default App;



