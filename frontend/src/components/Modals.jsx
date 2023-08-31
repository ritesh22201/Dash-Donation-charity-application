import React, { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';


const Modals = () => {
  const [formData, setFormData] = useState({
    message: '',
    category: '',
  });


  const navigation = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();


  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const cancelRef = React.useRef();


  useEffect(() => {
    onOpen();
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSave = () => {
    // Do whatever you want with the formData object here
    console.log(formData);
    navigation("/donationdata",{formData})
  };


  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Input
              ref={initialRef}
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
        </ModalBody>


        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


export default Modals;



