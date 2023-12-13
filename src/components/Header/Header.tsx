import React from 'react';
import NavigationButton, {Paths} from "./NavigationButton";
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="background-line">
                <div className="container">
                    <NavigationButton info={{ path: Paths.Home, label: "Home" }} />
                    <NavigationButton info={{ path: Paths.About, label: "About" }} />
                    <NavigationButton info={{ path: Paths.Developers, label: "Developers" }} />
                    <NavigationButton info={{ path: Paths.Family, label: "Family" }} />
                    <NavigationButton info={{ path: Paths.Member_Info, label: "Member inf" }} />
                </div>
            </div>
        </div>
    );
};

export default Header;