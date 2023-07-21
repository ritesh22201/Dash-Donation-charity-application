import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import WithAction from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import AdminSideBar from './components/AdminSideBar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';



function App() {
  return (
  <>
  {/* <AdminSideBar/> */}
  {/* <AllRoutes/> */}
  <SignupPage/>
  {/* <LoginPage/> */}
  </>

  );
}

export default App;
