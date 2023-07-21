import React from 'react'

import Home from '../pages/Home'
import {Routes, Route} from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users/register" element={<SignupPage/>} />
      <Route path="/users/login" element={<LoginPage/>} />
    </Routes>

  )
}

export default AllRoutes