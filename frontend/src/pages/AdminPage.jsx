import React from 'react';
import AdminSideBar from '../components/AdminSideBar';
import { Box, Flex, Text, Heading, Image, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
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

const AdminPage = () => {
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
      <Box w="85%" mx="auto" p="20">
        {/* Content Area */}
        <Flex justifyContent="space-around">
          <Box
            ml="80px"
            w="33%"
            p="30px"
            bg="rgb(255,210,73)"
            borderRadius="10px"
          >
            <Flex justifyContent="space-between">
              <Text>Total Donation</Text>
              <Text fontWeight="1000">...</Text>
            </Flex>
            <Flex mt="10px" alignItems="center">
              <Heading as="h2" size="lg">
                $Amount
              </Heading>
              <Text ml="8px" mt="6px" fontSize="13px" fontWeight="thin">
                Updated 1day ago
              </Text>
            </Flex>
          </Box>

          <Box ml="50px" w="33%" p="30px" bg="white" borderRadius="10px">
            <Flex justifyContent="space-between">
              <Text>Donation Today</Text>
              <Text fontWeight="1000">...</Text>
            </Flex>
            <Flex mt="10px" alignItems="center">
              <Heading as="h2" size="lg">
                $Amount
              </Heading>
              <Text ml="8px" mt="6px" fontSize="13px" fontWeight="thin">
                Updated 30min ago
              </Text>
            </Flex>
          </Box>

          <Box ml="50px" w="33%" p="30px" bg="white" borderRadius="10px">
            <Flex justifyContent="space-between">
              <Text>Total Donor</Text>
              <Text fontWeight="1000">...</Text>
            </Flex>
            <Flex mt="10px" alignItems="center">
              <Heading as="h2" size="lg">
                Donors
              </Heading>
              <Text ml="8px" mt="6px" fontSize="13px" fontWeight="thin">
                Updated 1day ago
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Box w="100%" ml="50px" mt="50px">
          <Flex justifyContent={'space-between'}>
            <Box bg="white" w="70%" borderRadius="10px" p="10px">
              <Heading ml="40px" as="h2" size="sm">
                Donation Analytics
              </Heading>
              <LineChart
                width={730}
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

            <Box m="40px" bg="white" w="50%" borderRadius="10px">
              <Flex justifyContent="space-between" alignItems="center" p="9px">
                <Heading as="h3" size="sm">
                  Your Fundraising
                </Heading>
                <BsArrowUpRight />
              </Flex>

              <Box p="9px">
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

              <Box w="93%" borderRadius="5px" m="auto" h="5px" bg="gray.100">
                <Box
                  w="82%"
                  borderRadius="5px"
                  h="5px"
                  bg="rgb(255,210,73)"
                ></Box>
              </Box>

              <Box>
                <Heading as="h2" size="sm" m="10px 10px">
                  $53000{' '}
                  <span style={{ color: 'gray', fontWeight: '100' }}>
                    /70000
                  </span>{' '}
                </Heading>
              </Box>

              <Box p="9px">
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
                  w="73%"
                  borderRadius="5px"
                  h="5px"
                  bg="rgb(255,210,73)"
                ></Box>
              </Box>

              <Box>
                <Heading as="h2" size="sm" m="10px 10px">
                  $30100{' '}
                  <span style={{ color: 'gray', fontWeight: '100' }}>
                    /50000
                  </span>{' '}
                </Heading>
              </Box>

              {/* // */}
            </Box>
            
          </Flex>
        </Box>
        

                {/*  */}

        <Box w="85%" mx="auto" borderRadius="10px" mt="40px" p="20px"  bg="white">
        <Flex justifyContent="space-between" alignItems="center">
         <Heading as="h3" size="sm">Donation History</Heading>
         <Heading as="h3" size="md">...</Heading>
        </Flex>
           
        {/* <Table></Table> */}
        <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Location</Th>
        <Th >Type</Th>
        <Th >Date</Th>
        <Th >Amount</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>John</Td>
        <Td>USA</Td>
        <Td>Ukraine</Td>
        <Td>Today</Td>
        <Td>Amount</Td>
      </Tr>
     
    </Tbody>
    
  </Table>
</TableContainer>

        </Box>
      </Box>
    </>
  );
};

export default AdminPage;
