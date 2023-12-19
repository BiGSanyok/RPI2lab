import React from 'react';
import DeveloperBox from "./DeveloperBox";
import "./Developers.css"
import {IDeveloperProps} from "../interfaces/developerProps";
import {useTranslation} from "react-i18next";

const Developers = () => {
    const {t} = useTranslation();
    const people : IDeveloperProps[] = t("people", {returnObjects: true});
    return (
        < div className = {"person-card-container"} >
        {
            people.map((person, index) => (
                <DeveloperBox key={index} {...person}/>
            ))}
        </div>

    );
};

export default Developers;