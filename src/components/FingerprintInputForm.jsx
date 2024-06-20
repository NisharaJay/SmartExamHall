import React from "react";

export const FingerprintInputForm = () => {
  return (
    <div className="flex w-full justify-center mt-0">
      <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 bg-[#D9D9D9D9] w-full max-w-4xl p-6 rounded-xl text-black">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 md:w-96 h-80"></div>
            <button className="inline-block bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-5 py-1.5 mt-4 mb-3 uppercase">
              Capture Finger
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-xl shadow-lg p-7 text-gray-600">
            <form action="" className="flex flex-col space-y-2">
              <button
                type="button"
                className=" bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
              >
                Check student
              </button>
              <div>
                <label htmlFor="" className="text-sm font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="ring-1  ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm font-bold">
                  Index Number:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm font-bold">
                  Degree:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm font-bold">
                  Batch:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-300"
                  readOnly
                />
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="reset"
                  className="inline-block self-start bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="inline-block self-end bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold rounded-lg px-6 py-2 uppercase"
                >
                  Assign
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
