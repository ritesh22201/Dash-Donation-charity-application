import React from 'react'

import AdminPage from '../pages/AdminPage'
import AdminUsers from '../components/AdminUsers'



import Donation from '../pages/Donation'
import Home from '../pages/Home'
import {Routes, Route} from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/donation" element={<Donation/>} />
      <Route path="/users/register" element={<SignupPage/>} />
      <Route path="/users/login" element={<LoginPage/>} />

    </Routes>

  )
}

export default AllRoutes