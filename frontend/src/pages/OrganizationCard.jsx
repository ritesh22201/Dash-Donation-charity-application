import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { postCategory } from '../redux/OrgReducer/action';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import health from "../Assets/health.avif"
import education from "../Assets/education.avif"
import food from "../Assets/food.avif"
import ukraineDonate from "../Assets/ukraineDonation.avif"

function OrganizationCard({ data }) {
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
    const { token } = JSON.parse(localStorage.getItem('ch-token')) || {};
    // const { savedId } = useSelector((store) => store.donationReducer);
    const categoryId = localStorage.getItem('savedId') || '';
    const { orgDataCategory } = useSelector((store) => store.orgReducer);

    const handleSaveData = (data, id, token) => {
        dispatch(postCategory(data, id, token));

    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {

        if (orgDataCategory) {

            // toast({
            //     title: 'Data saved',
            //     description: 'Redirecting to payment',
            //     status: 'success',
            //     isClosable: true,
            //     duration: 4000,
            //     position: 'top'
            // });

            setTimeout(() => {
                navigate('/payment');
                localStorage.removeItem('savedId');
                window.location.reload();
            }, 2000)
        }

    }, [orgDataCategory])

    return (
        <DIV>
            <div className='info-container'>
                <Box maxWidth="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    {data.category === 'food' ? <Image src={food} alt="Fissure in Sandstone" /> : data.category === 'health' ? <Image src={health} alt="Fissure in Sandstone" /> : data.category === 'education' ? <Image src={education} alt="Fissure in Sandstone" /> : <Image src={ukraineDonate} alt="Fissure in Sandstone" />}
                    <Box p="2">
                        <Heading as="h5" size="md">
                            {data.name}
                        </Heading>
                        <Text mt="4">{data.description}</Text>
                        <Text mt="4">{data.website}</Text>
                        <Heading textTransform={'capitalize'} mt="4" fontSize={'19px'}>{data.category}</Heading>
                        <Button onClick={() => handleSaveData(data.category, categoryId, token)} mt="4" colorScheme="blue">
                            Donate
                        </Button>
                    </Box>
                </Box>

            </div>
        </DIV>
    )
}
const DIV = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
border-radius: 10px;
font-size: medium;
display: flex;
background-color: rgba(163, 223, 247, 0.3);
margin: auto;
gap: 10px;
padding: 30px;
width: 100%;
height: 400px;
img{
    height: 100px;
    /* width: 40%; */
    border-radius: 10px;
}
.textDiv{
    display: flex;
    font-weight: 700;

}
.textDiv > p{
    font-weight: 400;
    margin-left: 5px;
}
.doneteBtn{
    color: white;
  background-color: #0524c9cc;
  width: fit-content;
  font-size: medium;
  padding:10px;
  /* font-weight: 600; */
  margin: 10px 0;
  border-radius: 10px;
}
.doneteBtn:hover{
    background: blue;
}


@media only screen and (max-width: 1024px) {
    gap: 5px;
    font-size: small;
    img{
    height: 80px;

    }
    .textDiv{
    display: flex;
    font-weight: 600;

    }
    .doneteBtn{
    
  font-size: small;
  padding:5px;
  /* font-weight: 600; */
  margin: 5px 0;
  border-radius: 10px;
}
}

`


export default OrganizationCard;