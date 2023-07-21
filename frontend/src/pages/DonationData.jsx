import React, { useState, useRef } from 'react';
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
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

const MoneyBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    message: '',
    category: '',
    country: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Your submission logic here
    console.log(formData);
    onClose();
  };

  // Chakra UI's useDisclosure hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Ref for initial focus in the modal
  const initialRef = useRef();

  // Ref for final focus in the modal
  const finalRef = useRef();

  const amounts = [10, 20, 50, 100, 200]; // List of different amounts

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {amounts.map((amount) => (
          <div
            key={amount}
            style={{
              width: '120px',
              height: '50px',
              margin: '5px',
              border: '1px solid #ccc',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              background: 'white', // Update this to change the background color for selected amounts
              color: 'black', // Update this to change the text color for selected amounts
              fontWeight: 'bold',
              borderRadius: '4px',
            }}
            onClick={() => {
              setFormData({ ...formData, amount: amount });
              onOpen();
            }}
          >
            ${amount}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Donation</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            {/* Your form fields and inputs */}
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Amount:</FormLabel>
              <Input
                type="number"
                placeholder="Enter the amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message:</FormLabel>
              <Input
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category:</FormLabel>
              <Select
                placeholder="Select category"
                name="category"
                value={formData.category}
                onChange={handleChange}
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
                value={formData.country}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date:</FormLabel>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <button >Click to see your data</button>
    </div>
  );
};

export default MoneyBox;
