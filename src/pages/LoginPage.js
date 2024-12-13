import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="center" style={{ height: '100vh' }}>
      <div className="card" style={{ width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
