import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import AdminSideBar from './components/AdminSideBar';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import OrgCards from './components/OrgCards';


function App() {
  return (
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
  </>
  );
}

export default App;
