import React from 'react';
import "./Developers.css"
import {IDeveloperProps} from "../interfaces/developerProps";

const DeveloperBox = ({name, photoUrl, githubUrl, githubPhoto}: IDeveloperProps) => {
    return (
        <div className="person-card">
            <img src={photoUrl} alt={name}/>
            <div className="overlay">
                <div className="info">
                    <p>{name}</p>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <img src={githubPhoto} alt="GitHub"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DeveloperBox;