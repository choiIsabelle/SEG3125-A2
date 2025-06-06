import React, { useState } from 'react';
import '../styles/BookingType.css';

const appointmentTypes = [
  { label: 'Check-Up', icon: '☑️' },
  { label: 'Dental', icon: '🦷' },
  { label: 'Grooming', icon: '✂️' },
  { label: 'Follow-Up', icon: '⏰' },
  { label: 'X-Ray', icon: '🩻' },
  { label: 'Vaccines', icon: '💉' },
];

export const BookingType = () => {
  const [selected, setSelected] = useState('Check-Up');

  return (
    <div className="appointment-container">
      <h1 className="appointment-title">Select an Appointment Type</h1>
      <div className="grid">
        {appointmentTypes.map(({ label, icon }) => (
          <div
            key={label}
            className={`card ${selected === label ? 'selected' : ''}`}
            onClick={() => setSelected(label)}
          >
            <div className="icon">{icon}</div>
            <div className="label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
