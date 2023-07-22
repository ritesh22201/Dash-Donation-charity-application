import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/Admin/AdminPage';
import AdminUsers from '../components/AdminUsers';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminSideBar from '../components/AdminSideBar';
import Home from '../pages/Home';
import Donation from '../pages/Donation'
// import Home from '../pages/Home'
// import {Routes, Route} from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
  <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/donation" element={<Donation/>} />
      <Route path="/users/register" element={<SignupPage/>} />
      <Route path="/users/login" element={<LoginPage/>} />
    </Routes>
  )
}


export default AllRoutes;
