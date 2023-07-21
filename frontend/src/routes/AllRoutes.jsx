import React from 'react'

import Home from '../pages/Home'
import {Routes, Route} from "react-router-dom"
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import PrivateRoutes from '../components/PrivateRoutes'
import DonationList from '../pages/donation'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
     <Route path='/private' element={<PrivateRoutes/>} >
      <Route path='/donatiuon' element={<DonationList/>} />
     </Route>
      <Route path="/users/register" element={<SignupPage/>} />
      <Route path="/users/login" element={<LoginPage/>} />
    </Routes>

  )
}

export default AllRoutes