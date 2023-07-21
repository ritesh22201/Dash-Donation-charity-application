import React from 'react'
import styled from "styled-components"
import  background  from '../Assets/background.png';
import { Box } from '@chakra-ui/react';
import Help from "./Help"
import About from "./About"
import Partners from "./Partners"
import Contact from "./Contact"
import Footer from "./Footer"
function Home() {
  return (
    <DIV>
      
        <Box  bgImage={background}  backgroundRepeat={"repeat-x"}>
           <div className='heading1'>
            <h1>HELP</h1>
            <h1>UKRAINE</h1>
            <h1>WITHSTAND</h1>
           </div>
           <div className='donateBtn'>DONATE</div>
           <div>
            <div className='applink'>
              <img src="https://www.charityhero.live/static/media/BAppStor.644ce6de09f0144c5967424bd9b6f27c.svg" alt="" />
              <img src="https://www.charityhero.live/static/media/BGStor.db895fe2f79e4f4272fb1a3bcb554c67.svg" alt="" />
            </div>
           </div>
           <About/>
       <Help/>
       <Partners/>
       <Contact/>
       <Footer/>
        </Box>
    </DIV>
  )
}

const DIV = styled.div`

 /* background-image: url(background); */
 /* background-color: #cccccc; */
/* height: 1000px; */
/* width: 100%; */
.heading1{
    font-size: 90px;
    line-height: 110px;
    padding: 40px;
    font-weight: 700;
    color: #0524c9cc;
}
.donateBtn{
  color: white;
  background-color: #0524c9cc;
  width: fit-content;
  font-size: x-large;
  padding:10px 20px;
  font-weight: 600;
  margin: 50px;
  border-radius: 20px;
}
.applink{
  padding: 0 50px;
  display: flex;
  justify-content: end;
  gap: 10px;
}
`


export default Home