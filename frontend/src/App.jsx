import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillExchangeNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>  {/* ✅ Ensure BrowserRouter wraps everything */}
      <SkillExchangeNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
