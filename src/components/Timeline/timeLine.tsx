import './timeLine.css'
import { IFamilyMemberData } from "../interfaces/family";
import { Chrono } from "react-chrono"

export default function TimeLine({ FamilyMemberDates } : IFamilyMemberData) {
    return (
        <div className="timeLineDiv">
            <Chrono
                items={FamilyMemberDates}
                mode="VERTICAL"
                allowDynamicUpdate={true}
                slideShow={false}
                theme={{ primary: "blue", secondary: "pink", cardBgColor: "lightgray"}}/>
        </div>
    )
}