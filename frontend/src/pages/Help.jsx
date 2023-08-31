import React from 'react'
import styled from "styled-components"
import helpImage from "../Assets/helpImage.jpg"
import  background  from '../Assets/background.png';
import girl from "../Assets/girl.png"
import { StarIcon,PhoStarIconneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import playstore from "../Assets/playstore.jpg"
import appstore from "../Assets/appstore.jpg"
import {FaStarOfLife} from "react-icons/fa"
import { Box } from '@chakra-ui/react';
// import {} from "react-icons"
 const Help = () => {
  return (
    <DIV>

    <div  style={{ backgroundImage:`url(../Assets/background.png)` }} >
        <h1 className='heading'>WHAT ULRAINE NEEDS NOW :</h1>
        <img src={helpImage} alt="" />
    </div>
    
    <div   className='children'>
        <h1 className='heading'>HELP FOR CHILDREN:</h1>
        <p className='bluePara'>
        UKRAINIAN CHILDREN ARE SUFFERING FROM THE AGGRESSION OF THE RUSSIAN FEDERATION AND NEED YOUR FINANCIAL SUPPORT TODAY.
        </p>
        <Box bgImage={background}  backgroundRepeat={"repeat-x"} className='helpContainer'>
          <img  src={girl} alt="" />
          <div >
            <h1>UKRAINIAN CHILDREN NEED FUNDS FOR:</h1>
            <div className='childFunds'>
              <FaStarOfLife/> 
              <p>Medicines</p>
            </div>
            <div className='childFunds'>
               <FaStarOfLife/> 
              <p>Vitamins</p>
            </div>
            <div className='childFunds'>
               <FaStarOfLife/> 
              <p>Food</p>
            </div>
            <div className='childFunds'>
              <FaStarOfLife/> 
              <p>Clothing</p>
            </div>
            <div className='childFunds'>
               <FaStarOfLife/> 
              <p>Footwear</p>
            </div>
          </div>
        </Box>
    </div>
    <div style={{marginTop:"50px"}}>
      <h1 className='basisH'>DO YOU WANT TO HELP ON</h1>
      <h1 className='basisH'>A PERMANENT BASIS?</h1>
      <div className='appLink'>
        <p>Download the app and invite friends.</p>
        <div className='logos' >
          <img src={playstore} alt="" />
          <img src={appstore} alt="" />
        </div>
      </div>
    </div>
    
    </DIV>
  )
}


export default Help
const DIV = styled.div`
    padding: 50px ;
    
    .helpContainer{
      /* border: 1px solid grey; */
      display: flex;
      margin: 20px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      justify-content: space-between;
      /* background-color: #d2d1d1; */
      border-radius: 20px;
      /* background-image: url("../Assets/background.png"); */
      width: 100%;
    }
    .helpContainer > div{
      margin: 50px;

      font-size: x-large;
    }
    .helpContainer > img{
      width: 50%;
    }
    .childFunds{
      color: white;
      width: 100%;
      margin-top: 20px;
      line-height: 50px;
      display: flex;
      border-bottom: solid 1px grey;
      justify-content: space-between;
    }
    .bluePara{
      width: 50%;
      font-size: larger;
      font-weight: 600;
      color: #228aff;
    }
    .heading{
      /* margin: 20px; */
      font-weight: 800;
      margin-top: 20px;
        font-size: 40px;
    }
    .children{
      /* background-image: url({background}); */
    }
    .appLink{
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      justify-content: space-between;
      padding: 40px;
      border-radius: 10px;
      font-size: x-large;
    }
    .appLink > div{
      display: flex;
      gap: 20px;
    }
    .appLink img{
      border-radius: 15px;
    }
    .basisH{
      font-size: 30px;
      font-weight: 700;
    }

    @media only screen and (max-width: 1024px) {
      padding: 30px ;

    .heading{
      /* margin: 20px; */
      font-weight: 600;
      margin-top: 10px;
        font-size: 18px;
    }
    .helpContainer > img{
      width: 0;
      height: 0;
      visibility: hidden;
    }
    .helpContainer{
      margin: auto;

    }
    .logos > img{
      height: 40px;
    }
    .logos{
      display: flex;
      flex-direction: column;
    }
    .appLink{
      font-size: medium;
    }
    .basisH{
      font-size: larger;
      text-align: center;
    }
    .bluePara{
      font-size: medium;
      width: 100%;
      margin: 10px 0;
    }
  }
`
