import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OrganizationCard from '../components/OrganizationCard'
function Organization() {
    const [data,setData] = useState([{name:"Health Aid Foundetion",description:"medical assistance",category:"Health",website:"www.xyz.com"},{name:"Health Aid Foundetion",description:"medical assistance",category:"Education",website:"www.xyz.com"},{name:"Health Aid Foundetion",description:"medical assistance",category:"Health",website:"www.xyz.com"},{name:"Health Aid Foundetion",description:"medical assistance",category:"Health",website:"www.xyz.com"},{name:"Health Aid Foundetion",description:"medical assistance",category:"Education",website:"www.xyz.com"}])
    useEffect(()=>{
        axios.get("https://odd-lion-life-jacket.cyclic.app/users/organization").then((res)=> 
        {
            setData(res.data)
         console.log(res);   
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    console.log('check');
  return (
    <DIV>

    {
      data.map((el)=>(  <OrganizationCard data={el} />))
    }
  
    </DIV>
  )
}
const DIV= styled.div`
padding: 20px;
display: grid;
gap: 10px;
grid-template-columns: repeat(3,1fr);
margin: auto;


@media only screen and (max-width: 1024px) {
  grid-template-columns: repeat(1,1fr);


}

`

export default Organization