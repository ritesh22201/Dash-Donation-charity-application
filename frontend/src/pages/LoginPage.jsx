import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import '../styles/login.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authreducer/action';
import { Toast, useToast } from '@chakra-ui/react';

const LoginPage = () => {
    // const navigate = useNavigate()
    const dispatch = useDispatch();
    const toast = useToast()
    const {isAuth ,errorMsg,token} = useSelector(store => store.authReducer)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = { email, password }
        // axios.post("https://odd-lion-life-jacket.cyclic.app//users/login", userData)
        //   .then((res) => {
        //       console.log(res)
        //       localStorage.setItem("ch-token", res.data?.token)
        //       alert(`${res.msg}`)
        //     //  if(email=="admin@gmail.com"){
        //     //   navigate("/admin")
        //     //  }else{
        //     //   navigate(location)
        //     //  }
        //   })
        //   .catch((err) => {
        //      alert(err)
        // })
        dispatch(login(userData))
        window.location.reload(true);
      }

   useEffect(()=>{
    if(token){
      toast({
        description  : "User is Login successfull",
        status : 'success',
        isClosable : true,
        duration: 4000,
        position : 'top'
      })
    }else if(errorMsg){
      toast({
        description : errorMsg,
        status : 'error',
        isClosable : true,
        duration: 4000,
        position : 'top'
      })
     }
   },[isAuth,errorMsg,token])


  return (
    <div>
    <div className='background'>
      {/* <img width={"100%"} src="https://plus.unsplash.com/premium_photo-1661963873162-5028faa8ce36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" /> */}
    </div>

    <div className='signup-page'>
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