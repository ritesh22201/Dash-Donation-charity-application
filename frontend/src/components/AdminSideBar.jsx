import React, { ReactNode, useEffect, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Input,
  Button,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiCalendar,
  FiSearch,
  FiUser,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { VscOrganization } from 'react-icons/vsc';
import { ReactText } from 'react';
import AdminPage from '../pages/Admin/AdminPage';
import logo from '../Assets/DashDonationLogo.png';
import AdminUsers from './AdminUsers';
import AdminOrganization from './AdminOrganization';
import Admins from './Admins';
import Fundraise from './Fundraise';
import axios from 'axios';
import { baseUrl } from '../url';
import { useDispatch, useSelector } from 'react-redux';
import { searchDonors } from '../redux/AdminReducer/action';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome, href: '/dashboard' },
  { name: 'Users', icon: FiUser, href: '/adusers' },
  { name: 'Admins', icon: FiUser, href: '/adminusers' },
  { name: 'Organizations', icon: VscOrganization, href: '/org' },
  { name: 'Fundrasing', icon: FiTrendingUp, href: '/funds' },
  { name: 'Events', icon: FiCalendar, href: '/events' },
  { name: 'Campaigns', icon: FiCompass, href: 'campaigns' },
];

export default function AdminSideBar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <>
      <Box
        transition="3s ease"
        bg={useColorModeValue('#0158B8', 'gray.900')}
        color="white"
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text
            fontSize="2xl"
            fontFamily="monospace"
            color="#FFD249"
            fontWeight="bold"
          >
            {/* {logo} */}
            DashDonation
          </Text>
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map(link => (
          <NavItem key={link.name} href={link.href} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
        <Box mt="200px" textAlign={'center'} variant="ghost">
          <Button>Logout</Button>
        </Box>
      </Box>
    </>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
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
        {...rest}
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
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [status, setStatus] = useState(false);
  
  const dispatch = useDispatch()
  const {searchusers,qval} = useSelector(store => store.adminReducer)
  console.log(searchusers)


  const handleSearch = val => {
    dispatch(searchDonors(val))
  };

  const handleDebounce = val => {
    if (id) clearTimeout(id);
    var id = setTimeout(() => {
      handleSearch(val);
    }, 1000);
  };

  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}
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
          {/* {logo} */}
          {/* DashDonation */}
        </Text>

        <HStack spacing={{ base: '0', md: '5' }}>
          {/* <IconButton
        onClick={()=>setStatus(true)}
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiSearch />}
        /> */}
          {status ? <Input  type="text"  onChange={(e)=>handleDebounce(e.target.value)} placeholder="Search Here..." /> : ''}
          {status ? (
            <CloseButton onClick={() => {
              setStatus(false)
            }} />
          ) : (
            <FiSearch cursor={"pointer"} onClick={() => setStatus(true)} />
          )}

          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />

          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
              >
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Justina Clark</Text>
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
                <MenuItem>Profile</MenuItem>
                {/* <MenuItem>Settings</MenuItem> */}
                {/* <MenuItem>Billing</MenuItem> */}
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
      {window.location.pathname == '/dashboard'  ? (
        <AdminPage />
      )  : window.location.pathname === '/adusers' ? (
        <AdminUsers />
      ) : window.location.pathname === '/org' ? (
        <AdminOrganization />
      ) : window.location.pathname === '/adminusers' ? (
        <Admins />
      ) : window.location.pathname === '/funds' ? (
        <Fundraise />
      ) : (
        ''
      )}
    </>
  );
};
