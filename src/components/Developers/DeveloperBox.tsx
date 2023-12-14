import React from 'react';
import "./Developers.css"

export interface DeveloperProps {
    name: string;
    photoUrl: string;
    githubUrl: string;
    githubPhoto: string;
}
const DeveloperBox = ({name, photoUrl, githubUrl, githubPhoto}: DeveloperProps) => {
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