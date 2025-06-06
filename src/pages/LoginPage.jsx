import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = ({handleLogin}) => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email"  />
        <input type="password" placeholder="Password"  />
        <button 
            onClick={()=>handleLogin()}
            >
                Sign In
                </button>
        <p className="signup-link">
          Don’t have an account? Sign up
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
