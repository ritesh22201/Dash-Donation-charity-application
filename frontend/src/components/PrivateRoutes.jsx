import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  const islogged=useSelector((store)=>{
    return store.authReducer.auth
  })
  return islogged?children:null;
}

export default PrivateRoutes