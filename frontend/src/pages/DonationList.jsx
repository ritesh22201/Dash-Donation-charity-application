import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDonations } from '../redux/donationReducer/action';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
  useDisclosure,
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Footer from './Footer';


// "email":"ritesh@gmail.com",
// "password":"Ritesh@123"


const token = JSON.parse(localStorage.getItem('ch-token')) || {}

const DonationList = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigation = useNavigate()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const cancelRef = React.useRef()




  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDonations(token.token))
  }, [token])


  const donations = useSelector((store) => store.donationReducer.donation)
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
  };


  // Inline style object for the donation items


  // Inline style object for the header
  const donationItemStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };


  const headerStyle = {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '40px',
    color: '#333',
  };


  const headingStyle = {
    marginBottom: '10px',
    color: '#333',
    fontSize: '24px',
  };


  const detailStyle = {
    margin: '0',
    color: '#777',
  };
  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    marginLeft: '10px',
  };


  const handleUpdateDonation = async (id) => {
    navigation('/Modals');
  };


  const handleDeleteDonation = async (id) => {
    onOpen()
  };

  const handleDonationAgain = () => {
    navigation('/donation')
  }

  return (
    <>
      <Navbar2 />
      <div style={containerStyle}>
        <Flex justifyContent={'space-between'} pb={'30px'} alignItems={'center'}>
          <Text></Text>
          <Heading>Your Donation List</Heading>
          <Button onClick={handleDonationAgain} colorScheme='blue'>Donate again</Button>
        </Flex>
        <div>
          {donations?.map((donation) => (
            <div key={donation.userId} style={donationItemStyle}>
              <div>
                <h2 style={headingStyle}>{donation.name}</h2>
                <p style={detailStyle}>Amount: ${donation.amount}</p>
                <p style={detailStyle}>Message: {donation.message}</p>
                <p style={detailStyle}>Category: {donation.category}</p>
              </div>
              <div>
              </div>
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                      Delete Customer
                    </AlertDialogHeader>


                    <AlertDialogBody>
                      Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>


                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme='red' onClick={onClose} ml={3}>
                        Delete
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </div>
          )).reverse()}
        </div>
      </div>
      <Footer />
    </>
  );
};






export default DonationList;

