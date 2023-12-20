import './youtubeMaps.css'
import {IFamilyMemberData} from "../interfaces/family";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
export default function YoutubeMaps({youtube, maps} : IFamilyMemberData) {
    return (
        <div className="container-info">
            <div className="component">
                <iframe
                    width="560"
                    height="315"
                    src={youtube}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
            <div className="component">
                <iframe
                    width="100%"
                    height="315"
                    src={maps}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}