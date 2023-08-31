import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../redux/AdminReducer/action';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import flaglady from '../../Assets/admins/flaglady.avif';
import Navbar2 from '../../components/Navbar2';


export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const dispatch = useDispatch();
  const { isAuth, errmsg ,loggedInuser,token } = useSelector(store => store.adminReducer);
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [route, setRoute] = useState(false);
  // const {token,name} = loggedInuser


  const handleSubmit = e => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    dispatch(adminLogin(userDetails));
  };

  useEffect(() => {
   
    if (token) {
      localStorage.setItem('ad-token', JSON.stringify({token,loggedInuser}));
       {
        toast({
          title: 'Success',
          description: 'Admin Logged in successfully',
          position: 'top',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        // setRoute(true)
        setTimeout(() => {
          navigate('/admin');
          window.location.reload();
        }, 4000);
      }
    } else if (errmsg) {
      toast({
        title: 'Login Failed',
        description: errmsg,
        position: 'top',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  }, [isAuth, token, errmsg]);

  return (
    <>
    <Navbar2/>
      <Box
        position={'relative'}
        style={{
          backgroundImage: `url(${flaglady})`,
          backgroundSize: 'cover',
        }}
      ></Box>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          h: '100vh',
        }}
      >
        <Flex
          style={{
            backgroundImage: `url(${flaglady})`,
           
            backgroundSize: 'cover',
          }}
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
         

          <Stack  spacing={8} mx={'auto'} w="35%" py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Login to your account!</Heading>
            </Stack>
            <Box
              
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'xl'}
              p={8}
            >
              <Stack spacing={8} >
              
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <Button
                    type="submit"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </>
  );
}

