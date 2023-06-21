import React, { useState } from 'react';
import axios from 'axios';
import './Contactus.css';

function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a complaint object
    const complaint = {
      name,
      email,
      subject,
      message,
    };

    // Send a POST request to the backend
    axios.post('https://one23-8anx.onrender.com/complaints', complaint)
      .then((res) => {
        console.log(res.data);
        alert('submitted successfully',res.data)
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h1>Send a Message to us if you have any complaint</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contactus;
