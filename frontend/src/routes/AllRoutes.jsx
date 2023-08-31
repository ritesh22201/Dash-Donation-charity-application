import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/Admin/AdminPage';
import AdminLogin from '../pages/Admin/AdminLogin';
import Donation from '../pages/Donation';
import Home from '../pages/Home'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import PrivateRoutes from '../components/PrivateRoutes';
import AdminPrivateRoute from '../components/AdminPrivateRoute';
import DonationList from '../pages/DonationList';
import Modals from '../components/Modals';
import Organization from '../pages/Organization';
import Payment from '../pages/Payment';
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
      <Route path='/organization' element={<PrivateRoutes>
        <Organization />
      </PrivateRoutes>} />
      <Route path='/Modals' element={<PrivateRoutes>
        <Modals />
      </PrivateRoutes>} />
      <Route path='/donationdata' element={<PrivateRoutes>
        <DonationList />
      </PrivateRoutes>} />
      <Route path='/payment' element={<PrivateRoutes>
        <Payment />
      </PrivateRoutes> } />

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

