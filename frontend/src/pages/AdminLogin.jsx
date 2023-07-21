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
import { adminLogin } from '../redux/AdminReducer/action';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import handsImg from '../Assets/admins/handsimage.avif';
import saveukraine from '../Assets/admins/saveu.avif';
import flaglady from '../Assets/admins/flaglady.avif';
import AdminSideBar from '../components/AdminSideBar';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuth, token, errmsg } = useSelector(store => store.adminReducer);
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [route, setRoute] = useState(false);

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
      localStorage.setItem('isAuth', JSON.stringify(isAuth));
      if (location.pathname === '/adminlogin') {
        toast({
          title: 'Success',
          description: 'User Logged in successfully',
          position: 'top',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        // setRoute(true)
        setTimeout(() => {
          navigate('/dashboard');
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
      <Box
        position={'relative'}
        style={{
          backgroundImage: `url(${flaglady})`,
          //  backgroundRepeat:"no-repeat",

          backgroundSize: 'cover',
        }}
      ></Box>

      <form
        onSubmit={handleSubmit}
        style={{
          // position:"absolute",
          //  top:"0",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          //  minHeight:'100vh'
          h: '100vh',
        }}
      >
        <Flex
          style={{
            backgroundImage: `url(${flaglady})`,
            //  backgroundRepeat:"no-repeat",
            backgroundSize: 'cover',
          }}
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          {/* <Box>
        <Image src="https://img.freepik.com/free-vector/hand-drawn-pray-ukraine-illustration_23-2149365915.jpg?w=740&t=st=1689876806~exp=1689877406~hmac=a3a5e57e6d2dbfd2f17d2dbf392962006909dd683f53f7c2896d1944f903eba6"/>
     </Box> */}

          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Login to your account!</Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}
            >
              <Stack spacing={4}>
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
                    Sign in
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
