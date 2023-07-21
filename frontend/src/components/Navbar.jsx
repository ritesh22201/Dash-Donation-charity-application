// import { ReactNode } from 'react';
// import styled from "styled-components"
// import Home from '../pages/Home';
// import  background  from '../Assets/background.png';
// import DASHDONATION  from "../Assets/DASHDONATION.png"
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
// import About from '../pages/About';
// import Help from '../pages/Help';
// import Partners from '../pages/Partners';
// import Contact from '../pages/Contact';
// import Footer from '../pages/Footer';
// import AllRoutes from "../routes/AllRoutes"
// const Links = ['About', 'Help', 'Partners',"Contact us"];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

// export default function WithAction() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <DIV>
//         <Box bgImage={background}  backgroundRepeat={"repeat-x"}  >

       
//       <Box px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
         
//           <HStack spacing={8} alignItems={'center'}>
//             <Box>
//                 <img className='mainLogo' src={DASHDONATION} alt="" />
//             </Box>
//             <HStack
//               as={'nav'}
//               spacing={4}
//               display={{ base: 'none', md: 'flex' }}>
//               {Links.map((link) => (
//                 <NavLink className="navOpt" to={link} key={link}>{link}</NavLink>))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={'center'}>
//             {/* <Button
//               variant={'solid'}
//               colorScheme={'teal'}
//               size={'sm'}
//               mr={4}
//               leftIcon={<AddIcon />}>
//               Action
//             </Button> */}
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 minW={0}>
//                 <Avatar
//                 margin={"15px"}
//                   size={'sm'}
               
//                 />
//               </MenuButton>
//               <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//               <MenuList className='navOpt'>
//                 <MenuItem >About DashDonetion</MenuItem>
//                 <MenuItem>Help</MenuItem>
//                 {/* <MenuDivider /> */}
//                 <MenuItem>Partners</MenuItem>
//                 <MenuItem>Contact us</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//         <AllRoutes/>
//       <Home/>
//       <About/>
//       <Help/>
//       <Partners/>
//       <Contact/>
//       <Footer/>
//       </Box>
//     </DIV>
//   );
// }

// const DIV = styled.div`

// background-image: url(background) ;
// .mainLogo{
//     height: 50px;
    
//     border-radius: 50%;
// }
// .navOpt > a {
//   color: white;
//   font-size: larger;
// }
// `

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Button
  } from '@chakra-ui/react'
  

import {ChevronDownIcon} from "@chakra-ui/icons"
import { useEffect, useRef, useState } from "react";
import {Link,useNavigate, useSearchParams} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
// import "../Style/navbar.css"
import styled from "styled-components";
// import {BsHandbag} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
// import {BiSearch} from "react-icons/bi"
import {FiLogIn} from "react-icons/fi"
import { Icon } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons"
import DASHDONATION  from "../Assets/DASHDONATION.png"

// import logo_final from "../Images/logo-new.png"
// import { getProduct } from "../Api/action";
// import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';
// import { RootState } from '../Constraints/Type';
// import { LoginFailure } from '../Redux/Login/action';
// import styled from "styled-components";
 const Navbar = () =>{
	{/* -------------------------------------------------------I added search here------------------------- */}
	// const dispatch = useDispatch()
	// const [searchParams,setSearchParams] = useSearchParams();
	// const initialParams = searchParams.getAll("category" || "color" ||"gender")
	// const [searchText,setSearchText] = useState(initialParams || "");
	

	// const paramObj = {
	// 	params : {
	// 	  q : searchText && searchText
	// 	}
	//   }
	//   useEffect(()=>{
	// 	dispatch(getProduct(paramObj))
	//   },[searchText])

	// const navRef = useRef(null);
	const [navClass, setNavClass] = useState(false)

	

	const showNavbar = () => {
		setNavClass(!navClass)		
	};

	  const login = true
  //  useSelector((state)=> state.AuthReducer.isAuth)
	// const searchBar = useRef(null)

// const dispatch = useDispatch()
	const handleLogOut = () =>{
// 		dispatch(LoginFailure())
	}

	// const showSearch = ()=>{
	// 	searchBar.current.classList.toggle(
	// 		"navSearch"
	// 	);
	// 	console.log('check');
	// }
	
const navgite = useNavigate()
	return <HEADER>
    <header>


			
			<Link to="/"> <img className="logo" alt="logo" src={DASHDONATION} /> </Link>


			<div className= {"secNav"} >
			{/* ref={navRef} */}
			<nav className= {navClass ? "responsive_nav" : "false"} >
				<Link  to="/" >About</Link>
                {/* <div className="blackDot"></div> */}
				<Link  to="/" className="about section" >Help</Link>
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
						login ? <Menu>
						{({ isOpen }) => (
						  <div>
							<MenuButton isActive={isOpen} as={Button}   >
							  {isOpen ? <Icon size={30} as={CgProfile} /> : <Icon as={CgProfile} size={30} />}
							</MenuButton>
							<MenuList style= {{display:"flex", flexDirection:"column"}}>
							  <MenuItem color={"black"} onClick={()=> {
								navgite("/admin")
							  }}>Admin</MenuItem>
							  <MenuItem color={"black"} onClick={handleLogOut}>Log Out</MenuItem>
							</MenuList>
						  </div>
						)}
					  </Menu> : <Link to="/login">
                    <Icon as={FiLogIn}/>
					</Link>

					}
					
                </div>
			<button onClick={showNavbar}
				className="nav-btn"
				 >
				
				<Icon as={FaBars} size={10}  />
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
/* padding-bottom: 50px; */
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
	background: none;
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