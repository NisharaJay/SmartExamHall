import React, { useState } from 'react';
import  {FingerprintInputForm}  from './components/FingerprintInputForm'; // Import your FingerprintInputForm component

const HallConfiguration = ({ studentName, assignedHall }) => {
  const [selectedHall, setSelectedHall] = useState(null);
  const [currentForm, setCurrentForm] = useState(null);

  const handleHallClick = (hallNumber) => {
    setSelectedHall(hallNumber);
    setCurrentForm('FingerprintForm'); // Show the FingerprintInputForm when a hall is clicked
  };

  const handleBackClick = () => {
    setSelectedHall(null); // Reset selected hall to show the hall selection
    setCurrentForm(null); // Reset current form to null
  };

  return (
    <div className="flex flex-col items-center">
      
      {/* Conditionally render based on selectedHall state */}
      {selectedHall === null ? (
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Assigned Hall</h1>
          <div className="bg-gray-200 p-8 rounded-lg ">
            <p className="text-lg font-bold mb-3">Select Hall:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {[1, 2, 3, 4].map((hallNumber) => (
            <a
              href="#!"
              key={hallNumber}
              onClick={() => handleHallClick(hallNumber)}
              className={`p-6 rounded-lg shadow-lg flex items-center justify-center h-36 w-96 cursor-pointer ${
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
        </div>
      ) : (
        <div className="mb-2">
          <p className="text-xl font-bold items-center pb-2">Hall Number: 0{selectedHall}</p>
          <button
            className="fixed px-4 py-2 bg-[#114960] hover:bg-[#0f2f3b] text-white p-2 font-bold rounded-lg bottom-20 ml-[-167px]"
            onClick={handleBackClick} // Connect the back button to the handleBackClick function
          >
            Back
          </button>
          <FingerprintInputForm />
        </div>
      )}
    </div>
  );
};

export default HallConfiguration;
