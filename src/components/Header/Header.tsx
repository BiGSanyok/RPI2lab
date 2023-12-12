import React from 'react';
import NavigationButton from "./NavigationButton";
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="background-line">
                <div className="container">
                    <NavigationButton content="Home" />
                    <NavigationButton content="About" />
                    <NavigationButton content="Developers" />
                    <NavigationButton content="Family" />
                    <NavigationButton content="Member-info" />
                </div>
            </div>
        </div>
    );
};

export default Header;