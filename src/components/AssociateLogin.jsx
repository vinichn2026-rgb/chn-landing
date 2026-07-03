import React, { useState } from 'react';
import { User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import './AssociateLogin.css';

export default function AssociateLogin() {
  const [formData, setFormData] = useState({ employeeId: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for authentication goes here
    console.log('Login attempt with', formData);
  };

  return (
    <div className="login-page">
      <div className="login-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon-wrapper">
              <ShieldCheck size={36} />
            </div>
            <h2>Associate Portal</h2>
            <p>Welcome back! Please enter your credentials to access your dashboard.</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="employeeId">Employee ID / Email</label>
              <div className="input-wrapper">
                <User className="input-icon" size={20} />
                <input 
                  type="text" 
                  id="employeeId" 
                  name="employeeId" 
                  placeholder="Enter your ID or Email"
                  value={formData.employeeId}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="input-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#forgot" className="forgot-password">Forgot Password?</a>
              </div>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <button type="submit" className="login-btn">
              Sign In <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="login-footer">
            <p>Need help? <a href="/contact">Contact IT Support</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
