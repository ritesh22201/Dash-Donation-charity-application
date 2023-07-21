import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminSideBar from './components/AdminSideBar';
import AdminPage from './pages/AdminPage';
import AllRoutes from './routes/AllRoutes';




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
