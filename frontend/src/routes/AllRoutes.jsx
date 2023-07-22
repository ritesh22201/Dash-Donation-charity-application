import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/Admin/AdminPage';
import AdminUsers from '../components/AdminUsers';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminSideBar from '../components/AdminSideBar';
import Home from '../pages/Home';
import Donation from '../pages/Donation'
import Home from '../pages/Home'
import { Routes, Route } from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import Organization from '../pages/Organization';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/users/register" element={<SignupPage />} />
      <Route path='/organization' element={<Organization />} />
      <Route path="/users/login" element={<LoginPage />} />
      <Route path='/donation' element={<PrivateRoutes>
        <Donation />
      </PrivateRoutes>} />
      <Route path='/donationdata' element={<PrivateRoutes>
        <DonationList />
      </PrivateRoutes>}>
      </Route>
    </Routes>
  )
}


export default AllRoutes;
