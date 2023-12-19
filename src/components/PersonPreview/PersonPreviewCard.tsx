import React from 'react';
import img from "../Home/WelcomePage/img.png";
import "./PersonPreview.css"
import photo from "../../images/Hiruhitu.jpeg"

export enum StyleTypes {normal, reverse}

export interface PersPrevProps {

}

const PersonPreviewCard = (props: PersPrevProps)  =>
{
    return (
        <div className="PersonPreviewCard">
            <div className="card">
                <img className="image" src={photo} alt="Sakura"/>
                <div className="person_container">
                    <h4><b>Япония</b></h4>
                    <p>Япония - островное государство в Восточной Азии, известное своей уникальной культурой,
                        технологиями и природой.</p>
                    <a href="#" className="button">Узнать больше</a>
                </div>
            </div>

        </div>
    );
};

export default PersonPreviewCard;