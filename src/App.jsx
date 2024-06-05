import React from "react";
import './index.css';
import Achievements from './useable/achievements.png';
import Circle from './useable/circle.png'
import Header from "./Header";
import firstPhone from './useable/iPhone13ProFirst.png';
import secPhone from './useable/iPhone13ProSec.png';
import lastPhone from './useable/iPhone13ProLast.png';
import Star from './useable/Star.png'

function App() {
    return(
    <>
        <Header />
        <div id="starDad">
            <img className="star1" src={Star} alt=""/>
            <img className="star2" src={Star} alt=""/>
            <img className="star3" src={Star} alt=""/>
            <img className="star4" src={Star} alt=""/>
        </div>
    <section >
        <article className="leftAlign">
        <h1 id="hookLine"><b>Make The Best Financial Decisions</b></h1>  <div className="hi"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nihil nulla ullam consectetur voluptatem quibusdam. Perferendis ea quia impedit iusto.</p> 
        <span className="getStarted">
        <button> Get Started <i class="fa  fa-arrow-right"  aria-hidden="true"></i></button>
        <a>
        <i class="fa fa-play-circle-o" aria-hidden="true"> Watch Video</i>
        </a>
    </span>
        <img src={Achievements} className="achievements" alt="" />
    
        </article>
    <aside>
    <img id="bgCircle" src={Circle} alt="" />
    <img id="phone1" className="phone" src={firstPhone} alt="" />
    <img id="phone2" className="phone" src={secPhone} alt="" />
    <img id="phone3" className="phone" src={lastPhone} alt="" />
    <div className="hi hi2" ></div>
    </aside>
    </section>
    </>

    );
};

export default App;