import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthWrapper = ({ children }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        {children}
        <ToastContainer />
      </div>
    </div>
  );
};

export default AuthWrapper;
