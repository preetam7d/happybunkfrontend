//login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://65.0.127.9:5000/api/auth/login', login);
      setIsAuthenticated(true);
      localStorage.setItem('isLoggedIn', true); // Store login status
      navigate('/'); // Redirect to homepage or desired route
    } catch (error) {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login">
      <h2 className="loghead">Sign-In</h2>
      <form onSubmit={handleSubmit} className="loginform">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          required
        />

        <input className="logmainbtn" type="submit" value="Login" />
      </form>
      <div className="createanact">
        New user? <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
}