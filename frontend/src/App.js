import React from 'react';
import {
  Box
} from '@chakra-ui/react';
<<<<<<< HEAD
import AdminSideBar from './components/AdminSideBar';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import OrgCards from './components/OrgCards';
=======
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminSideBar from './components/AdminSideBar';
// import AdminPage from './pages/AdminPage';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import OrgCards from './components/OrgCards';
import Organization from './pages/Organization';

>>>>>>> 89c6fc9d577e1a38e58b2da0c3e0ac5b45e9995a


function App() {
  return (
<<<<<<< HEAD
  <>
  
  {/* {
    window.location.pathname == "/admin"  ||  window.location.pathname == "/adusers" || window.location.pathname == "/admins" ||   window.location.pathname == "/org" ||   window.location.pathname == "/funds"   || window.location.pathname == "/campaigns" ? <AdminSideBar/> : ""
  }
  {
    window.location.pathname == "/admin"  ||  window.location.pathname == "/adusers" || window.location.pathname == "/admins" ||   window.location.pathname == "/org" ||   window.location.pathname == "/funds"   || window.location.pathname == "/campaigns" ? ""  : <Navbar/>
  } */}
  
  <Navbar/>
  <AllRoutes/>
  <OrgCards/>
=======

  <>
    <LoginPage/>
>>>>>>> 89c6fc9d577e1a38e58b2da0c3e0ac5b45e9995a
  </>
  );
}

export default App;
