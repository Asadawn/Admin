import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hi", email, password);
    dispatch(loginUser(email, password));
  };

  return (
    <div className="body ">
      <div className="fixed circle rounded-full z-[-1] bg-blue-500"></div>

      <div className="flex flex-col items-center justify-center min-h-screen rounded-lg  bg-gray-200 text-gray-700">
        <h1 className="font-bold text-2xl">Welcome :)</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col bg-white rounded shadow-lg p-20 mt-12"
        >
          <label className="font-semibold text-sm">Username or Email</label>
          <input
            className="flex items-center h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="font-semibold text-sm mt-3">Password</label>
          <input
            className="flex items-center h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center h-12 px-6 w-80 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
          >
            Login
          </button>
          <div className="flex mt-6 justify-center text-sm">
            <p className="text-blue-400 hover:text-blue-500">
              <Link to="/forget"> Forgot Password</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
