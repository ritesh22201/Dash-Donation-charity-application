import { Box, Flex, Text, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getdonations } from '../redux/AdminReducer/action';

import savefund from '../Assets/admins/savefund.avif';
import Error from './Error';
import Loader from './Loader';


const Fundraise = () => {
  const dispatch = useDispatch();
  const { users, isError, isLoading } = useSelector(store => store.adminReducer);
  console.log(users)
  const [studyDonation, setStudyDonation] = useState(0)
  const [healthdonation, setHealthdonation] = useState(0)
  const [fooddonation, setFooddonation] = useState(0)
  const [ukrainedonation, setUkrainedonation] = useState(0)

  useEffect(() => {
    dispatch(getdonations());
  }, [])

  useEffect(() => {
    let totalstudyDonation = 0;
    let totalhealthDonation = 0;
    let totalfoodDonation = 0;
    let totalukraineDonation = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].category == "education") {
        totalstudyDonation += users[i].amount
      } else if (users[i].category == "health") {
        totalhealthDonation += users[i].amount
      } else if (users[i].category == "food") {
        totalfoodDonation += users[i].amount
      } else if (users[i].category == "ukrain donation") {
        totalukraineDonation += users[i].amount
        // console.log(totalukraineDonation)
      }
    }
    setStudyDonation(totalstudyDonation)
    setHealthdonation(totalhealthDonation)
    setFooddonation(totalfoodDonation)
    setUkrainedonation(totalukraineDonation)
  }, [users]);



  if (isLoading) {
    return <Loader />
  }


  return (
    <>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        p="20px 60px 20px 20px"
        style={{
          backgroundImage: `url(${savefund})`,
          // backgroundRepeat:"no-repeat",
          height: "90vh",

          backgroundSize: "cover",
        }}
      >


        <Box w="100%">

          <Flex cursor={"pointer"} w="100%" justifyContent="space-around">
            <Box w="32%" p="30px" bg="rgb(255,210,73)" borderRadius="10px">
              <Flex justifyContent="space-between">
                <Text>Total Education Donation</Text>
                <Text fontWeight="1000">...</Text>
              </Flex>
              <Flex mt="10px" alignItems="center">
                <Heading as="h2" size="lg">
                  ${studyDonation}
                </Heading>

              </Flex>
            </Box>

            <Box ml="50px" w="33%" p="30px" bg="white" borderRadius="10px">
              <Flex justifyContent="space-between">
                <Text>Total Health Donation</Text>
                <Text fontWeight="1000">...</Text>
              </Flex>
              <Flex mt="10px" alignItems="center">
                <Heading as="h2" size="lg">
                  ${healthdonation}
                </Heading>

              </Flex>
            </Box>

            <Box ml="50px" w="33%" p="30px" bg="white" borderRadius="10px">
              <Flex justifyContent="space-between">
                <Text>Total Food Donation</Text>
                <Text fontWeight="1000">...</Text>
              </Flex>
              <Flex mt="10px" alignItems="center">
                <Heading as="h2" size="lg">
                  ${fooddonation}
                </Heading>
                <Text ml="8px" mt="6px" fontSize="13px" fontWeight="thin">
                  Updated 1day ago
                </Text>
              </Flex>
            </Box>

          </Flex>


          <Box cursor={"pointer"} mt="30px" w="30%" p="30px" bg="rgb(255,210,73)" borderRadius="10px">
            <Flex justifyContent="space-between">
              <Text>Total Ukraine Donation</Text>
              <Text fontWeight="1000">...</Text>
            </Flex>
            <Flex mt="10px" alignItems="center">
              <Heading as="h2" size="lg">
                ${ukrainedonation}
              </Heading>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Fundraise