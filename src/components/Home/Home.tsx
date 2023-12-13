import React from 'react';
import WelcomePage from "./WelcomePage/WelcomePage";
import PersonPreviewBlock, {StyleTypes} from "../PersonPreview/PersonPreviewBlock";

const Home = () => {
    return (
        <div>
            <WelcomePage />
            {/*<PersonPreviewBlock style={StyleTypes.normal} />*/}
        </div>
    );
};

export default Home;