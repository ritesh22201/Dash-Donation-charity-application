import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import AdminRoutes from './routes/AdminRoutes';


function App() {
  return (

  <div className='app'>
  {
    // window.location.pathname == "/dashboard"  ||  window.location.pathname == "/admin"  ||  window.location.pathname == "/adusers" || window.location.pathname == "/admins" ||   window.location.pathname == "/org" ||   window.location.pathname == "/funds"   || window.location.pathname == "/campaigns"  || window.location.pathname == "/adminlogin" ? ""  : <Navbar/>
  }
  <AllRoutes/>
  <AdminRoutes/>
  </div>

  );
}

export default App;