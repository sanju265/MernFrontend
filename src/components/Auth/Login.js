import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth hook

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from context

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showInvalidAlert, setShowInvalidAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for showing success alert

  const { username, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify({ username, password });
      const res = await axios.post('http://localhost:5000/api/auth/login', body, config);

      localStorage.setItem('token', res.data.token); // Save token to local storage
      login(res.data.token); // Update context with token

      setShowSuccessAlert(true); // Show success alert on successful login

      setTimeout(() => {
        setShowSuccessAlert(false); // Hide success alert after 3 seconds
        navigate('/'); // Redirect to home page
      }, 3000); // Adjust timeout as needed

      setShowInvalidAlert(false); // Reset invalid alert state on successful login
    } catch (err) {
      console.error(err.response.data);
      setShowInvalidAlert(true); // Show invalid credentials alert on error
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {showInvalidAlert && (
        <div className="alert alert-danger" role="alert">
          Invalid credentials. Please try again.
        </div>
      )}
      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          Login successful! Redirecting...
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
