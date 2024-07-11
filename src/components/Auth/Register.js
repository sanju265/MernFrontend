import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Register = () => {
  const { login } = useContext(AuthContext); // Use login function from context

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showAlert, setShowAlert] = useState(false); // State for showing alert

  const { username, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify({ username, email, password });
      const res = await axios.post('http://localhost:5000/api/auth/register', body, config);

      localStorage.setItem('token', res.data.token); // Save token to local storage
      login(res.data.token); // Update context with token

      setShowAlert(true); // Show alert on successful registration
    } catch (err) {
      console.error(err.response.data);
    }
  };

  // Function to handle alert dismissal and redirection
  const handleAlertDismiss = () => {
    setShowAlert(false);
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      {showAlert && (
        <div className="alert alert-success d-flex align-items-center" role="alert">
          <span className="flex-grow-1">Registration successful!</span>
          <button type="button" className="close" aria-label="Close" onClick={handleAlertDismiss}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
