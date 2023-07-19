import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import WithAction from './components/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <Box>
      <WithAction/>
      {/* <AllRoutes /> */}
    </Box>
  );
}

export default App;
