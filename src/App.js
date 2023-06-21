// app.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AdminLogin from "./components/AdminLogin";
import Rooms from "./components/Rooms";
import Register from "./components/Register";
import Admindash from "./components/Admindash";
import Contact from "./components/Contact";
import BookForm from "./components/BookForm";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./App.css";
import "./index.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    localStorage.getItem("isAdminAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("isAdminAuthenticated", isAdminAuthenticated);
  }, [isAdminAuthenticated]);

  return (
    <div>
      <Router>
        <Navbar
          isAuthenticated={isLoggedIn}
          isAdminAuthenticated={isAdminAuthenticated}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsLoggedIn} />}
          />
          <Route
            path="/adminlogin"
            element={<AdminLogin setIsAdminAuthenticated={setIsAdminAuthenticated} />}
          />
          <Route exact path="/admindash" element={<Admindash />} />
          <Route
            exact
            path="/bookform"
            element={<BookForm isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/logout"
            element={<Logout setIsAuthenticated={setIsLoggedIn} />}
          />
        </Routes>
      </Router>
    </div>
  );
}