import React, { useState } from 'react';
import { registerUser } from '../auth';
import axios from '../api/axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/users/register', {
        username,
        email,
        password,
      });
      // Handle the response data
    } catch (error) {
      // Handle the error
    }
    // const isValid = registerUser(username, password);
    // if (!isValid) {
    //   setError('Username already exists');
    // } else {
    //   // Registration successful, redirect to login page
    //   window.location.href = '/login';
    // }
  };

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;