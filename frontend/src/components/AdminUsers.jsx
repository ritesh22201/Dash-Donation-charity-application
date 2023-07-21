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
import { deleteUsers, getAllusers } from '../redux/AdminReducer/action';
import { useDispatch, useSelector } from 'react-redux';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { allusers } = useSelector(store => store.adminReducer);

  useEffect(() => {
    dispatch(getAllusers());
  }, []);

  // console.log(allusers)
  const handleDelete = id => {
    // console.log(id)
    dispatch(deleteUsers(id));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      p="20px 60px 20px 20px"
    >
      <Box w="80%" borderRadius="10px" mt="40px" p="20px" bg="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="sm">
            All Users
          </Heading>
          <Heading as="h3" size="md">
            ...
          </Heading>
        </Flex>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th textAlign={'center'}>Name</Th>
                <Th textAlign={'center'}>Email</Th>
                <Th textAlign={'center'}>Mobile Number</Th>
                <Th textAlign={'center'}>Block</Th>
                <Th textAlign={'center'}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allusers
                .map(el => {
                  return (
                    <Tr
                      key={el._id}
                      _hover={{ bg: 'gray.200' }}
                      cursor={'pointer'}
                    >
                      <Td textAlign={'center'}>{el.name}</Td>
                      <Td textAlign={'center'}>{el.email}</Td>
                      <Td textAlign={'center'}>{el.mobile}</Td>
                      <Td textAlign={'center'}>
                        <Button>Block</Button>
                      </Td>
                      <Td textAlign={'center'}>
                        <Button
                          onClick={() => handleDelete(el._id)}
                          bg={'red.500'}
                          color={'white'}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })
                .reverse()}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AdminUsers;
