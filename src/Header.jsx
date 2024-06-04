import React from "react";
import './index.css';
import fireLogo from './useable/theee.png';

function Header() {
    return (
        <header>
           <div id='container'>
            <div className="logo">

            <img className="img" src={fireLogo} alt="logo"/>
            <div id="circle" className="circle">
               
             </div>
                
             <h1 id="logoName">
                uifry<sup>TM</sup></h1>
            </div>
            <nav>
                <ul>
                    <li><b>Home</b></li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Features</li>

                </ul>
            </nav>
            </div>
            <button>Download</button>
        </header>
    );
};

export default Header;