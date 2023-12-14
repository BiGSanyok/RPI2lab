import React from 'react';
import "./Developers.css"

export interface DeveloperProps {
    path: string;
    name: string;
    github: string;
}
const DeveloperBox = (props: DeveloperProps) => {
    return (
        <div className="columns_box">
            <div className="column">
                <img className="team_image" src={props.path}/>
                <div className="name_box">
                    <p className="column_text name">{props.name}</p>
                    <p className="column_text profession">{props.github}</p>
                </div>
            </div>
        </div>
    );
};

export default DeveloperBox;