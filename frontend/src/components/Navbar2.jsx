import { Box, Flex, Image, Icon } from '@chakra-ui/react'
import React from 'react';
import logo from '../Assets/DASHDONATION.png';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { CgProfile } from "react-icons/cg"
import { FiLogIn } from "react-icons/fi"
import { logout } from '../redux/authreducer/action';
import { useDispatch } from 'react-redux';



const Navbar2 = () => {
    const user = JSON.parse(localStorage.getItem("ch-token")) || {};
    const navigate = useNavigate()
    const token = user.token;
    const dispatch = useDispatch()

    const handleLogOut = () => {

        localStorage.removeItem("ch-token")
        dispatch(logout(token))
        window.location.reload(true);

    }

    return (
        <Flex p={'10px'} justifyContent={'space-between'} alignItems={'center'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
            <Image onClick={() => navigate('/')} src={logo} w={'60px'} />
            {
                token ? <Menu>
                    {({ isOpen }) => (
                        <div>
                            <MenuButton isActive={isOpen} as={Button}   >
                                {isOpen ? <Icon size={30} as={CgProfile} /> : <Icon as={CgProfile} size={30} />}
                            </MenuButton>
                            <MenuList style={{ display: "flex", flexDirection: "column" }}>
                                <MenuItem color={"black"} >{user.name}</MenuItem>
                                <MenuItem color={"black"} onClick={() => {
                                    navigate("/adminlogin");
                                }}>Admin</MenuItem>
                                <MenuItem color={"black"} onClick={handleLogOut}>Log Out</MenuItem>
                            </MenuList>
                        </div>
                    )}
                </Menu> : <Menu>
                    {({ isOpen }) => (
                        <div>
                            <MenuButton isActive={isOpen} as={Button}   >
                                {isOpen ? <Icon size={30} as={FiLogIn} /> : <Icon as={FiLogIn} size={30} />}
                            </MenuButton>
                            <MenuList style={{ display: "flex", flexDirection: "column" }}>
                                <MenuItem color={"black"} onClick={() => {
                                    navigate("/adminlogin")
                                }}>Admin</MenuItem>
                                {window.location.pathname === '/users/register' ? '' :
                                    <MenuItem color={"black"} onClick={() => navigate('/users/register')}>Signup</MenuItem>
                                }
                            </MenuList>
                        </div>
                    )}
                </Menu>

            }
        </Flex>
    )
}

export default Navbar2;