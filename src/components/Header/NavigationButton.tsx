import React from 'react';
import "./header.css"; // Обратите внимание на исправленный импорт

interface LanguageInfo {
    path: string;
    label: string;
}

export enum Paths {
    Home = "Home",
    About = "About",
    Developers = "Developers",
    Family = "Family",
    Member_Info = "Member-info"
}

export enum Languages {
    English = "en",
    French = "fr",
    Spanish = "es"
}

export interface ButtonProps {
    info: LanguageInfo; // Параметр info теперь содержит информацию о пути и тексте
}

const NavigationButton = (props: ButtonProps) => {
    const handleClick = () => {
        window.location.assign("/" + props.info.path);
    };

    return (
        <div className="navigation-button" onClick={handleClick}>
            {props.info.label}
        </div>
    );
};

export default NavigationButton;