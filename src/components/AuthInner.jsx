import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import SignUp from './register';
import Profile from './profile';

const AuthInner = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AuthInner;
