import React, { useState } from "react";
import img from "./login.png";
import { loginAdmin } from "./requests/admin";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate= useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    let formIsValid = true;
    let newErrors = { email: '', password: '' };
    setLoginError('');

    if (!email) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      if (formIsValid) {
        
        try {
          const res = await loginAdmin(email,password)
          if (res===200) {
            navigate('/')
            
          }else{
            console.log(res);
          }
       } catch (error) {
         console.log(error);
    }
  };
}
  }

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0 bg-gray-200">
      <div className="flex bg-white rounded-xl shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address:
              </label>
              <input
                className={`text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-2 focus:outline-gray-300 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                type="text" // Changed to text as email is 'admin'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
              </div>
              <input
                className={`text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:outline-2 focus:outline-gray-300 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mt-8">
              <button
                className="bg-[#114960] hover:bg-[#0f2f3b] text-white font-bold py-2 px-4 w-full rounded-lg"
                type="submit"
              >
                Login
              </button>
              {loginError && (
                <p className="text-red-500 text-sm mt-1">{loginError}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
