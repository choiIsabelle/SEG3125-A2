import React from 'react';
import '../styles/AppointmentForm.css';

const AppointmentForm = () => {
  return (
    <div className="appointment-container">
      <h2 className="appointment-notes">Add Appointment Notes</h2>
      <div className="form-content">
        <div className="left-section">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="How can we help you?"
            rows="8"
          ></textarea>
        </div>
        <div className="right-section">
          <div className="input-group">
            <label>FULL NAME</label>
            <input type="text" placeholder="First and last name" />
          </div>
          <div className="input-group">
            <label>PHONE NUMBER</label>
            <input type="text" placeholder="Phone number" />
          </div>
          <div className="input-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="Email address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
