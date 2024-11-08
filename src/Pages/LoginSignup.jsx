import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form className="loginsignup-fields">
          <input
          type="text"placeholder="Your Name"/>
          <input
            type="email"placeholder="Email Address" />
          <input
            type="password"placeholder="Password"/>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
