import React from 'react';
import img from "../Home/WelcomePage/img.png";
import PersonPreviewContent from "./PersonPreviewComponents/PersonPreviewContent";
import "./PersonPreview.css"

export enum StyleTypes {normal, reverse}

export interface PersPrevProps {
     style: StyleTypes;
}

const PersonPreviewBlock = (props: PersPrevProps)  =>
{
    let content = null;

    if (props.style === StyleTypes.normal) {
        content = (
            <div className="person-info-container">
                <PersonPreviewContent />
                <div className="person-info-pictures">
                    <img className="welcome_img" src={img} alt="ooops"/>
                </div>
            </div>
        );
    } else if (props.style === StyleTypes.reverse) {
        content = (
                <div className="person-info-container">
                    <div className="person-info-pictures">
                        <img className="welcome_img" src={img} alt="ooops"/>
                    </div>
                    <PersonPreviewContent />
                </div>
            );

    }

    return <div>{content}</div>;
};

export default PersonPreviewBlock;