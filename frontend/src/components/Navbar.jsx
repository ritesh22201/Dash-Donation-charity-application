import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	useDisclosure,
	useToast
} from '@chakra-ui/react'


import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg"
import { FiLogIn } from "react-icons/fi"
import { Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"
import DASHDONATION from "../Assets/DASHDONATION.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authreducer/action';

const Navbar = () => {
	// const {isOpen } = useDisclosure();
	const [navClass, setNavClass] = useState(false)
	const toast = useToast();
	const { isLoggedOut } = useSelector(store => store.authReducer);

	const user = JSON.parse(localStorage.getItem("ch-token")) || {};
	const token = user.token;

	const showNavbar = () => {
		setNavClass(!navClass)
	};


	const dispatch = useDispatch()

	const handleLogOut = () => {

		localStorage.removeItem("ch-token")
		dispatch(logout(token));
	}

	useEffect(() => {
		if (isLoggedOut === true) {
			toast({
				title: 'User logged out successfully',
				status: 'success',
				isClosable: true,
				duration: 4000,
				position: 'top'
			})

			setTimeout(() => {
				window.location.reload();
			}, 4000)
		}
	}, [isLoggedOut])

	const navigate = useNavigate()
	return <HEADER>
		<header>



			<Link to="/"> <img className="logo" alt="logo" src={DASHDONATION} /> </Link>


			<div className={"secNav"} >
				{/* ref={navRef} */}
				<nav className={navClass ? "responsive_nav" : "false"} >
					<Link to="/" >About</Link>
					{/* <div className="blackDot"></div> */}
					<Link to="/" className="about section" >Help</Link>
					{/* <div className="blackDot"></div> */}
					<Link to="/" >Partners</Link>
					{/* <div className="blackDot"></div> */}
					<Link to="/" >Contact us</Link>


					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}
					>
						{/* onClick={showNavbar} */}
						<Icon as={FaTimes} />
					</button>
					{/* -------------------------------------------------------I added search here------------------------- */}

				</nav>
				<div className="navIcons">
					{/* <input className="beforeSearch" ref={searchBar} type="text" placeholder="Search"  onChange={(e)=>setSearchText(e.target.value)}/> */}
					{/* <SearchIcon onClick={showSearch}/> */}
					<Link to="/cart">
						{/* <Icon as={BsHandbag}/> */}
					</Link>
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
											navigate("/adminlogin")
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
										<MenuItem color={"black"} onClick={() => navigate('/users/register')}>Signup</MenuItem>
									</MenuList>
								</div>
							)}
						</Menu>
					}

				</div>
				<button onClick={showNavbar}
					className="nav-btn"
				>

					<Icon as={FaBars} size={10} />
				</button>
			</div>
		</header>
	</HEADER>

}


const HEADER = styled.div`
  

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: "Titillium Web", sans-serif;
    /* outline: black; */
}
padding-bottom: ${window.location.pathname === "/" ? "0" : "60px"};
 /* background-color: #5c6bc0; */
 /* background-color: #283593;  button */

header {
	/* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	padding: 0 2rem;
	/* background-color;
	 */
	background: ${window.location.pathname === "/" ? "none" : "white"};
	color: black;
	font-size: larger;
	position:absolute;
	z-index: 100;
	width: 100%;
}

nav a {
	margin: 0 1rem;
	color: black;
	font-weight: 600;
	text-decoration: none;
}

nav a:hover {
	color: black;
	scale: 1.1;
	transition: 500ms;
	text-decoration: solid underline   #283593;

}

header .nav-btn {
	padding: 5px 10px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: black;
	visibility: hidden;
	opacity: 0;
	font-size: 20px;
}

header div,
nav {
	display: flex;
    width: fit-content;
    /* margin: auto; */
	align-items: center;
    /* justify-content: center; */
}
nav{
    margin: auto;
}

.blackDot{
    background-color: rgb(101, 101, 101);
    height: 5px;
    width: 5px;
    border-radius: 50%;
}

.lodo{
    font-size: larger;
    width: fit-content;
}
.navIcons{
    display: flex;
    gap: 20px;
    width: fit-content;
    font-size: 20px;
}
.logo{
	height: 40px;
	border-radius: 10px;
	/* border: 1px solid blue; */
	/* padding: -5px; */
}

.beforeSearch{
	border-radius: 10px;
	width: 0px;
	font-size: small;
	padding:  10px;
	visibility: hidden;
	transition: 0.4s;
}
.navSearch{
	visibility: visible;
	width: 200px;
	transition: 0.5s;
}

@media only screen and (max-width: 1024px) {
	.logo{
		height: 20px;
	}
	
	header .nav-btn {
		visibility: visible;
		opacity: 1;
	}

	header nav {
		position: fixed;
		top: -110vh;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 100;
		justify-content: center;
		gap: 1.5rem;
		background-color: black;
        color: white;
		transition: 1s;
	}

	header .responsive_nav {
		transform: translateY(110vh);
	}

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
        color: white;
        /* background-color: aliceblue; */
	}

	nav a {
        color: white;
		font-size: 1.5rem;
	}
}
`


export default Navbar