import React from 'react';
import '../styles/ConfirmationMessage.css';

const ConfirmationMessage = () => {
  return (
    <div className="confirmation-container">
      <div className="checkmark-circle">
        <svg
          className="checkmark-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="80"
          height="80"
        >
          <path d="M20.29 6.71a1 1 0 0 0-1.41 0L10 15.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0l10-10a1 1 0 0 0 0-1.42z" />
        </svg>
      </div>
      <p className="confirmation-text">
        Your appointment for{' '}
        <span className="highlight">June 1 2025 at 9:00 am</span> is confirmed!
      </p>
    </div>
  );
};

export default ConfirmationMessage;
