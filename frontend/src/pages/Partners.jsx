import React from 'react'
import { styled } from 'styled-components'
import logo1 from "./logos/logo1.png"
import logo2 from "./logos/logo2.png"
import logo3 from "./logos/logo3.png"
import logo4 from "./logos/logo4.png"
import logo5 from "./logos/logo5.png"
import logo6 from "./logos/logo6.png"
import partner1 from "../Assets/partner1.jpg"
import partner2 from "../Assets/partner2.jpg"
import partner3 from "../Assets/partner3.jpg"
import img01 from "./parnters/img01.jpg"
import img02 from "./parnters/img02.png"
import img03 from "./parnters/img03.jpg"
import img04 from "./parnters/img04.jpg"
import { FaStarOfLife } from 'react-icons/fa'
function Partners() {
  return (
    <DIV>
<div class="example1">
<div>
    <img src={logo1} alt="" />
    <img src={logo2} alt="" />
    <img src={logo3} alt="" />
    <img src={logo4} alt="" />
    <img src={logo5} alt="" />
    <img src={logo6} alt="" />



</div>
</div>
    <div className='container'>
        <h1 className='heading'>WE ARE LOOKING</h1>
        <h1  className='heading'>FOR PROJECT PARTNERS:</h1>
        <div className='partner-section'>
            <div>
                <div>

                <h2>Manufacturers and retail chains</h2>
                <p>We are ready to buy humanitarian goods from you to meet the needs of volunteers as quickly as possible.</p>
                </div>
                <img src={partner1} alt="" />
            </div>
            <div>
                <div>

                <h2>Information partners</h2>
                <p>Tell your audience about CHARITY HERO. Let us help Ukraine survive and defend the world by stopping the war.</p>
                </div>
                <img src={partner2} alt="" />
            </div>
            <div>
                <div>

                <h2>Ambassadors</h2>
                <p>We need your help so that we can continue to help and make the project more technological.</p>
                </div>
                <img src={partner3} alt="" />
            </div>
        </div>
    </div>
    <div className='founders'>
        <h1 className='heading'>WHO WE ARE</h1>
        <h1>WE ARE A CHARITAABLE INITIATIVE OF ORGANIZATIONS FROM UKRAINE, LATVIA AND THE UK</h1>
        <div className='options'>
        <FaStarOfLife/>
        <h1>Ukrainian Charitable Fund Ukrainian Educational Foundation</h1>
        </div>
        <div className='options'>
        <FaStarOfLife/>
        <h1>Latvian Charity Foundation JK NAMS</h1>
        </div>
        <div className='options'>
        <FaStarOfLife/>
        <h1>ІТ Сompany Magnetto International</h1>
        </div>
        <div className='paragraph'>
        We have created a mobile donation channel for users from around the world with guaranteed targeted delivery of humanitarian goods based on the real needs of Ukraine to help Ukrainians preserve their country and peace in your homes around the world.
        </div>
        <div className='partners-row'>
            <div>
                <img src={img01} alt="" />
                <h1>Andrei Kochkin</h1>
                <h3>Latvian Charity Foundation JK NAMS</h3>
            </div>
            <div>
                <img src={img02} alt="" />
                <h1>Tetiana Liulka</h1>
                <h3>Ukrainian Charitable Fund Ukrainian Educational Foundation</h3>
            </div>
            <div>
                <img src={img03} alt="" />
                <h1>Oleksandr Diachenko</h1>
                <h3>Ukrainian Charitable Fund Ukrainian Educational Foundation</h3>
            </div>
            <div>
                <img src={img04} alt="" />
                <h1>Roman Starikov</h1>
                <h3>Company Magnetto International</h3>
            </div>
        </div>
        
    </div>
    </DIV>
  )
}
const DIV = styled.div`
.partners-row{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    text-align: center;
    margin: 40px auto;
    justify-content: space-around;
}
.partners-row img{
    border-radius: 50%;
    margin: auto;
    height: 200px;
}
.partners-row h1{
    font-weight: 600;
    font-size: x-large;
}
.partners-row h3{
    font-size: large;
    color: #acacac;
}
.paragraph{
    padding: 20px 50px;
    border-radius: 50px;
    font-size: larger;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.options{
    display: flex;
    margin: 20px;
    gap: 20px;
    color: grey;
    font-size: x-large;
}
.founders{
    padding: 50px;
    width: 90%;
    border-radius: 30px;
    margin: auto;
}
.founders > :nth-child(2){
    font-size: 30px;
}
.container{
    background-color: #f4faff ;
    padding: 50px;
    width: 90%;
    border-radius: 30px;
    margin: auto;
}
.heading{
    font-size: 40px;
    /* margin-left: 50px; */
    margin: 10px 0;
    font-weight: 700;
}
.partner-section h2{
    font-size: 30px;
    font-weight: 600;
}
.partner-section > div{
    display: flex;
    margin: 20px;
    font-size: x-large;
    justify-content: space-around;
}
.partner-section img{
    border-radius: 30px;
}

    .example1 {
 height: 200px;	
 overflow: hidden;
 position: relative;
}
.example1 img{
    /* margin-top: -20px; */
    height: 50px;
}
.example1 div {
 /* font-size: 3em; */
 color: limegreen;
 position: absolute;
 width: 100%;
 display: flex;
 gap: 50px;
 height: 100%;
 margin: 0;
 /* line-height: 50px; */
 text-align: center;
 /* Starting position */
 -moz-transform:translateX(100%);
 -webkit-transform:translateX(100%);	
 transform:translateX(100%);
 /* Apply animation to this element */	
 -moz-animation: example1 15s linear infinite;
 -webkit-animation: example1 15s linear infinite;
 animation: example1 15s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes example1 {
 0%   { -moz-transform: translateX(100%); }
 100% { -moz-transform: translateX(-100%); }
}
@-webkit-keyframes example1 {
 0%   { -webkit-transform: translateX(100%); }
 100% { -webkit-transform: translateX(-100%); }
}
@keyframes example1 {
 0%   { 
 -moz-transform: translateX(100%); /* Firefox bug fix */
 -webkit-transform: translateX(100%); /* Firefox bug fix */
 transform: translateX(100%); 		
 }
 100% { 
 -moz-transform: translateX(-100%); /* Firefox bug fix */
 -webkit-transform: translateX(-100%); /* Firefox bug fix */
 transform: translateX(-100%); 
 }


}


@media only screen and (max-width: 1024px) {
.heading{
    font-size: x-large;
}
.partner-section h2{
    font-size: larger;
}

.partner-section {
    /* height: 100px; */
}

.partner-section > div{
    display: flex;
    flex-direction: column;
    margin: 15px;
    font-size: large;
    /* justify-content: space-around; */
}
.container{
    padding: 10px;
}
.founders>:nth-child(2){
    font-size: 15px;
}
.founders{
    padding: 20px;
    width: 90%;
    /* border-radius: 30px; */
    margin: auto;
}
.options{
    font-size: large;
}
.paragraph{
    padding: 20px;
    font-size: large;
}
.partners-row{
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
}

.partners-row img{
    border-radius: 50%;
    margin: auto;
    height: 100px;
}
.partners-row h1{
    font-weight: 400;
    font-size: large;
}
.partners-row h3{
    font-size: small;
    color: #acacac;
}
}

`

export default Partners