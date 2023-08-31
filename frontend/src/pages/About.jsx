import React from 'react'
import { styled } from 'styled-components'
import flag from "../Assets/flag.jpg"
import { useNavigate } from 'react-router'

function About() {
    const navigate = useNavigate();

    return (
        <DIV>


            <h1 className='headingAbout'>WHY CHARITY HERO?</h1>

            <div className='aboutSec'>
                <div>
                    <div className='aboutOpt'>
                        <img src="https://www.charityhero.live/static/media/askHelp.53030c37f1396ea45cf7ae165f7f4803.svg" alt="" />
                        <div>
                            <h1>APPLICATION FOR HELP</h1>
                            <p>
                                We know exactly what volunteers, foundations and Ukrainian children need. We accept applications through our e-platform.
                            </p>
                        </div>
                    </div>
                    <div className='aboutOpt'>
                        <img src="https://www.charityhero.live/static/media/FH.82549019eda4e4cd0126787a723faec0.svg" alt="" />
                        <div>
                            <h1>SPEED OF HELP</h1>
                            <p>
                                Volunteers and foundations will be able to receive help on the day of application, if our partners have the necessary goods available
                            </p>
                        </div>
                    </div>
                    <div className='aboutOpt'>
                        <img src="https://www.charityhero.live/static/media/HUM.61358259c11722ff567c28b5d76768a9.svg" alt="" />
                        <div>
                            <h1>SUPPORT OF UKRAINIAN ECONOMY</h1>
                            <p>
                                Firstly, we buy goods from Ukrainian companies and brands. Only if something is not available in Ukraine, we start looking for it abroad.
                            </p>
                        </div>
                    </div>
                    <div className='aboutOpt'>
                        <img src="https://www.charityhero.live/static/media/KJ.0892a55b4d0dedbd0dbaf45c50881753.svg" alt="" />
                        <div>
                            <h1>WORK TRANSPARENCY</h1>
                            <p>
                                We work transparently and openly with verified foundations and volunteers, keeping reports on each unloading of goods.
                            </p>
                        </div>
                    </div>
                    <div className='donateBtn' onClick={() => navigate('/donation')}>DONATE</div>

                </div>
                <img className='flagImg' src={flag} alt="" />

            </div>
            <div>
                <h1 className='worksHeadin'>HOW CHARITY HERO WORKS</h1>
                <h3 className='colorheading'>JUST FOUR SIMPLE STEPS</h3>
                <div className='worksContainer'>
                    <h1 >COLLECTION OF NEEDS</h1>
                    <div className='worksOpt'>
                        <p>We receive requests for humanitarian aid from proven volunteer centres and foundations.</p>
                        <div className='yellowNum'>
                            1
                        </div>
                    </div>
                </div>
                <div className='worksContainer'>
                    <h1 >CHOOSE THE NEED TO HELP WITH</h1>
                    <div className='worksOpt'>
                        <p>You choose the need (food, medicines, ...) for which you consider it necessary to donate money.</p>
                        <div className='yellowNum'>
                            2
                        </div>
                    </div>
                </div>
                <div className='worksContainer'>
                    <h1 >WE PURCHASE IN UKRAINE</h1>
                    <div className='worksOpt'>
                        <p>We purchase humanitarian aid with funds raised in Ukrainian retail chains. Funds raised under special rehabilitation programs for affected or cultural projects with relevant organizations are transferred directly to the partner funds responsible for project implementation.</p>
                        <div className='yellowNum'>
                            3
                        </div>
                    </div>
                </div>
                <div className='worksContainer'>
                    <h1 >VOLUNTEERS RECEIVE AID</h1>
                    <div className='worksOpt'>
                        <p>Volunteers receive humanitarian aid from our partners (retail chains, manufacturers).</p>
                        <div className='yellowNum'>
                            1
                        </div>
                    </div>
                </div>
            </div>

        </DIV>
    )
}
const DIV = styled.div`

.worksHeadin{
    font-size: 30px;
    font-weight: 800;
}
.colorheading{
    color: #228aff;
    font-size: larger;
}

padding: 50px;

.worksContainer > h1{
 font-size: 30px;
 margin-top: 20px;
 font-weight: 700;
}
.worksOpt{
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.worksOpt > p{
    font-size: larger;
}

.yellowNum{
    margin-top: -30px;
    font-size: 60px ;
    color: #fd0;
    font-weight: 900;
    text-align: end;
    width: 60%;
    border-bottom: #fd0 solid 5px;
}
    .headingAbout{
        font-size: 30px;
        font-weight: 600;
    }
.aboutOpt{
    margin: 90px 0px;
    display: flex;
    gap: 10px;
}
.aboutOpt > div{
    margin: 20px;
    font-size: larger;
}
.aboutOpt h1{
    font-size: x-large;
    font-weight: 800;
}
.aboutSec{
    display: flex;
    /* border-radius: 10px; */
}
.donateBtn{
  color: white;
  background-color: #0524c9cc;
  width: fit-content;
  font-size: x-large;
  padding:10px 20px;
  font-weight: 600;
  margin: 50px 10px;
  border-radius: 20px;
  cursor: pointer;
}
.flagImg{
    border-radius: 90px;
    /* position: absolute; */
    margin-left: 50px;
}

@media only screen and (max-width: 1024px) {
    padding: 20px;
.aboutOpt > img{
    height: 50px;
    margin-top: 20px;
}
.flagImg{
    visibility: hidden;
    width: 0;
    height: 0;
}
.aboutOpt > div{
    margin: 10px;
    font-size: large;
}
.aboutOpt h1{
    font-size: larger;
    font-weight: 600;
}


}


`

export default About