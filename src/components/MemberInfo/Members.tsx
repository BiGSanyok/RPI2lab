import React from 'react';
import "./Members.css"

export interface MemberProps {
    name: string;
    photoUrl: string;
    text: string;
}
const DeveloperBox = ({name, photoUrl, text}: MemberProps) => {
    return (
        <div className="member-card">
            <img src={photoUrl} alt={name}/>
            <div className="overlay">
                <div className="info">
                    <div className="member-name">
                        <p>{name}</p>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default DeveloperBox;