import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import AdminSideBar from './components/AdminSideBar';
import AdminPage from './pages/AdminPage';
import DonationList from './pages/donation';
import DonationModal from './pages/AddDonation';
import MoneyBox from './pages/DonationData';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import OrgCards from './components/OrgCards';
import Organization from './pages/Organization';



function App() {
  return (

  <>
    <Navbar/>
  <AllRoutes/>
  </>

  );
}

export default App;