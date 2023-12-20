import './timeLine.css'
import { IFamilyMemberData } from "../interfaces/family";
import { Chrono } from "react-chrono"

export default function TimeLine({ items } : IFamilyMemberData) {
    return (
        <div className="timeLineDiv">
            <Chrono
                items={items}
                mode="HORIZONTAL"
                allowDynamicUpdate={true}
                slideShow={true}
                theme={{ primary: "blue", secondary: "pink", cardBgColor: "lightgray"}}/>
        </div>
    )
}