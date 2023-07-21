import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/Admin/AdminPage';
import AdminUsers from '../components/AdminUsers';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminSideBar from '../components/AdminSideBar';
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
