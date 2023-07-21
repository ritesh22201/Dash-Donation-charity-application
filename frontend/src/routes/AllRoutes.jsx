import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AdminUsers from '../components/AdminUsers'
import AdminLogin from '../pages/AdminLogin'
import AdminSideBar from '../components/AdminSideBar'

const AllRoutes = () => {
  return (
    <div>
     <Routes>
      <Route path='/adminlogin' element={<AdminLogin/>} />
      {/* <Route path='/adminpage' element={<AdminSideBar/>} /> */}
     </Routes>
    </div>
  )
}

export default AllRoutes