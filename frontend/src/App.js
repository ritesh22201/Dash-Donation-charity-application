import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import WithAction from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
function App() {
  return (

    <Box>
      <WithAction/>
      //  <LoginPage/>
  <SignupPage/>
      {/* <AllRoutes /> */}
    </Box>

  );
}

export default App;
