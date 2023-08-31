import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {
    const tokenData = JSON.parse(localStorage.getItem("ad-token")) || {}
    return tokenData.token ? children : <Navigate to="/adminlogin" />
}

export default AdminPrivateRoute