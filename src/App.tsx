import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import UsersPage from './pages/UsersPage/UsersPage';
import EditUser from './pages/EditUserPage/EditUserPage';
import './App.css';

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
