import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';

function DonationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

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

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Donation</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
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
    </>
  );
}

export default DonationModal;
