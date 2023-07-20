import { ReactNode } from 'react';
import styled from "styled-components"
import Home from '../pages/Home';
import  background  from '../Assets/background.png';
import DASHDONATION  from "../Assets/DASHDONATION.png"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import About from '../pages/About';
import Help from '../pages/Help';
import Partners from '../pages/Partners';
import Contact from '../pages/Contact';
import Footer from '../pages/Footer';

const Links = ['About', 'Help', 'Partners',"Contact us"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DIV>
        <Box bgImage={background}  backgroundRepeat={"repeat-x"}  >

       
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <img className='mainLogo' src={DASHDONATION} alt="" />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink className="navOpt" to={link} key={link}>{link}</NavLink>))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button> */}
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                margin={"15px"}
                  size={'sm'}
               
                />
              </MenuButton>
              <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
              <MenuList className='navOpt'>
                <MenuItem >About DashDonetion</MenuItem>
                <MenuItem>Help</MenuItem>
                {/* <MenuDivider /> */}
                <MenuItem>Partners</MenuItem>
                <MenuItem>Contact us</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Home/>
      <About/>
      <Help/>
      <Partners/>
      <Contact/>
      <Footer/>
      </Box>
    </DIV>
  );
}

const DIV = styled.div`

background-image: url(background) ;
.mainLogo{
    height: 50px;
    
    border-radius: 50%;
}
.navOpt > a {
  color: white;
  font-size: larger;
}
`