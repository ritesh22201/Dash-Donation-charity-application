import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import AdminSideBar from './components/AdminSideBar';
import AdminPage from './pages/AdminPage';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';


import OrgCards from './components/OrgCards';



function App() {
  return (

  //  <LoginPage/>
  // <SignupPage/>
  <>
  {/* <AdminSideBar/> */}
  <Navbar/>
  <AllRoutes/>

  {/* <AdminSideBar/> */}
  {/* <AllRoutes/> */}
  {/* <SignupPage/> */}
  {/* <LoginPage/> */}
  <OrgCards/>
  </>

  );
}

export default App;
