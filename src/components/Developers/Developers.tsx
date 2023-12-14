import React from 'react';
import DeveloperBox from "./DeveloperBox";
import "./Developers.css"

const Developers = () => {
    return (
        <div className="person-card-container">
            <DeveloperBox name="" photoUrl="" githubUrl="" githubPhoto="" />
            <DeveloperBox name="" photoUrl="" githubUrl="" githubPhoto="" />
            <DeveloperBox name="" photoUrl="" githubUrl="" githubPhoto="" />
            <DeveloperBox name="" photoUrl="" githubUrl="" githubPhoto="" />
        </div>
    );
};

export default Developers;