import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Admindash.css"


export default function Admindash() {
    const [users, setusers] = useState([]);
    const [formData, setFormData] = useState([]);
    const [complaints, setComplaints] = useState([]);

    const deleteHandler = (id) => {
        axios.delete(`http://65.0.127.9:5000/api/user/${id}`).then(res => window.location.reload(false));
    }
    useEffect(() => {
        axios.get('http://65.0.127.9:5000/api/user').then(res => setusers(res.data));
    }, [])
    
  useEffect(() => {
    fetchFormData();
    fetchComplaints();
  }, []);

    const fetchFormData = async () => {
        try {
          const response = await axios.get('http://65.0.127.9:5000/api/formData');
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching form data:', error);
        }
      };

      const fetchComplaints = async () => {
        try {
          const response = await axios.get('http://65.0.127.9:5000/api/complaints');
          setComplaints(response.data);
        } catch (error) {
          console.error('Error fetching complaints:', error);
        }
      };
      const deleteComplaint = async (id) => {
        try {
          await axios.delete(`http://65.0.127.9:5000/api/complaints/${id}`);
          fetchComplaints();
        } catch (error) {
          console.error('Error deleting complaint:', error);
        }
      };
    
  return (
    <>
    <span>
    <div className='qwe'>
        <h2>Users</h2>
        {users.length > 0 && users.map(user => {
            return(
                <div key={user._id} className="user">
                    <div className="name"><h3>Name</h3>{user.name}</div>
                    <div className="username"><h3>Username</h3>{user.name}</div>
                    <div className="usermail"><h3>usermail</h3>{user.email}</div>
                    <div className="deltebtn"><button onClick={() => deleteHandler(user._id)}>Delete</button></div>
                </div>
            )
        })} 
    </div>
    <div className="admin-dashboard">
      <h2>Booking Details</h2>
      {formData.length > 0 ? (
        formData.map((data) => (
          <div key={data._id} className="form-data">
            <div className="name">
              <h3>Name</h3>
              {data.name}
            </div>
            <div className="email">
              <h3>Email</h3>
              {data.email}
            </div>
            <div className="username">
              <h3>Username</h3>
              {data.username}
            </div>
            <div className="accommodationType">
              <h3>Accommodation Type</h3>
              {data.accommodationType}
            </div>
            <div className="roomNumber">
              <h3>Room Number</h3>
              {data.roomNumber}
            </div>
            <div className="acPreference">
              <h3>AC Preference</h3>
              {data.acPreference}
            </div>
            <div className="fixedAmount">
              <h3>Fixed Amount</h3>
              {data.fixedAmount}
            </div>
            {/* <div className="delete-btn">
              <button onClick={() => deleteFormData(data._id)}>Delete</button>
            </div> */}
          </div>
        ))
      ) : (
        <p>No form data found.</p>
      )}

      <h2>Complaints</h2>
      {complaints.length > 0 ? (
        complaints.map((complaint) => (
          <div key={complaint._id} className="complaint">
            <div className="name">
              <h3>Name</h3>
              {complaint.name}
            </div>
            <div className="email">
              <h3>Email</h3>
              {complaint.email}
            </div>
            <div className="subject">
              <h3>Subject</h3>
              {complaint.subject}
            </div>
            <div className="message">
              <h3>Message</h3>
              {complaint.message}
            </div>
            <div className="delete-btn">
              <button onClick={() => deleteComplaint(complaint._id)}>Solved</button>
            </div>
          </div>
        ))
      ) : (
        <p>No complaints found.</p>
      )}
    

    </div>
    </span>
    </>
  )
}
