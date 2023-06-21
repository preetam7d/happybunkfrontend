//navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarStyless.css";

export default function Navbar({ isAuthenticated, isAdminAuthenticated, setAdminAuthenticated, setUserAuthenticated }) {
  const navigate = useNavigate();

  const handleAdminLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    setAdminAuthenticated(false);
    navigate("/");
  };

  const handleUserLogout = () => {
    // Add your user logout logic here
    setUserAuthenticated(false);
    // Redirect to the desired page after user logout
    navigate("/");
  };

  return (
    <nav className="NavbarItems">
      <Link to="/" className="preetam" ><h1 className="navbar-logo">Happy Bunk</h1></Link>
      <div className="menu-icons">
        <i className="fas fa-bars"></i>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/rooms">
            Rooms
          </Link>
        </li>
        <li>
          <Link className="nav-links" to="/contact">
            Contact
          </Link>
        </li>
        {!isAuthenticated ? (
          <li>
            <Link className="nav-links" to="/login">
              Login
            </Link>
          </li>
        ) : (
          <li>
            <Link className="nav-links" to="/logout" onClick={handleUserLogout}>
              Logout
            </Link>
          </li>
        )}
        {isAdminAuthenticated ? (
          <li>
            <Link className="nav-links" to="/logout" onClick={handleAdminLogout}>
              Admin Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link className="nav-links" to="/adminlogin">
              Admin Login
            </Link>
          </li>
        )}
        <li>
          <Link className="nav-links" to="/bookform">
            Book a Room
          </Link>
        </li>
      </ul>
    </nav>
  );
}