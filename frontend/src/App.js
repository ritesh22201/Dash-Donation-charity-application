import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminSideBar from './components/AdminSideBar';
// import AdminPage from './pages/AdminPage';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import OrgCards from './components/OrgCards';
import Organization from './pages/Organization';



function App() {
  return (

  <>
    <LoginPage/>
  </>

  );
}

export default App;
