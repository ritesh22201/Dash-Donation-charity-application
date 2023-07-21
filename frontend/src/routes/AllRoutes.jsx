import React from 'react'

import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AdminUsers from '../components/AdminUsers'


import Home from '../pages/Home'
import PrivateRoutes from '../components/PrivateRoutes'
import DonationList from '../pages/donation'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
     <Route path='/private' element={<PrivateRoutes/>} >
      <Route path='/donatiuon' element={<DonationList/>} />
     </Route>
    </Routes>

  )
}

export default AllRoutes