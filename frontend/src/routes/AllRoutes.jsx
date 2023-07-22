import React from 'react'

import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home';
import PrivateRoutes from '../components/PrivateRoutes';
import DonationList from '../pages/DonationList';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminPage from '../pages/Admin/AdminPage';
import Donation from '../pages/Donation'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path='/donation' element={<PrivateRoutes>
        <Donation /></PrivateRoutes>} />
      <Route path='/donationdata' element={<PrivateRoutes><DonationList/></PrivateRoutes>}></Route>
      <Route path="/users/register" element={<SignupPage />} />
      <Route path="/users/login" element={<LoginPage />} />
      <Route path="/" element={<Home/>} />
  <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>
  )
}


export default AllRoutes;