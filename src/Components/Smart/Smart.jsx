import React from 'react'
import './Smart.css'
import gilos from '../Assets/img/gilos.png'
import shlapa from '../Assets/img/shlapa.png'
import tayyoq from '../Assets/img/tayyoqcha.png'
function Smart() {
  return (
    <div>
        <section id="smart" className="smart">
        <div className="container">
            <h1 className="smart__title">The complete <br/> platform for smart <br/> contracts</h1>
            <div className="smart__box">
                <img src={gilos} alt=""/>
                <h1>Forget friction</h1>
                <p>Experience a truly digital contract process that makes <br/>
                    creating, signing, and managing agreements quick, smooth,<br/> and effortless. Contracts without
                    trickery.</p>
                <button>Take the tour</button>
            </div>
            <div className="smart__box__box">
                <img src={shlapa} alt=""/>
                <h1>Unleash data</h1>
                <p>Get faster and smarter with automated processes <br/> and intelligent insights that unlock the data
                    inside <br/> your agreements. Leave behind the limitations of <br/> paper and PDFs. Just like that..
                </p>
                <button>Take the tour</button>
            </div>
            <div className="smart__box2">
                <img src={tayyoq} alt=""/>
                <h1>Take control</h1>
                <p>Know what’s happening in real-time with a complete overview <br/> of all your contracts, all in one
                    place. It’s all the visibility and <br/> transparency you need, at your fingertips.</p>
                <button>Take the tour</button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Smart
