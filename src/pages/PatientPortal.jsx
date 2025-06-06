import '../styles/PatientPortal.css';
import React from 'react';
import PatientDashboard from './PatientDashboard';
import styled from 'styled-components';
import UserIcon from '../components/UserIcon';
import { MedicalNotesIcon } from '../components/MedicalNotesIcon';
import LoginPage from './LoginPage';

const StyledText = styled.p`
    font-size: 1.2rem;
`;

const BackgroundContainer = styled.div`
    background-image: url('/HeadingImage.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const PatientPortal = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [hasLoggedIn, setHasLoggedIn] = React.useState(false);
    const handleLogin = () => {
        setHasLoggedIn(true);
    };

    const Loggedin = () => {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-icon">
                        <MedicalNotesIcon width="100px" height="100px" strokeColor="#2f44d1" />
                    </div>
                    <h2>Returning Patient</h2>
                    <StyledText>
                        If you are a <a className="auth-link" href="#">Returning Patient</a>, enter your username and password to access your patient profile.
                    </StyledText>
                    <button className="auth-button" onClick={() => setLoggedIn(true)}>
                        LOG IN &nbsp;❯
                    </button>
                </div>

                <div className="auth-card">
                    <div className="auth-icon">
                        <UserIcon width="100px" height="100px" strokeColor="#2f44d1" />
                    </div>
                    <h2>Create Account</h2>
                    <StyledText>
                        If you are a <a className="auth-link" href="#">New Patient</a>, create a new account to access your patient profile.
                    </StyledText>
                    <button className="auth-button">SIGN UP &nbsp;❯</button>
                </div>
            </div>
        );
    };

    return (
        <BackgroundContainer>
            {loggedIn && !hasLoggedIn ? (
                <LoginPage handleLogin={handleLogin} />
            ) : loggedIn && hasLoggedIn ? (
                <PatientDashboard />
            ) : (
                <Loggedin />
            )}
        </BackgroundContainer>
    );
};