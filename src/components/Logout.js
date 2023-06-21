//logout.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout({ setIsAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(false);
    localStorage.setItem('isLoggedIn', 'false'); // Update user login status in local storage
    navigate('/');
  }, [navigate, setIsAuthenticated]);

  return null; // or you can render a logout message if needed
}