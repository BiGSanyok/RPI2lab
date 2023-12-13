import React from 'react';
import "../PersonPreview.css"

const PersonPreviewContent = () => {
    const clickHandler = () => {

    }
    return (
        <div className="person-info-text">
            <h1 className="title">Семья Ямато</h1>
            <p></p>
            <div className="button" onClick={clickHandler}>button</div>
        </div>
    );
};

export default PersonPreviewContent;