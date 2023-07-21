import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import WithAction from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminSideBar from './components/AdminSideBar';





function App() {
  return (
  //  <LoginPage/>
  // <SignupPage/>
  <>
  <AllRoutes/>
  <AdminSideBar/>
  </>

  );
}

export default App;
