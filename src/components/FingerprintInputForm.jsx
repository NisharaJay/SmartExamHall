import React from "react";

export const FingerprintInputForm = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#D9D9D9D9] w-full max-w-4xl p-8 rounded-xl shadow-lg text-black">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <button className="inline-block bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-5 py-1.5 mt-4 mb-3 uppercase">
              Capture Finger
            </button>
            <div className="bg-white rounded-xl shadow-lg p-8 md:w-96 h-80"></div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
            <h3 className="font-bold text-1xl tracking-wide mb-3">
              Student Details
            </h3>
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Name:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm">
                  Registration Number:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm">
                  Course:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm">
                  Faculty:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div className="flex justify-between">
                <button className="inline-block self-start bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase">
                  Clear
                </button>
                <button className="inline-block self-end bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
