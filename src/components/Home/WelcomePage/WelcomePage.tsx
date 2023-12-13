import React from 'react';
import ".//WelcomePage.css"
import img from "./img.png"

const WelcomePage = () => {
    return (
        <div className="introduce-container">
            <div className="introduce-text">
                <h1 className="title">Семья Ямато</h1>
                <p>Японская монархия считается самой древней непрерывной наследственной монархией в мире.
                    Императорский Дом признает 126 монархов, начиная с легендарного императора Дзимму правившего в 7 веке до нашей эры.</p>
                <p>Этот сайт посвящен семье последних императоров нашей планеты.</p>
            </div>
            <div className="introduce-pictures">
                <img className="welcome_img" src={img} alt="ooops"/>
                {/*<h2>皇室</h2>*/}
            </div>
        </div>
    );
};

export default WelcomePage;