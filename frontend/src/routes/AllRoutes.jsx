import React from 'react';
import { Route, Routes , Switch } from 'react-router-dom';
import AdminPage from '../pages/Admin/AdminPage';
import AdminLogin from '../pages/Admin/AdminLogin';
import Home from '../pages/Home';
import Donation from '../pages/Donation'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import AdminSideBar from '../components/AdminSideBar';

const AllRoutes = () => {
  return (
    <>
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminSideBar />} />

      {/* <Route path='/admin' element={<AdminPage/>} /> */}
      <Route path="/donation" element={<Donation/>} />
      <Route path="/users/register" element={<SignupPage/>} />
      
    </Routes>
   
    </>
  )
}

export default AllRoutes;
