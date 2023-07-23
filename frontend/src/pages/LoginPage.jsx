import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css'
import bgImage from "../Assets/background.png"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authreducer/action';
import { Toast, useToast } from '@chakra-ui/react';

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const toast = useToast()
  const { isAuth, errorMsg, token, loggedInUser } = useSelector(store => store.authReducer)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, password }
    dispatch(login(userData))
  }

  useEffect(() => {
    localStorage.setItem('ch-token', JSON.stringify({loggedInUser, token}));
    if (token) {
      toast({
        description: "User is Login successfull",
        status: 'success',
        isClosable: true,
        duration: 4000,
        position: 'top'
      })

      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 4000)
    } else if (errorMsg) {
      toast({
        description: errorMsg,
        status: 'error',
        isClosable: true,
        duration: 4000,
        position: 'top'
      })
    }
  }, [isAuth, errorMsg, token])


  return (
    <div>
     <div className='background'>
        {/* <img width={"100%"} src={bgImage} alt="" /> */}
        </div>
      <div className='signup-page' >
        <div className='signup-detail'>
          <h1>Give Your life to charity<br /> <span>Dash <span>Donation</span></span></h1>
          <img width={"100%"} src="https://media.istockphoto.com/id/1353332258/photo/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-standing-against-the-wall.webp?b=1&s=170667a&w=0&k=20&c=D53dy4HPlfLi9yCO8ouowIn9HqIWfkjEx4-C05B8TYU=" alt="" />

        </div>
        <form onSubmit={handleLogin} className='signup'>
          <h1>DASH<span>DONATION</span>  <span> Login</span></h1>

          <br />
          <label >Username</label>
          <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <label >Password</label>
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <button type="submit" >Login</button>          <span>Don't have an account ? <Link className='log-btn' to='/users/register'>SignUp</Link> </span>

        </form>
      </div>
   
    </div>
  )
}

export default LoginPage