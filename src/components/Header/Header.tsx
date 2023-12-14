import React from 'react';
import NavigationButton, {Paths} from "./NavigationButton";
import "./header.css"
import icon from "../../images/icon.png"

const Header = () => {
    return (
        <header>
            <div className="background-line">
                <div className="container">
                    <NavigationButton info={{ path: Paths.Home, label: "Главная" }} />
                    <NavigationButton info={{ path: Paths.About, label: "О сайте" }} />
                    <NavigationButton info={{ path: Paths.Family, label: "Семья Ямато" }} />
                    <NavigationButton info={{ path: Paths.Developers, label: "Разработчики" }} />
                    {/*<NavigationButton info={{ path: Paths.Member_Info, label: "" }} />*/}
                </div>
            </div>
            <img className="header_icon" src={icon}/>
        </header>
    );
};

export default Header;