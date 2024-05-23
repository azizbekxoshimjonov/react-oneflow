import React from 'react'
import './Jooin.css'
import tele from '../Assets/img/tele.png'
import sms from '../Assets/img/sms.png'
import pasch from '../Assets/img/pas chiziq.png'
import pitchka from '../Assets/img/piticka.png'
import tenis from '../Assets/img/tenis.png'
function Jooin() {
    function moveLeft() {
        const elBox__litle = document.querySelector('.box__litle');
        elBox__litle.style.transform = `translateX(32px)`; 
        
    }
    function moveLeft1(){
        const elBox__litle = document.querySelector('.box__litle');
        elBox__litle.style.transform = `translateX(232px)`; 
    }
    function moveLeft2(){
        const elBox__litle = document.querySelector('.box__litle');
        elBox__litle.style.transform = `translateX(430px)`; 
    }
    function moveLeft3(){
        const elBox__litle = document.querySelector('.box__litle');
        elBox__litle.style.transform = `translateX(605px)`; 
    }
    function moveLeft4(){
        const elBox__litle = document.querySelector('.box__litle');
        elBox__litle.style.transform = `translateX(800px)`; 
    }
    function moveLeft5(){
        const elBox__litle = document.querySelector('.box__litle');
        elBox__litle.style.transform = `translateX(995px)`; 
    }
  return (
    <div>
      <section id="jooin" class="jooin">
    <div className="container">
            <h2 className="jooin__title">Join these companies making business flow</h2>
            <img className="jooin__des" src={tele} alt=""/>
            <div className="urn">
                <div>
                    <h1 className="join__urn"> Turn <br/> esignatures <br/> into smart <br/> contracts</h1>
                    <p className="join__true">Experience true contract magic by automating the <br/> entire contract
                        process — from creating to signing <br/> and managing.</p>
                    <button className="join__btn">Take our product tour</button>
                </div>
                <div>
                    <img src={sms} alt=""/>
                </div>
            </div>
        </div>
        <section id="colobrate" className="colobrate">
            <div className="container">
                <div className="create">
                    <div className="create__box">
                        <button onClick={moveLeft} className="my__btn ">
                            <img loading="lazy" width="24" height="24"
                                src="https://oneflow.com/app/uploads/2021/04/Journey_Icons_Create_Green.svg"
                                className="attachment-thumbnail size-thumbnail" alt=""/> <span
                                className="c-product-carousel__tab-label">Create</span>
                        </button>
                        <button onClick={moveLeft1} className=" my__btn ">
                            <img loading="lazy" width="24" height="24"
                                src="https://oneflow.com/app/uploads/2021/04/Journey_Icons_Collaborate_Green.svg"
                                className="attachment-thumbnail size-thumbnail" alt=""/> <span
                                className="c-product-carousel__tab-label">Collaborate</span>
                        </button>
                        <button onClick={moveLeft2} className=" my__btn">
                            <img loading="lazy" width="24" height="24"
                                src="https://oneflow.com/app/uploads/2021/04/Journey_Icons_Sign_Green.svg"
                                className="attachment-thumbnail size-thumbnail" alt=""/> <span
                                className="c-product-carousel__tab-label">Sign</span>
                        </button>
                        <button onClick={moveLeft3} className=" my__btn">
                            <img loading="lazy" width="24" height="24"
                                src="https://oneflow.com/app/uploads/2021/04/Journey_Icons_Manage_Green.svg"
                                className="attachment-thumbnail size-thumbnail" alt=""/> <span
                                className="c-product-carousel__tab-label">Manage</span>
                        </button>
                        <button onClick={moveLeft4} className=" my__btn ">
                            <img loading="lazy" width="24" height="24"
                                src="https://oneflow.com/app/uploads/2021/04/Journey_Icons_Analyze_Green.svg"
                                className="attachment-thumbnail size-thumbnail" alt=""/> <span
                                className="c-product-carousel__tab-label">Analyze</span>
                        </button>
                        <button onClick={moveLeft5} className=" my__btn ">
                            <img loading="lazy" width="24" height="24"
                                src="https://oneflow.com/app/uploads/2021/04/Journey_Icons_Integrate_Green.svg"
                                className="attachment-thumbnail size-thumbnail" alt=""/> <span
                                className="c-product-carousel__tab-label">Integrate</span>
                        </button>
                    </div>
                    <div className="left">
                        <div>

                            <div className="box__litle"></div>
                            <div className="pas__chiz">
                                  <img className="pas__chiz" src={pasch} alt=""/>

                            </div>

                          
                            <h1 className="pas__title">Collaborate</h1>
                            <p className="pas__des">Work together on one version in real-time. No hocus <br/> pocus.</p>
                            <div className="checx">
                                <img src={pitchka} alt=""/>
                                <p>Edit live</p>
                            </div>
                            <div className="checx1">
                                <img src={pitchka} alt=""/>
                                <p>Make fields interactive</p>
                            </div>
                            <div className="checx2">
                                <img src={pitchka} alt=""/>
                                <p>Stay one step ahead</p>
                            </div>
                            <button className="pas__btn">Learn more</button>
                        </div>
                        <div className="right">
                            <img className="tenis" src={tenis} alt=""/>
                        </div>
                    </div>
                </div>

            </div>

        <section/>
    </section>
      </section>
    
   
    </div>
  )
}

export default Jooin
