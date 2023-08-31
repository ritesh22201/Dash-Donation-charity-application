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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from '@chakra-ui/react';
// import {DeleteIcon} from ' @chakra-ui/icons'
import { blockUser, deleteUsers, getAllusers, unBlockUser } from '../redux/AdminReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure} from '@chakra-ui/hooks';
import Loader from './Loader';
import Error from './Error'

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { allusers,isError,isLoading,blockeduser } = useSelector(store => store.adminReducer);

  useEffect(() => {
    dispatch(getAllusers());

  }, []);

  // console.log(allusers)
  const handleDelete = id => {
    dispatch(deleteUsers(id)).then(() => dispatch(getAllusers()));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleDeleteUser = id => {
    // onClose();
    handleDelete(id);
  };

  // const handleBlockUser = (email) => {
  //   dispatch(blockUser({email:email}))
  // }

  // const handleUnblock = (email) => {
  //  dispatch(unBlockUser({email:email}))
  // }

  if(isLoading){
    return <Loader/>
  }

  return (
    <>

        <Box w="95%" borderRadius="10px" m="40px auto" p="20px" bg="white">
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
                  <Th textAlign={'center'}>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allusers.map(el => {
                  return (
                    <Tr
                      key={el._id}
                      _hover={{ bg: 'gray.200' }}
                      cursor={'pointer'}
                    >
                      <Td textAlign={'center'}>{el.name}</Td>
                      <Td textAlign={'center'}>{el.email}</Td>
                      <Td textAlign={'center'}>{el.mobile}</Td>
                      {/* <Td textAlign={'center'}> */}
                        {/* <Button onClick={()=>handleBlockUser(el.email)}>Block</Button>
                        <Button onClick={()=>handleUnblock(el.email)}>Unblock</Button> */}

                      {/* </Td> */}
                      <Td textAlign={'center'}>
                        <Button
                          variant="solid"
                          _hover="none"
                          
                          onClick={()=> handleDeleteUser(el._id)}
                          bg={'red.500'}
                          color={'white'}
                        >
                          Delete
                        </Button>
                       
                          
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    </>
  );
};

export default AdminUsers;