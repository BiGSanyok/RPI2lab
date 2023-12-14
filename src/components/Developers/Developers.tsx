import React from 'react';
import DeveloperBox from "./DeveloperBox";
import "./Developers.css"

const Developers = () => {
    return (
        <div className="column_block">
            <DeveloperBox path="dsf" name="f" github="" />
            <DeveloperBox path="ds" name="g" github="" />
            <DeveloperBox path="cds" name="r" github="" />
            <DeveloperBox path="cds" name="g" github="" />
        </div>
    );
};

export default Developers;