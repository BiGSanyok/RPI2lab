import './timeLine.css'
import { IFamilyMemberData } from "../interfaces/family";
import { Chrono } from "react-chrono"

export default function TimeLine({ items } : IFamilyMemberData) {
    return (
        <div className="timeLineDiv">
            <Chrono
                items={items}
                mode="VERTICAL"
                allowDynamicUpdate={false}
                slideShow={false}
                theme={{ primary: "crimson", secondary: "pink", cardBgColor: "pink"}}/>
        </div>
    )
}