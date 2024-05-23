import React from 'react'
import './Seample.css'
import melek1 from '../Assets/img/melek-1.png'
import melek2 from '../Assets/img/melek-2.png'
import melek3 from '../Assets/img/melek-3.png'
import melek4 from '../Assets/img/melek-4.png'
import plan from '..//Assets/img/plan.png'
import telefon from '../Assets/img/telefon.png'
import kace from '../Assets/img/kace.png'
import girl from '../Assets/img/girl.png'
import quyon from '../Assets/img/quyon.png'
import olmaqol from '../Assets/img/olmaqol.png'
function Seample() {
    return (
        <div>


            <section className="word">
                <div className="container">

                    <h1 className="word__title">Don’t just take our word for it…</h1>
                    <div className="cards">
                        <div className="word__box1">
                            <p>“With Oneflow, I’ve been able to <br /> reduce the time spent on admin <br /> significantly. Every
                                hour that I <br /> used to spend on admin, can now <br /> be spent on selling and closing!”</p>
                            <span>Read full story</span>
                            <div class="bir">
                                <img src={melek1} alt="" />
                                <p>Mattias Johnson <br /> Key Account Manager <br /> Sweco</p>
                            </div>
                        </div>
                        <div className="word__box2">
                            <p>““The fact that Oneflow is 100% <br /> digital makes it so simple and <br /> flexible. It gives us
                                peace of mind <br /> by providing control and a <br /> complete overview of our <br /> contract
                                process at all times.”</p>
                            <span>Read full story</span>
                            <div className="ikki">
                                <img src={melek2} alt="" />
                                <p>Elin Skoglund <br />HR Business Partner <br /> Hedin Bil</p>
                            </div>
                        </div>
                        <div className="word__box3">
                            <p>“From board meeting protocols to <br /> GDPR agreements, and approval <br /> of keycards — Oneflow
                                has <br /> removed the pains we weren’t <br /> even aware of.”</p>
                            <span>Read full story</span>
                            <div className="ikki">
                                <img src={melek3} alt="" />
                                <p>Tor Myhrman<br />Head of Indirect Sourcing <br /> Systembolaget</p>
                            </div>
                        </div>
                        <div className="word__box4">
                            <p>“With Oneflow, it’s very easy to <br /> create contracts and templates. <br /> Instead of uploading a PDF for
                                <br /> signing, we create the contract on <br /> the same platform as we <br /> And Oneflow’s templates make it <br />  very easy to create multiple <br /> contracts in one click.”</p>
                            <span>Read full story</span>
                            <div className="ikki">
                                <img src={melek4} alt="" />
                                <p>Jonatan Larsson<br />Head of People<br /> Kundo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="saemple">
        <div className="container">
            <div className="integra">
                <div>
                    <h1 className="saemple__title">Seamless <br/> integrations</h1>
                    <p className="saemple__des">Integrate your favorite tools with your <br/> contract workflow and work
                        wonders.</p>
                    <button className="saemple__btn">View all integrations</button>
                </div>
                <div>
                    <img src={plan} alt=""/>
                </div>

            </div>
            <div className="next__box">
                <h1 className="next__title">And for our next trick…</h1>
                <button className="next__btn">Visit our blog</button>
            </div>
            <div className="basic">
                <div className="basic__box">
                    <div>
                        <button className="basic__btn">Article</button>
                        <h1 className="basic__title">A Basic Guide on <br/> E-signatures and <br/> What Makes Them <br/>
                            Legally Binding</h1>
                        <div class="sign">
                            <p>E-signature|</p>
                            <span>11 min read </span>
                        </div>

                    </div>
                    <img src={telefon} alt=""/>
                </div>
            </div>
            <div className="sweco">
                <div className="sweco__box1">
                    <img src={kace} alt=""/>
                    <button class="sweco__btn">Guide</button>
                    <h1>29 documents you can <br/> sign online in 2021</h1>
                    <div className="sign1">
                        <p>Contract automation|</p>
                        <span>18 min read</span>
                    </div>
                </div>
                <div className="sweco__box2">
                    <button class="sweco__btn__btn">Customer Story</button>
                    <h1>Sweco</h1>
                    <button className="sweco__btn5">Read full story</button>
                </div>
                <div className="sweco__box3">
                    <img class="girl" src={girl} alt=""/>
                    <button class="sweco__btn">Guide</button>
                    <h1>Master digital sales: How to <br/> close deals when you’re not <br/> allowed to shake hands</h1>
                    <div className="sign3">
                        <p>Sales|</p>
                        <span>6 min read</span>
                    </div>
                </div>
            </div>
            <h1 class="from__title">More from Oneflow</h1>
            <div class="any">
                <div class="any__box1">
                    <img src={quyon} alt=""/>
                    <p>One platform. All departments</p>
                    <h1>Create, sign and manage any type <br/> of agreement you can think of</h1>
                    <button>Find out more</button>
                </div>
                <div class="any__box2">
                    <img src={olmaqol} alt=""/>
                    <p>Why Oneflow</p>
                    <h1>Six reasons why teams around <br/> the world love the magic of flow</h1>
                    <button>Find out more</button>
                </div>
            </div>
        </div>
    </section>



        </div>
    )
}

export default Seample
