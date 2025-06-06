import React from 'react';
import '../styles/AccountDashboard.css'; 
import { BookingPortal } from './BookingPortal';

function getRandomDate() {
    const start = new Date(2025, 0, 1); // Start of the year 2025
    const end = new Date(2025, 11, 31); // End of the year 2025
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    return `${randomDate.getDate()}/${randomDate.getMonth() + 1}/${randomDate.getFullYear()}`;
}

export default function AccountDashboard() {
    const [openBooking, setOpenBooking] = React.useState(false);
    return openBooking ? (
        <BookingPortal/>
    ) : (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>My Account</h2>
                <ul className="menu">
                    <li>Upcoming Appointments</li>
                    <li className="active">Appointment History</li>
                    <li>Documents</li>
                    <li>Appointment History</li>
                    <li>Payment Method</li>
                    <li>Payment History</li>
                </ul>
                <button 
                        className="book-btn"
                        onClick={() => setOpenBooking(true)}
                        >
                        📅 Book Appointment
                </button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h2>Upcoming Appointments</h2>

                <div className="reminder-box">
                    <strong>Reminder</strong><br />
                    Kiki has an appointment on <span className="highlight">May 30 at 9:00 AM PST with Dr. O’Harre.</span>
                </div>

                <div className="appointments-table">
                    <div className="table-header">
                        <div>Date</div>
                        <div>Visit Type</div>
                        <div>Appointment Notes</div>
                    </div>

                    {[...Array(4)].map((_, i) => (
                        <div className="table-row" key={i}>
                            <div className={`cell ${i === 0 ? 'selected' : ''}`}>{getRandomDate()}</div>
                            <div className="cell">{['Check-up', 'Follow-up', 'Emergency', 'Grooming'][i]}</div>
                            <div className="cell">
                                {i === 0 ? (
                                    <>
                                        Dr. O’Harre inspected Kiki at 9:00 am...
                                        <button className="notes-btn">
                                            Read Full Notes ↗
                                        </button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
