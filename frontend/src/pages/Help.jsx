import React from 'react'
import styled from "styled-components"
import helpImage from "../Assets/helpImage.jpg"
import  background  from '../Assets/background.png';
import girl from "../Assets/girl.png"
import { StarIcon,PhoStarIconneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
// import {} from "react-icons"
 const Help = () => {
  return (
    <DIV>

    <div style={{backgroundImage:url(background)}}>
        <h1 className='heading'>WHAT ULRAINE NEEDS NOW :</h1>
        <img src={helpImage} alt="" />
    </div>
    <div className='children'>
        <h1 className='heading'>HELP FOR CHILDREN:</h1>
        <p className='bluePara'>
        UKRAINIAN CHILDREN ARE SUFFERING FROM THE AGGRESSION OF THE RUSSIAN FEDERATION AND NEED YOUR FINANCIAL SUPPORT TODAY.
        </p>
        <div className='helpContainer'>
          <img  src={girl} alt="" />
          <div >
            <h1>UKRAINIAN CHILDREN NEED FUNDS FOR:</h1>
            <div className='childFunds'>
              <StarIcon/> 
              <p>Medicines</p>
            </div>
            <div className='childFunds'>
               <StarIcon/> 
              <p>Vitamins</p>
            </div>
            <div className='childFunds'>
               {/* <StarIcon/>  */}
              <p>Food</p>
            </div>
            <div className='childFunds'>
              {/* <StarIcon/>  */}
              <p>Clothing</p>
            </div>
            <div className='childFunds'>
               {/* <StarIcon/>  */}
              <p>Footwear</p>
            </div>
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
      background-image: url("../Assets/background.png");
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
      color: #464646;
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
      background-image: url({background});
    }
`
