import React from 'react';
import NavigationButton, {Paths} from "./NavigationButton";
import "./header.css"
import icon from "./icon.png"
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t} = useTranslation();
    return (
        <header>
            <div className="background-line">
                <div className="container">
                    <NavigationButton info={{path: Paths.Home, label: t('home')}}/>
                    <NavigationButton info={{path: Paths.About, label: t('about')}}/>
                    <NavigationButton info={{path: Paths.Family, label: t('family-btn')}}/>
                    <NavigationButton info={{path: Paths.Developers, label: t('developers')}}/>
                </div>
            </div>
            <img className="header_icon" src={icon}/>
        </header>
    );
};

export default Header;