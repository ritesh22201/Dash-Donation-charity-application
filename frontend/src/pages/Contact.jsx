import React from 'react'
import { styled } from 'styled-components'
import background from "../Assets/background.png"
import { Box, Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

function Contact() {
    return (
        <DIV>
            <h1 className='fHead'>CONTACT US</h1>
            <Box className='contact-form' bgImage={background} bgSize={'cover'} bgRepeat={"no-repeat"}>
                <div className='nameEmail'>
                    <Input color={"black.300"} className='inputBox' placeholder='Name' />
                    <Input className='inputBox' placeholder='Email' />
                </div>
                <Input className='inputBox' placeholder='Subject' />
                <Input fontSize={"30px"} color='black' height={"400px"} className='msg' placeholder='Message' />
                <Button className='btnSend'>SEND</Button>
            </Box>
        </DIV>
    )
}

const DIV = styled.div`
    width: 90%;
    margin: auto;
    /* border: grey solid 2px; */
    .nameEmail{
        display: flex;
        gap:40px;
        
    }
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
    @media only screen and (max-width: 1024px) {
        .fHead{
            font-size: 30px;
            font-weight: 500;
            margin-left: 10px;
        }
        .contact-form{
            border-radius: 20px;

            padding: 20px;
        }
        .nameEmail{
            flex-direction: column;
            gap: 10px;
        }
        .inputBox{
            font-size: medium;
            height: 40px;
        }
        .msg{
            height: 150px;
            font-size: medium;
        }
        .btnSend{
    background-color: #3574e2;
    color: white;
    margin: 10px 0;
    display: flex;
    padding: 10px;
    font-size: medium;
    /* justify-content: end; */
   }
        /* background-color: #3574e2; */
    }

`

export default Contact