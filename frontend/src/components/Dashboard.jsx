import React, { useEffect, useState } from 'react';

import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, AvatarBadge, AvatarGroup, WrapItem } from '@chakra-ui/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Legend,
  Line,
} from 'recharts';


import { getdonations } from '../redux/AdminReducer/action';
import Loader from './Loader';
import Error from './Error';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users ,searchusers, qval , isError, isLoading} = useSelector(store => store.adminReducer);
  const [totalamount, setTotalamount] = useState(0);
  const [todayDonation, setTodayDonation] = useState(0);
  const [studyDonation,setStudyDonation] = useState(0)
  const [ukrainedonation,setUkrainedonation] = useState(0)
  const [donors, setDonors] = useState(0);
  
 
  useEffect(() => {
    dispatch(getdonations());
    // dispatch(getRegisterUSers())
  }, [dispatch]);

  useEffect(() => {
    let price = 0;
    let totalTodayDonation = 0;
    let totalstudyDonation = 0;
    let totalukraineDonation = 0;
    
    const today = new Date().setHours(0, 0, 0, 0);
    for (let i = 0; i < users.length; i++) {
      price += users[i].amount;
      const donationDate = new Date(users[i].date).setHours(0, 0, 0, 0);
      if (donationDate === today) {
        totalTodayDonation += users[i].amount;
      }
      if(users[i].category == "education"){
        totalstudyDonation += users[i].amount
      }else if(users[i].category == "ukrain donation"){
        totalukraineDonation += users[i].amount
      
      }
    }
    
    setTotalamount(price);
    setTodayDonation(totalTodayDonation);
    setStudyDonation(totalstudyDonation)
    setUkrainedonation(totalukraineDonation)
  }, [users]);

  useEffect(()=>{
  
    let userObj = {}
    for (let i = 0; i < users.length; i++) {
       userObj[users[i].userId] =  userObj[users[i].userId] + 1 || 1
    }

    // console.log(userObj)
    let donorsdata =  Object.keys(userObj).length
    // console.log(donors)
    setDonors(donorsdata)
  },[users])

  const studypercentData = ((studyDonation / totalamount) * 100).toFixed();
  const ukrainpercentData = ((ukrainedonation/totalamount)*100).toFixed();



  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  

  return (
    <>
      
      
      {/* <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        p="20px 60px 20px 20px"
      > */}
        <Box w="95%" m="40px auto">
          <Flex w="100%" justifyContent="space-around">
            <Box cursor="pointer" w="32%" p="30px" bg="rgb(255,210,73)" borderRadius="10px">
              <Flex justifyContent="space-between">
                <Text>Total Donation</Text>
                <Text fontWeight="1000">...</Text>
              </Flex>
              <Flex mt="10px" alignItems="center">
                <Heading as="h2" size="lg">
                  ${totalamount}
                </Heading>
                <Text ml="8px" mt="6px" fontSize="13px" fontWeight="thin">
                  Updated 1day ago
                </Text>
              </Flex>
            </Box>

            <Box ml="50px" cursor="pointer" w="33%" p="30px" bg="white" borderRadius="10px">
              <Flex justifyContent="space-between">
                <Text>Donation Today</Text>
                <Text fontWeight="1000">...</Text>
              </Flex>
              <Flex mt="10px" alignItems="center">
                <Heading as="h2" size="lg">
                  ${todayDonation}
                </Heading>
                <Text ml="8px" mt="6px" fontSize="13px" fontWeight="thin">
                  Updated 30min ago
                </Text>
              </Flex>
            </Box>

            <Box ml="50px" cursor="pointer" w="33%" p="30px" bg="white" borderRadius="10px">
              <Flex justifyContent="space-between">
                <Text>Total Donor</Text>
                <Text fontWeight="1000">...</Text>
              </Flex>
              <Flex mt="10px" alignItems="center">
                <Heading as="h2" size="lg">
                  {donors}
                </Heading>
                <Text ml="8px" mt="6px" fontSize="13px" fontWeight="thin">
                  Updated 1day ago
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box w="95%"  m="40px auto">
          <Flex justifyContent={'space-between'} gap="47px">
            <Box cursor="pointer" bg="white" w="70%" borderRadius="10px" p="10px">
              <Heading as="h2" size="sm">
                Donation Analytics
              </Heading>
              <LineChart
              cursor="pointer"
                width={650}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Line
                  name="pv of pages"
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                />
                <Line
                  name="uv of pages"
                  type="monotone"
                  dataKey="uv"
                  stroke="#82ca9d"
                />
              </LineChart>
            </Box>

            <Box bg="white" w="50%" borderRadius="10px" >
              <Flex justifyContent="space-between"  alignItems="center" p="9px">
                <Heading as="h3" size="sm">
                  Your Fundraising
                </Heading>
                <BsArrowUpRight />
              </Flex>

              <Box p="9px" cursor="pointer">
                <Flex>
                  <WrapItem>
                    <Avatar
                      borderRadius={'10px'}
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    />
                  </WrapItem>
                  <Box ml="10px">
                    <Text fontWeight="500">Help Them Smile Again</Text>
                    <Text>Ukraine Funds</Text>
                  </Box>
                </Flex>
              </Box>

              <Box  w="93%" borderRadius="5px" m="auto" h="5px" bg="gray.100">
                <Box
                    w={`${ukrainpercentData}%`}
                  borderRadius="5px"
                  h="5px"
                  bg="rgb(255,210,73)"
                ></Box>
              </Box>

              <Box>
                <Heading as="h2" size="sm" m="10px 10px">
                    ${`${ukrainedonation}`}
                  <span style={{ color: 'gray', fontWeight: '100' }}>
                    /${`${totalamount}`}
                  </span>{' '}
                </Heading>
              </Box>

              <Box  p="9px" cursor="pointer" >
                <Flex>
                  <WrapItem>
                    <Avatar
                      borderRadius={'10px'}
                      src="https://media.istockphoto.com/id/863105740/photo/childrens-sports-team-charity-drive-for-donations-local-disaster-relief.jpg?s=612x612&w=0&k=20&c=FyCwE77TifwASnpyRS00B0xnS0fkiLVFSq-wZOWBe8I="
                    />
                  </WrapItem>
                  <Box ml="10px">
                    <Text fontWeight="500">Help Them Study Again</Text>
                    <Text>Study</Text>
                  </Box>
                </Flex>
              </Box>

              {/* // */}

              <Box w="93%" borderRadius="5px" m="auto" h="5px" bg="gray.100">
                <Box
                  w={`${studypercentData}%`}
                  borderRadius="5px"
                  h="5px"
                  bg="rgb(255,210,73)"
                ></Box>
              </Box>

              <Box>
                <Heading as="h2" size="sm" m="10px 10px">
                ${`${studyDonation}`}
                  <span style={{ color: 'gray', fontWeight: '100' }}>
                  /${`${totalamount}`}
                  </span>{' '}
                </Heading>
              </Box>

              {/* // */}
            </Box>
          </Flex>
        </Box>

        {/*  */}

        <Box cursor="pointer" w="95%" borderRadius="10px" m="40px auto" p="20px" bg="white">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h3" size="sm">
              Recent Donations
            </Heading>
            <Heading as="h3" size="md">
              ...
            </Heading>
          </Flex>

          {/* <Table></Table> */}
          <TableContainer>
            <Table variant="simple">
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr>
                  <Th textAlign={'center'}>Name</Th>
                  <Th textAlign={'center'}>Location</Th>
                  <Th textAlign={'center'}>Category</Th>
                  <Th textAlign={'center'}>Date</Th>
                  <Th textAlign={'center'}>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  qval ? searchusers
                  .map(el => {
                    const dates = el.date.split('T')[0];

                    return (
                      <Tr key={el._id}>
                        <Td textAlign={'center'}>{el.name}</Td>
                        <Td textAlign={'center'}>{el.country}</Td>
                        <Td textAlign={'center'}>{el.category}</Td>
                        <Td textAlign={'center'}>{dates}</Td>
                        <Td textAlign={'center'}>${el.amount}</Td>
                      </Tr>
                    );
                  })
                  .reverse()  : users
                  .map(el => {
                    const dates = el.date.split('T')[0];

                    return (
                      <Tr key={el._id}>
                        <Td textAlign={'center'}>{el.name}</Td>
                        <Td textAlign={'center'}>{el.country}</Td>
                        <Td textAlign={'center'}>{el.category}</Td>
                        <Td textAlign={'center'}>{dates}</Td>
                        <Td textAlign={'center'}>${el.amount}</Td>
                      </Tr>
                    );
                  })
                  .reverse()
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      {/* </Box> */}
    </>
  );
};

export default Dashboard;