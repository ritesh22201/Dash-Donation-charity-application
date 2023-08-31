import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Container,
  Input,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Flex,
  Heading,
  useToast,
  Image,
  CardBody,
  Card,
  Divider,
  CardFooter,
  Text,
  Checkbox,
  Grid,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription

} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar2 from "../components/Navbar2";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getDonatedData } from "../redux/OrgReducer/action";
// import { Text } from "recharts";
import { deleteSavedDonation, postDonation } from "../redux/donationReducer/action";
import { postPayment } from "../redux/paymentReducer/action";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";

export default function Payment() {
  const dispatch = useDispatch();
  const { donatedData } = useSelector(store => store.orgReducer);
  const { paymentData, isLoading } = useSelector(store => store.paymentReducer);
  const { token } = JSON.parse(localStorage.getItem('ch-token')) || {};
  const toast = useToast();
  const navigate = useNavigate()
  const [cardName, setCardName] = useState('');
  const [checkbox, setCheckBox] = useState(false);

  useEffect(() => {
    dispatch(getDonatedData(token));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkbox) {
      toast({
        title: 'Payment Failed!',
        description: 'Please check the agreement checkbox!',
        status: 'warning',
        isClosable: true,
        duration: 4000,
        position: 'top'
      })
      return
    }

    const details = { amount: donatedData[donatedData.length - 1].amount };
    const cardDetails = { cardName: donatedData[donatedData.length - 1].name };

    dispatch(postDonation(donatedData[donatedData.length - 1], token));
    dispatch(postPayment(details, token, cardDetails));
  }

  useEffect(() => {
    if (paymentData) {
      setTimeout(() => {
        navigate('/donationdata');
        window.location.reload();
      }, 4000)
    }
  }, [paymentData])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  let donatedExtractedData = donatedData[donatedData.length - 1];

  return (
    <>
      <Navbar2 />
      {isLoading ? <Loader /> :

        paymentData ?
          <Grid w={'70%'} m={'auto'} minH={'100vh'} placeItems={'center'}>
            <Alert
              status='success'
              variant='subtle'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              height='200px'
            >
              <AlertIcon boxSize='40px' mr={0} />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                Payment Successful!
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
                Thank you for your contribution.
              </AlertDescription>
            </Alert>
          </Grid>
          :
          <Flex alignItems={'center'} direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }} justifyContent={'space-around'}>
            <Box mt={'25px'} p={5} w={{ base: '95%', sm: '95%', md: '75%', lg: '40%', xl: '40%' }} textAlign={'center'}>

              <Card
                borderRadius={'30px'}
                boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              >
                <CardBody position={'relative'}>
                  <Image
                    borderTopLeftRadius={'30px'}
                    borderTopRightRadius={'30px'}
                    src="https://img.freepik.com/free-vector/family-couple-saving-money_74855-5240.jpg?size=626&ext=jpg&ga=GA1.2.1278157171.1691775558&semt=sph"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Box
                    position={'absolute'}
                    top={'30%'}
                    left={'33%'}
                    width={{ base: '100px', sm: '105px', md: '150px', lg: '180px', xl: '150px', '2xl': '160px' }}
                    textAlign={'center'}
                    boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                    borderRadius={'50%'}
                  >
                    <Image
                      width={{ base: '100px', sm: '105px', md: '150px', lg: '180px', xl: '180px', '2xl': '180px' }}
                      borderRadius={'50%'}
                      src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                      alt="user"
                    />
                  </Box>
                  <Stack mt="20" spacing="1">
                    <Heading size="md">{donatedExtractedData?.name}</Heading>
                    <Text fontSize={'15px'} fontWeight={600} color={'#9E9E9E'}>
                      Donor
                    </Text>

                    <Flex justifyContent={'space-around'}>
                      <Box>
                        <Text color="blue.600" fontWeight={600} fontSize="2xl">
                          $ {donatedExtractedData?.amount}
                        </Text>
                        <Text fontSize={'15px'} fontWeight={600} color={'#9E9E9E'}>
                          amount
                        </Text>
                      </Box>
                      <Box>
                        <Text color="blue.600" fontWeight={600} fontSize="2xl">
                          {donatedExtractedData?.country}
                        </Text>
                        <Text fontSize={'15px'} fontWeight={600} color={'#9E9E9E'}>
                          country
                        </Text>
                      </Box>
                    </Flex>
                    <Heading textTransform={'uppercase'} color={'blue.600'} mt={'20px'} size="sm">{donatedExtractedData?.category}</Heading>
                    <Text fontSize={'15px'} fontWeight={600} color={'#9E9E9E'}>
                      category
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter display={'flex'} justifyContent={'center'}>
                  <Text
                    fontSize={'17px'}
                    textAlign={'center'}
                    fontWeight={600}
                    color={'#9E9E9E'}
                  >
                    {donatedExtractedData?.message}
                  </Text>
                </CardFooter>
              </Card>
            </Box>
            <Box p={'20px'} w={{ base: '95%', sm: '95%', md: '75%', lg: '30%', xl: '30%' }} boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px">
              <form onSubmit={handleSubmit}>
                <Box>
                  <Heading size={'md'}>Dummy Card Number</Heading>
                  <Text m={'10px 0 20px 0'} color={'gray.400'}>For the next payment slide use dummy card number as <span style={{ color: 'teal', fontWeight: 'bold' }}>4111 1111 1111 1111</span>, expiry date, CVV and OTP in the next slide you can provide by your own choice. </Text>
                </Box>
                <FormControl mb={'20px'}>
                  <FormLabel>Donor's Name</FormLabel>
                  <Input type="text" size="lg" focusBorderColor="gray.300" value={donatedExtractedData?.name} onChange={(e) => setCardName(e.target.value)} />
                </FormControl>
                <Flex mb={'20px'} alignItems={'start'} gap={'8px'}>
                  <Checkbox mt={'5px'} isChecked={checkbox} onChange={() => setCheckBox(!checkbox)} />
                  <Text color={'gray.400'}>This is to verify that you are willingly donating to our website and contributing to the needy. You are a good soul. Thank you for your contribution.</Text>
                </Flex>
                <Button type="submit" colorScheme="blue" size="lg" w="100%">
                  Pay
                </Button>
              </form>
            </Box>
          </Flex>
      }
      <Footer />
    </>
  );
}
