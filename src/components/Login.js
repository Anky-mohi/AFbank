import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for API calls
import './Login.css'; // Ensure the correct path

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', data);
      // Assuming the API returns user info including role on successful login
      if (response.status === 200) {
        alert('Login successful!');
        const { token, role } = response.data; // Assuming your API sends back a token and role

        // Store the token and role in localStorage or sessionStorage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role); // Store the user role

        // Redirect based on user role
        if (role === 'buyer') {
          navigate('/Buyer%20Dashboard/BuyerDashboard'); // Redirect to buyer dashboard
        } else if (role === 'seller') {
          navigate('/SellerDashboard/SellerDashboard'); // Redirect to seller dashboard
        } else {
          navigate('/dashboard'); // Default fallback
        }
      }
    } catch (error) {
      console.error("API Error: ", error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <motion.div 
      className="login-container" 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="login-form">
        <h2><FontAwesomeIcon icon={faSignInAlt} /> Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              {...register('email', { 
                required: "Email is required", 
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              {...register('password', { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
          </div>
          <button type="submit" className="button">Login</button>
        </form>
        <p className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        <p className="toggle-link">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
