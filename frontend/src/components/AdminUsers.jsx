// import React, { useEffect } from 'react';
// import {
//   Box,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
//   Flex,
//   Heading,
//   Table,
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
//   AlertDialogCloseButton,
//   Button,
// } from '@chakra-ui/react';
// // import {DeleteIcon} from ' @chakra-ui/icons'
// import { deleteUsers, getAllusers } from '../redux/AdminReducer/action';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDisclosure} from '@chakra-ui/hooks';
// import Loader from './Loader';
// import Error from './Error'
// import AdminSideBar from './AdminSideBar';

// const AdminUsers = () => {
//   const dispatch = useDispatch();
//   const { allusers,isError,isLoading } = useSelector(store => store.adminReducer);

//   useEffect(() => {
//     dispatch(getAllusers());

//   }, []);

//   // console.log(allusers)
//   const handleDelete = id => {
//     dispatch(deleteUsers(id)).then(() => dispatch(getAllusers()));
//   };

//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const cancelRef = React.useRef();
//   const handleDeleteUser = id => {
//     // onClose();
//     handleDelete(id);
//   };

//   if(isError){
//     return <Error/>
//   }

//   if(isLoading){
//     return <Loader/>
//   }

//   return (
//     <>
//     {/* <AdminSideBar/> */}
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="flex-end"
//         p="20px 60px 20px 20px"
//       >
//         <Box w="80%" borderRadius="10px" mt="40px" p="20px" bg="white">
//           <Flex justifyContent="space-between" alignItems="center">
//             <Heading as="h3" size="sm">
//               All Users
//             </Heading>
//             <Heading as="h3" size="md">
//               ...
//             </Heading>
//           </Flex>

//           <TableContainer>
//             <Table variant="simple">
//               <Thead>
//                 <Tr>
//                   <Th textAlign={'center'}>Name</Th>
//                   <Th textAlign={'center'}>Email</Th>
//                   <Th textAlign={'center'}>Mobile Number</Th>
//                   <Th textAlign={'center'}>Block</Th>
//                   <Th textAlign={'center'}>Delete</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {allusers.map(el => {
//                   return (
//                     <Tr
//                       key={el._id}
//                       _hover={{ bg: 'gray.200' }}
//                       cursor={'pointer'}
//                     >
//                       <Td textAlign={'center'}>{el.name}</Td>
//                       <Td textAlign={'center'}>{el.email}</Td>
//                       <Td textAlign={'center'}>{el.mobile}</Td>
//                       <Td textAlign={'center'}>
//                         <Button>Block</Button>
//                       </Td>
//                       <Td textAlign={'center'}>
//                         <Button
//                           variant="solid"
//                           _hover="none"
//                           // onClick={onOpen}
//                           onClick={()=> handleDeleteUser(el._id)}
//                           bg={'red.500'}
//                           color={'white'}
//                         >
//                           Delete
//                         </Button>
//                         <AlertDialog
//                           isOpen={isOpen}
//                           leastDestructiveRef={cancelRef}
//                           onClose={onClose}
//                         >
//                           <AlertDialogOverlay>
//                             <AlertDialogContent>
//                               <AlertDialogHeader
//                                 fontSize="lg"
//                                 fontWeight="bold"
//                               >
//                                 Delete Customer
//                               </AlertDialogHeader>

//                               <AlertDialogBody>
//                                 Are you sure want to Delete?.
//                               </AlertDialogBody>

//                               <AlertDialogFooter>
//                                 <Button ref={cancelRef} onClick={onClose}>
//                                   Cancel
//                                 </Button>
//                                 <Button
//                                   colorScheme="red"
//                                   onClick={() => {
//                                     handleDeleteUser(el._id);
//                                   }}
//                                   ml={3}
//                                 >
//                                   Delete
//                                 </Button>
//                               </AlertDialogFooter>
//                             </AlertDialogContent>
//                           </AlertDialogOverlay>
//                         </AlertDialog>
//                       </Td>
//                     </Tr>
//                   );
//                 })}
//               </Tbody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default AdminUsers;


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

  const handleBlockUser = (email) => {
    dispatch(blockUser({email:email}))
  }

  const handleUnblock = (email) => {
   dispatch(unBlockUser({email:email}))
  }

  //   if(isError){
  //     return <Error/>
  //   }

  // if(isLoading){
  //   return <Loader/>
  // }

  useEffect(()=>{

  },[])

  return (
    <>
{/*   
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        p="20px 60px 20px 20px"
      > */}
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
                  <Th textAlign={'center'}>Block</Th>
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
                      <Td textAlign={'center'}>
                        <Button onClick={()=>handleBlockUser(el.email)}>Block</Button>
                        <Button onClick={()=>handleUnblock(el.email)}>Unblock</Button>

                      </Td>
                      <Td textAlign={'center'}>
                        <Button
                          variant="solid"
                          _hover="none"
                          // onClick={onOpen}
                          onClick={()=> handleDeleteUser(el._id)}
                          bg={'red.500'}
                          color={'white'}
                        >
                          Delete
                        </Button>
                        <AlertDialog
                          isOpen={isOpen}
                          leastDestructiveRef={cancelRef}
                          onClose={onClose}
                        >
                          <AlertDialogOverlay>
                            <AlertDialogContent>
                              <AlertDialogHeader
                                fontSize="lg"
                                fontWeight="bold"
                              >
                                Delete Customer
                              </AlertDialogHeader>

                              <AlertDialogBody>
                                Are you sure want to Delete?.
                              </AlertDialogBody>

                              <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                  Cancel
                                </Button>
                                <Button
                                  colorScheme="red"
                                  onClick={() => {
                                    handleDeleteUser(el._id);
                                  }}
                                  ml={3}
                                >
                                  Delete
                                </Button>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialogOverlay>
                        </AlertDialog>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      {/* </Box> */}
    </>
  );
};

export default AdminUsers;

