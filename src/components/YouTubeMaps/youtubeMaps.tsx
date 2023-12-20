import './infoMapsYoutube.css'
import {IFamilyMemberData} from "../interfaces/family";

export default function InfoMapsYoutube({youtube, maps} : IFamilyMemberData) {
    return (
        <div className="container-info">
            <div className="component">
                <iframe
                    width="500"
                    height="300"
                    src={youtube}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
            </div>
            <div className="component">
                <iframe
                    width="100%"
                    height="250"
                    src={maps}
                ></iframe>
            </div>
        </div>
    );
}