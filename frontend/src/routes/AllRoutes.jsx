import React from 'react'

import AdminPage from '../pages/AdminPage'
import AdminUsers from '../components/AdminUsers'


import Home from '../pages/Home'
import {Routes, Route} from "react-router-dom"
import Donation from '../pages/Donation'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/donation" element={<Donation/>} />
    </Routes>

  )
}

export default AllRoutes