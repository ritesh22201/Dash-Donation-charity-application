import React from 'react'
import appstore from "../Assets/appstore.jpg"
import { styled } from 'styled-components'
import DASHDONATION from "../Assets/DASHDONATION.png"
function Footer() {
  return (
    <DIV>
      <div className='firstSection'>
        <img className='mainLogo' src={DASHDONATION} alt="" />
        <div >
          <p>About</p>
          <p>
            Help
          </p>
          <p>
            Partners
          </p>
          <p>Contact us</p>
        </div>
      </div>
      <h1 className='footer-text'>HELP UKRAINE WITHSTAND!</h1>
      <div className='last-footer'>
        <p>DESIGNED BY DENIELS BERZINSH 2022</p>
          <div>
        <div className='download-sec'>
          
          <img src="https://www.charityhero.live/static/media/AppStoreW.632c2c31011817d3a77f5d56ad40ab94.svg" alt="" />
          <img src="https://www.charityhero.live/static/media/GoogleStoreW.5fd1156c8537025f122dc605d0f0e481.svg" alt="" />
          </div>
          <h1>DOWNLOAD APP</h1>
          </div>
      </div>

    </DIV>
  )
}


const DIV = styled.div`
color: white;
background: #0057b8;

padding: 50px 50px 20px 50px;
.firstSection{
  display: flex;
  justify-content: space-between;
}
.last-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-text{
  margin: 50px 0 100px 0px;
  font-size: 40px;
  font-weight: 700;
}
.mainLogo{
  height: 60px;
}
.firstSection > div{
  display: flex;
  font-size: x-large;
  gap: 20px;
  font-weight: 600;


}
.download-sec{
  display: flex;
  gap: 10px;
  /* style={{display:"flex" , gap:"10px"}} */
}
@media only screen and (max-width: 1024px) {

.firstSection>div {
    display: flex;
    font-size: medium;
    gap: 10px;
    font-weight: 400;
}
.mainLogo{
  margin-right: 10px;
  height: 40px;
}
.footer-text{
  font-size: 25px;
  font-weight: 600;
  margin: 50px 0;
}
.download-sec > img{
  height: 40px;
}
}
`
export default Footer