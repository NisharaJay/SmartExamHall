import React from "react";
import img from "./login.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-xl shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-2 focus:outline-gray-300"
              type="email"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-2 focus:outline-gray-300"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 w-full rounded-lg">
              Login
            </button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Login;
