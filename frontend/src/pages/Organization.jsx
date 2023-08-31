import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OrganizationCard from './OrganizationCard'
import { useDispatch, useSelector } from 'react-redux';
import { getOrg } from '../redux/OrgReducer/action';
import Navbar2 from '../components/Navbar2';
import Footer from './Footer';
import Loader from '../components/Loader';

function Organization() {
    const {orgData, isloading} = useSelector(store => store.orgReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrg());
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <Navbar2 />
            {isloading ? <Loader/> : 
            <div style={{ backgroundColor: '#f4f0f0' }}>
                <h1 className='heading' style={{ fontSize: '35px', fontWeight: 'bold', padding: '20px ', background: '#394FA5', background: 'linear-gradient(to right, #394FA5 0%, #3D5FAD 50%, #467FBE 100%)', color : 'white'}}>CHOOSE YOUR ORGANIZATION</h1>
                <DIV>
                    {
                        orgData.map(el => (<OrganizationCard data={el} />))
                    }
                </DIV>
            </div>
           }
            <Footer />
        </>
    )
}
const DIV = styled.div`
padding: 20px;
display: grid;
gap: 20px;
grid-template-columns: repeat(3,1fr);
/* margin: auto; */


@media only screen and (max-width: 1024px) {
  grid-template-columns: repeat(1,1fr);


}

`

export default Organization;