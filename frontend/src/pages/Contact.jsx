import React from 'react'
import { styled } from 'styled-components'
import background from "../Assets/background.png"
import { Box, Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
function Contact() {
  return (
    <DIV>
            <h1 className='fHead'>CONTACT US</h1>
        <Box  className='contact-form' bgImage={background} bgRepeat={"no-repeat"}>

    <div style={{display:"flex", gap:"40px"}}>
        {/* <input type="text" /> */}
        {/* <input type="text" /> */}
        <Input color={"black.300"} className='inputBox' size='lg' placeholder='Name' />
        <Input className='inputBox' size='lg' placeholder='Email' />
    </div>
    <Input className='inputBox' size='lg' placeholder='Subject' />
    <Input fontSize={"30px"} color='black'  height={"400px"} className='msg' size='lg' placeholder='Subject' />
        <Button className='btnSend' >SEND</Button>

        </Box>
    </DIV>
  
  )
}

const DIV = styled.div`
    width: 90%;
    margin: auto;
    /* border: grey solid 2px; */
    .fHead{
        font-size: 40px;
        font-weight: 700;
    }
   .btnSend{
    background-color: #3574e2;
    color: white;
    margin: 30px 0;
    display: flex;
    padding: 30px;
    font-size: larger;
    /* justify-content: end; */
   }
    .inputBox{
        margin: 20px 0;
        height: 80px;
        font-size: 30px;
        /* color: black; */
    }
    .contact-form{
        padding: 50px;
        border: white solid 1px;
        border-radius: 40px;
        
    }

`

export default Contact