import React from 'react';
import ".//header.css"
import {Link, NavLink} from "react-router-dom";

export interface ButtonProps{
    content: string;

}
const NavigationButton = (props: ButtonProps) => {
    return (
        <NavLink to={"/" + props.content}>
        <div className="navigation-button">{props.content}
            {/*<a href={"/" + props.content}>{props.content}</a>*/}

        </div>
        </NavLink>
    );
};

export default NavigationButton;