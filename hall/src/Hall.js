import React, { useState } from 'react';

const Hall = ({ studentName, assignedHall }) => {
  const [selectedHall, setSelectedHall] = useState(null);

  const handleHallClick = (hallNumber) => {
    setSelectedHall(hallNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Assigned Hall</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {[1, 2, 3, 4].map((hallNumber) => (
          <a
            href={`/hall/${hallNumber}`} // URL for the specific hall page
            key={hallNumber}
            onClick={() => handleHallClick(hallNumber)}
            className={`p-6 rounded-lg shadow-lg flex items-center justify-center h-64 cursor-pointer ${
              assignedHall === hallNumber ? 'bg-blue-200' : 'bg-white'
            }`}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">Hall {hallNumber}</h2>
              {assignedHall === hallNumber && (
                <p className="text-xl text-gray-600 mt-4">{studentName}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hall;
