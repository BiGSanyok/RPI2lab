import React from 'react';
import ".//WelcomePage.css"
import {useTranslation} from "react-i18next";

const WelcomePage = () => {
    const {t} = useTranslation();
    return (
        <div className="introduce-container">
            <div className="introduce-text">
                <h1 className="title">{t('title')}</h1>
                <p>{t('text')}</p>
                <p>{t('sup-text')}</p>
            </div>
        </div>
    );
};

export default WelcomePage;