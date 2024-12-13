import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to EmployWise User Management</h1>
      <p>Login to manage users efficiently.</p>
      <Link to="/login" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', borderRadius: '5px' }}>
        Go to Login
      </Link>
    </div>
  );
};

export default HomePage;
