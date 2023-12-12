import React from 'react';
import ".//header.css"

export interface ButtonProps{
    content: string;

}
const NavigationButton = (props: ButtonProps) => {
    return (
        <div className="navigation-button">
            <a href={"/" + props.content}>{props.content}</a>
        </div>
    );
};

export default NavigationButton;