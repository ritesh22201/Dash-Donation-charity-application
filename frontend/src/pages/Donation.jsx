import React, { useState } from 'react'
import background from "../Assets/background.png"
import { Box} from '@chakra-ui/react'
import styled from 'styled-components'
function Donation() {
    const [showMore, setShowMore] = useState(false)

  return (
    <DIV>
        <Box className='mainContainer' bgImage={background}>
            <div className='main-div'>

           

        <div className='heading-main'>
            <h1>DONET</h1>
            <h1>TODAY</h1>
        </div>
        <div className='donation-container'>
            <button>5 EUR</button>
            <button>25 EUR</button>
            <button>50 EUR</button>
            {
                showMore ? (<>
                    <button>100 EUR</button>
                    <button>200 EUR</button>
                    <button>500 EUR</button>
                    <button>1000 EUR</button></>
                ) : false
            }
        <div className='load-more' onClick={()=> setShowMore(!showMore)}>{
            showMore ? " show less": " load more"
        }</div>
        </div>
        <div className='heading-last'>
            <h1>SAVE </h1>
            <h1>THE WORLD</h1>
            <h1>TOMORROW</h1>
        </div>
        </div>
        </Box>

    </DIV>
  )
}
const DIV = styled.div`
    /* padding: 60px; */
    
    .mainContainer{
        padding: 60px;
        height: 100vh;
    }
    .main-div{
        width: 60%;
        margin: auto;
    }
    .donation-container{
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: white;
        background-color: white;
        opacity: 0.8;
        transform: 0.5s;
        transition: 0.5s;
        /* width: 60%; */
        
        margin: auto;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
    .donation-container  button{
        background-color:#3480ef;
        opacity: 1;
        font-size: x-large;
        font-weight: 600;
        border-radius: 20px;
    }
    .heading-main{
        font-size: 60px;
        
        width: fit-content;
        color: #d9d9d9;
        font-weight: 600;
    }
    .heading-last{
        color: #0057b8;
        font-size: 60px;
        width: fit-content;
        text-align: end;
        width: 100%;
        font-weight: 700;
    }
    .load-more{
        /* background-color: white; */
        color: blue;
        text-align: center;
        font-size: x-large;
    }


`
export default Donation