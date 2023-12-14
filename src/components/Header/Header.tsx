import React from 'react';
import NavigationButton, {Paths} from "./NavigationButton";
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="background-line">
                <div className="container">
                    <NavigationButton info={{ path: Paths.Home, label: "Главная" }} />
                    <NavigationButton info={{ path: Paths.About, label: "О сайте" }} />
                    <NavigationButton info={{ path: Paths.Family, label: "Семья Ямато" }} />
                    <NavigationButton info={{ path: Paths.Developers, label: "Разработчики" }} />
                    {/*<NavigationButton info={{ path: Paths.Member_Info, label: "" }} />*/}
                </div>
            </div>
        </div>
    );
};

export default Header;