import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import OrgCards from './components/OrgCards';
import AdminSideBar from './components/AdminSideBar';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (

  <>

  {
    window.location.pathname == "/dashboard"  ||  window.location.pathname == "/admin"  ||  window.location.pathname == "/adusers" || window.location.pathname == "/admins" ||   window.location.pathname == "/org" ||   window.location.pathname == "/funds"   || window.location.pathname == "/campaigns"  || window.location.pathname == "/adminlogin" ? ""  : <Navbar/>
  }
  
  {/* <Navbar/> */}
  <AllRoutes/>
  <AdminRoutes/>
  <OrgCards/>


  </>
  );
}

export default App;
