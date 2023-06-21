// adminlogin.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin({ setIsAdminAuthenticated }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://one23-8anx.onrender.com/api/auth/adminlogin', login);
      setIsAdminAuthenticated(true);
      localStorage.setItem('isAdminAuthenticated', 'true'); // Store admin login status in local storage
      navigate('/admindash');
    } catch (error) {
      alert(error.response.data);
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
        New customer? <Link to="/register">Sign-up</Link>
      </div>
    </div>
  );
}