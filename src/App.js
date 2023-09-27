import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

import ForgetPassword from "./components/ForgetPassword";
import PrivateComponent from "./components/PrivateComponent";
import About from "./components/About";
function App() {
  console.log("data", localStorage.getItem("user"));
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<About />} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>

          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
