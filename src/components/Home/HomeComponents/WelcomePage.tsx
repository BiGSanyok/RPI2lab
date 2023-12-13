import React from 'react';
import ".//WelcomePage.css"
import img from "./img.png"

const WelcomePage = () => {
    return (
        <div className="introduce-container">
            <div className="introduce-text">
                <div className="title"><h1>Семья Ямато</h1></div>
            </div>
            <div className="introduce-pictures">
                <img className="welcome_img" src={img} alt="ooops"/>
                <h2>皇室</h2>
            </div>
        </div>
    );
};

export default WelcomePage;