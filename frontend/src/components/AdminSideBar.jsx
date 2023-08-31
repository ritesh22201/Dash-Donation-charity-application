import React, { useState } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  
    IconButton,
    HStack,
    Avatar,
    VStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuDivider,
    MenuList,
    
  } from '@chakra-ui/react';
  import { FiMenu, FiBell, FiChevronDown, FiUser, FiSearch, FiCalendar } from 'react-icons/fi';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi';
import { VscOrganization } from 'react-icons/vsc';
import { IconType } from 'react-icons';

import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout, searchDonors } from '../redux/AdminReducer/action';



const LinkItems = [
    { name: 'Dashboard', icon: FiHome, to: '/dashboard' },
    { name: 'Users', icon: FiUser, to: '/adusers' },
    { name: 'Admins', icon: FiUser, to: '/admins' },
    { name: 'Organizations', icon: VscOrganization, to: '/org' },
    { name: 'Fundrasing', icon: FiTrendingUp, to: '/funds' },
    { name: 'Events', icon: FiCalendar, to: '/events' }
    // { name: 'Campaigns', icon: FiCompass, href: '/campaigns' }
  ];
  
const AdminSidebar = () => {
  return (
    <Box
      transition="3s ease"
    //   bg={useColorModeValue('white', 'gray.900')}
    bg={useColorModeValue('#0158B8', 'gray.900')}
    color="white"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" color={"#FFD249"} fontFamily="monospace" fontWeight="bold">
        DashDonation
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} to={link.to} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({to, icon, children }: { icon: IconType; children: React.ReactNode }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
            //   bg: 'cyan.400',
            bg: 'rgb(232, 204, 25)',
  
            color: 'white',
          }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
    // <Link to="/">dasdsd</Link>
  );
};


export const MobileNav = ({ onOpen }: { onOpen: () => void }) => {
  const [status, setStatus] = useState(false);

    const dispatch = useDispatch();
    const { searchusers, qval } = useSelector(store => store.adminReducer);
    
    const admintokenData = JSON.parse(localStorage.getItem("ad-token")) || {}
  
  
    const handleSearch = val => {
      dispatch(searchDonors(val));
    };
  
  
  
    const handleDebounce = val => {
      if (id) clearTimeout(id);
      var id = setTimeout(() => {
        handleSearch(val);
      }, 1000);
    };
  
  
    const handleLogout = () => {
      localStorage.removeItem("ad-token")
      dispatch(adminLogout())
      window.location.reload()
    }
    return (
        <>
        {/* <Layout/> */}
        <Flex
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
          />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          >
          Logo
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
           {/* <IconButton
        onClick={()=>setStatus(true)}
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiSearch />}
        /> */}
          {status ? (
            <Input
              type="text"
              onChange={e => handleDebounce(e.target.value)}
              placeholder="Search Here..."
            />
          ) : (
            ''
          )}
          {status ? (
            <CloseButton
              onClick={() => {
                setStatus(false);
              }}
            />
          ) : (
            <FiSearch cursor={'pointer'} onClick={() => setStatus(true)} />
          )}
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
            />
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
                >
                <HStack>
                  {/* <Avatar
                    size="sm"
                    src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    /> */}
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                    >
                    {
                     admintokenData.token ? <Text fontSize="sm">{admintokenData.loggedInuser}</Text> : <Text>Admin User</Text>
                   } 
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
                {/* <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem> */}
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
      </>
    );
  };
  

  export default AdminSidebar;