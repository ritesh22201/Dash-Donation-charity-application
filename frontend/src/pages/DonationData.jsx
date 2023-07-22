import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import styled from 'styled-components';
import background from "../Assets/background.png";
import { useNavigate } from 'react-router-dom';

const Donation = () => {
  const navigate=useNavigate()
  const [showMore, setShowMore] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    onOpen();
  };

  // Chakra UI's useDisclosure hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DIV>
      <Box className='mainContainer' bgImage={background}>
        <div className='main-div'>
          <div className='heading-main'>
            <h1>DONET</h1>
            <h1>TODAY</h1>
          </div>
          <div className='donation-container'>
            <button onClick={() => handleAmountClick(5)}>5 EUR</button>
            <button onClick={() => handleAmountClick(25)}>25 EUR</button>
            <button onClick={() => handleAmountClick(50)}>50 EUR</button>
            {showMore && (
              <>
                <button onClick={() => handleAmountClick(100)}>100 EUR</button>
                <button onClick={() => handleAmountClick(200)}>200 EUR</button>
                <button onClick={() => handleAmountClick(500)}>500 EUR</button>
                <button onClick={() => handleAmountClick(1000)}>1000 EUR</button>
              </>
            )}
            <div className='load-more' onClick={() => setShowMore(!showMore)}>
              {showMore ? 'show less' : 'load more'}
            </div>
            <button onClick={()=>navigate('/donationdata')} >Your Donations</button>
          </div>
          <div className='heading-last'>
            <h1>SAVE</h1>
            <h1>THE WORLD</h1>
            <h1>TOMORROW</h1>
          </div>
        </div>
      </Box>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Donation</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            {/* Your form fields and inputs */}
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input
                placeholder="Enter your name"
                name="name"
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Amount:</FormLabel>
              <Input
                type="number"
                placeholder="Enter the amount"
                name="amount"
                value={selectedAmount}
                readOnly
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message:</FormLabel>
              <Input
                placeholder="Enter your message"
                name="message"
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category:</FormLabel>
              <Select
                placeholder="Select category"
                name="category"
                required
              >
                <option value="health">Health</option>
                <option value="education">Education</option>
                <option value="food">Food</option>
                <option value="ukrain donation">Ukrain Donation</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Country:</FormLabel>
              <Input
                placeholder="Enter your country"
                name="country"
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date:</FormLabel>
              <Input
                type="date"
                name="date"
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DIV>
  );
};

const DIV = styled.div`
    /* padding: 60px; */
    
    .mainContainer{
        padding: 60px;
        /* height: 100vh; */
    }
    .main-div{
        width: 60%;
        margin: auto;
    }
    .donation-container{
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: white;
        background-color: white;
        opacity: 0.8;
        transform: 0.5s;
        transition: 0.5s;
        /* width: 60%; */
        
        margin: auto;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
    .donation-container  button{
        background-color:#3480ef;
        opacity: 1;
        font-size: x-large;
        font-weight: 600;
        border-radius: 20px;
    }
    .heading-main{
        font-size: 60px;
        
        width: fit-content;
        color: #d9d9d9;
        font-weight: 600;
    }
    .heading-last{
        color: #0057b8;
        font-size: 60px;
        width: fit-content;
        text-align: end;
        width: 100%;
        font-weight: 700;
    }
    .load-more{
        /* background-color: white; */
        color: blue;
        text-align: center;
        font-size: x-large;
    }


`
export default Donation