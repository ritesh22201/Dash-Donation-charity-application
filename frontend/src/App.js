import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';


function App() {
  return (

  <>
    <Navbar/>
  <AllRoutes/>
  </>

  );
}

export default App;