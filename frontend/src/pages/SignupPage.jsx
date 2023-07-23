import React, { useEffect, useState } from 'react'
// import "../styles/signup.css"
import bgImage from "../Assets/background.png"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../redux/authreducer/action';
import { useToast } from '@chakra-ui/react';

const SignupPage = () => {
  const dispatch = useDispatch();
  const { isRegistered, errorMsg } = useSelector(store => store.authReducer);
  const navigate = useNavigate()
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setNumber] = useState("");
  const [age, setAge] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const details = { name, email, password, mobile, age }
    dispatch(signup(details));
  }

  useEffect(() => {
    if (isRegistered) {
      toast({
        description: isRegistered,
        status: 'success',
        isClosable: true,
        duration: 4000,
        position: 'top'
      })
    } else if (errorMsg) {
      toast({
        description: errorMsg,
        status: 'error',
        isClosable: true,
        duration: 4000,
        position: 'top'
      })
    }
  }, [isRegistered, errorMsg])

  return (
    <div className='cont'>
      <div className='background'>
        {/* <img width={"100%"} src={bgImage} alt="" /> */}
      </div>

      <div className='signup-page'>

        <div className='signup-detail'>
          <h1>Give your hand to make a change <br /> <span>DASH<span> DONATION</span></span></h1>
          <img width={"100%"} src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=870&q=80" alt="" />
          {/* <h3>
            Create your account today and raise fund <br />and bring the change in others life<br /> with the DashDonation support !
          </h3> */}
        </div>
        <form className='signup' onSubmit={handleSignup}>
          {/* <h4>Charity<span>Hero</span>  <span> SignUp</span></h4> */}
          <h1>DASH<span>DONATION</span>  <span> Signup</span></h1>

          <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} required />
          <br />
          <input type="number" placeholder='Enter your Mobile Number' value={mobile} onChange={(e) => setNumber(e.target.value)} required />
          <br />
          <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <input type="number" placeholder='Enter Your Age' value={age} onChange={(e) => setAge(e.target.value)} required />
          <br />
          <button type='submit'>Sign Up</button>
          <span>Already have an account ? <Link className='log-btn' to='/users/login'>Login</Link> </span>

        </form>
      </div>
    </div>
  )
}

export default SignupPage