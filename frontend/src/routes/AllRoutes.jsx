import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/Admin/AdminPage';
import AdminLogin from '../pages/Admin/AdminLogin';
import Donation from '../pages/Donation';
import Home from '../pages/Home'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import PrivateRoutes from '../components/PrivateRoutes';
// import DonationList from '../pages/DonationList';
import AdminPrivateRoute from '../components/AdminPrivateRoute';
import DonationData from '../pages/DonationData';
import PageNotFound from '../components/PageNotFound';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
      <Route path="/users/register" element={<SignupPage />} />
      <Route path="/users/login" element={<LoginPage />} />
      <Route path='/donation' element={<PrivateRoutes>
        <Donation />
      </PrivateRoutes>} />
      <Route path='/donationdata' element={<PrivateRoutes>
        <DonationData />
      </PrivateRoutes>}>
      </Route>
      <Route
        path="/admin"
        element={
          <AdminPrivateRoute>
            <AdminPage />
          </AdminPrivateRoute>
        }
      />
    </Routes>
  )
}




export default AllRoutes;