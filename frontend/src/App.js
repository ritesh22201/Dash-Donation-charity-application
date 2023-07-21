import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import WithAction from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import AdminSideBar from './components/AdminSideBar';
import AdminPage from './pages/AdminPage';
import DonationList from './pages/donation';
import DonationModal from './pages/AddDonation';
import MoneyBox from './pages/DonationData';




function App() {
  return (
  <>
  {/* {/* <AdminSideBar/> */}
  {/* <AllRoutes/> */}
  {/* <SignupPage/> */}
  {/* <LoginPage/> */}
  <OrgCards/> */}
  <DonationList/>
  {/* <DonationModal/> */}
  <MoneyBox/>
  </>

  );
}

export default App;
