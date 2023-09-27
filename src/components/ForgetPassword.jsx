import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Password reset request:", email);
  };

  return (
    <div className="body">
      <div className="fixed circle rounded-full z-[-1] bg-blue-500"></div>
      <div className="min-h-screen flex items-center justify-center rounded-lg  bg-gray-200">
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-6">Forget Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-4 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full h-10 bg-blue-600 rounded text-sm text-white font-semibold hover:bg-blue-700"
              >
                Reset Password
              </button>
            </div>
            <div className="flex mt-6 justify-center text-sm">
              <p className="text-blue-400 hover:text-blue-500">
                <Link to="/login"> Back to Login Page</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
