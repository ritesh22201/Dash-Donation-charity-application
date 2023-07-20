import React from 'react'

import { Route, Routes } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AdminUsers from '../components/AdminUsers'


import Home from '../pages/Home'
import {Routes, Route} from "react-router-dom"
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>

  )
}

export default AllRoutes