import React, { useEffect } from 'react';
import {
  Box,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Heading,
  Table,
  Button,
} from '@chakra-ui/react';
// import {DeleteIcon} from ' @chakra-ui/icons'
import { getAdmins } from '../redux/AdminReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import Error from './Error';
import Loader from './Loader';


const Admins = () => {
  const dispatch = useDispatch();
  const { admins,isError,isLoading } = useSelector(store => store.adminReducer);

  useEffect(() => {
    dispatch(getAdmins());
  }, []);

  // console.log(admins);

  
  if(isLoading){
    return <Loader/>
  }
  
  return (
    <>
 
    {/* <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      p="20px 60px 20px 20px"
    > */}
      <Box w="95%" borderRadius="10px" m="40px auto" p="20px" bg="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="sm">
            All Admins
          </Heading>
          <Heading as="h3" size="md">
            ...
          </Heading>
        </Flex>

        {/* <Table></Table> */}
        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th textAlign={'center'}>Name</Th>
                <Th textAlign={'center'}>Email</Th>
                <Th textAlign={'center'}>Mobile Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {admins
                .map(el => {
                  return (
                    <Tr
                    key={el.id}
                    _hover={{ bg: 'gray.200' }}
                    cursor={'pointer'}
                    >
                      <Td textAlign={'center'}>{el.name}</Td>
                      <Td textAlign={'center'}>{el.email}</Td>
                      <Td textAlign={'center'}>{el.mobile}</Td>
                    </Tr>
                  );
                })
                .reverse()}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    {/* </Box> */}
                      </>
  );
};

export default Admins;