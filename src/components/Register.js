import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [register, setRegister] = useState({ name: '', username: '', email: '', password: '' });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // Perform email and password validation here
        const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        
        if (!emailRegex.test(register.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!strongPasswordRegex.test(register.password)) {
            alert('Please enter a strong password. It should contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.');

            return;
        }


        // If email and password are valid, proceed with registration
        axios.post(`http://65.0.127.9:5000/api/auth/register`, register)
            .then(res => {
                alert(res.data);
                navigate('/login');
            })
            .catch(err => alert(err.response.data));
    }

    return (
        <div className='register'>
            <div className="loginadmin"><Link to='/adminlogin'>Login as Admin</Link></div>
            <h2 className="regishead">Sign-up</h2>
            <form className="regisform" onSubmit={submitHandler}>
                <label htmlFor="name">Name: <br />
                    <input type="text" name='name' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="username">Username: <br />
                    <input type="text" name='username' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="email">Email: <br />
                    <input type="text" name='email' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="password">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} autoComplete='off' required />
                </label>
                <input className='regisbtn' type="submit" value="Register" />
            </form>
            <div className="already">Already have an account? <Link to='/login'>Sign-In</Link></div>
        </div>
    )
}
