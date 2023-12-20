import './timeLine.css'
import { IFamilyMemberData } from "../interfaces/family";
import { Chrono } from "react-chrono"

export default function TimeLine({ dates } : IFamilyMemberData) {
    return (
        <div className="timeLineDiv">
            <Chrono
                items={dates}
                mode="HORIZONTAL"
                allowDynamicUpdate={true}
                slideShow={true}
                theme={{ primary: "blue", secondary: "pink", cardBgColor: "lightgray"}}/>
        </div>
    )
}