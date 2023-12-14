import React from 'react';
import "../PersonPreview.css"
import {Button} from "@mui/material";


const PersonPreviewContent = () => {
    const clickHandler = () => {

    }
    return (
        <div className="person-info-text">
            <h1 className="title">Семья Ямато</h1>
            <p></p>
            <Button variant="contained">
                Add item
            </Button>
        </div>
    );
};

export default PersonPreviewContent;