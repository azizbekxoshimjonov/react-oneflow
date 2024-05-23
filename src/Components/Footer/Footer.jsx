import React from 'react'
import './Footer.css'
import footerlog from '../Assets/img/foot__logo.png'
import chiziq from '../Assets/img/footerchiziq.png'
import yershar from '../Assets/img/yershari.png'
function Footer() {
  return (
    <div>
       <section id="footer" className="footer">
        <div className="container">
            <div className="passs">
                <div className="footer__box1">
                    <img className="pas__logo" src={footerlog} alt=""/>
                    <p className="ters">Headquarters:</p>
                    <p className="tan">Hudiksvallsgatan 8</p>
                    <p className="swed">113 30 Stockholm, Sweden</p>
                    <p className="telnom">+46 8 517 297 70</p>
                </div>
                <div className="footer__box2">
                    <p className="why">Why Oneflow</p>
                    <p className="tour">Product tour</p>
                    <p className="contractssm">Smart contracts</p>
                    <p className="fors">Built for scale</p>
                    <p className="integral">Integrations</p>
                    <p className="custo">Customer stories</p>
                </div>
                <div className="footer__box3">
                    <p className="why">Learn</p>
                    <p className="tour">FAQ</p>
                    <p className="contractssm">Onboarding</p>
                    <p className="fors">Developers</p>
                    <p className="integral">Help Center</p>
                    <p className="custo">E-sign guide</p>
                </div>
                <div className="footer__box4">
                    <p className="why">Security</p>
                    <p className="tour">Security Center</p>
                    <p className="contractssm">Reliability</p>
                    <p className="fors">Compliance</p>
                    <p className="integral">E-signing legality</p>
                    <p className="custo">GDPR</p>
                </div>
                <div className="footer__box5">
                    <p className="why">More Oneflow</p>
                    <p className="about">About us</p>
                    <p className="pric">Pricing</p>
                    <p className="part">Partners</p>
                    <p className="blog">Blog</p>
                    <p className="cares">Careers</p>
                    <p className="contacts">Contact</p>
                </div>
            </div>
            <div className="footer__chiziq">
                <img src={chiziq} alt=""/>
            </div>
            <div className="flow">
                <div className="flow__box1">
                    <h1>Get in the flow</h1>
                </div>
                <div className="flow__box2">
                    <p>Send, track and sign your contracts free for the rest <br/> of your life. No trickery.</p>
                    <button className="flow__btn"> Get Oneflow free</button>
                </div>
            </div>
            <div className="footer__chiziq2">
                <img src={chiziq} alt=""/>
            </div>
            <div className="footer__login">
                <p className="login">Login</p>
                <p className="priv">Privacy</p>
                <p className="cook">Cookie statement</p>
                <img className="globs" src={yershar} alt=""/>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Footer
