import React from 'react'
import styled from 'styled-components'
import health from "../Assets/health.jpg"
import education from "../Assets/education.jpg"
function OrganizationCard({ data }) {
    console.log(data);
    let img = data.category == "Health" ? health : data.category == "Education" ? education : education;
    return (
        <DIV>
            <div className='info-container'>
                <p className='textDiv'>Name: <p>{data.name}</p> </p>
                <p className='textDiv'>Description: <p>{data.description}</p> </p>
                <p className='textDiv'>Website: <p>{data.website}</p> </p>
                <p className='textDiv'>Category: <p>{data.category}</p> </p>
                <button className='doneteBtn'>DONETE</button>
            </div>
            <img src={img} alt="" />

        </DIV>
    )
}
const DIV = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
border-radius: 10px;
font-size: medium;
display: flex;
margin: auto;
gap: 10px;
padding: 30px;
width: fit-content;
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