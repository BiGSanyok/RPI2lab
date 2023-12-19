import React from 'react';
import WelcomePage from "./WelcomePage/WelcomePage";
import Developers from "../Developers/Developers";
import About from "../About/About";
import PersonPreviewCard, {StyleTypes} from "../PersonPreview/PersonPreviewCard";
import {Button} from "@mui/material";

const Home = () => {
    return (
        <div>
            <WelcomePage />
            <Developers />
        </div>
    );
};

export default Home;