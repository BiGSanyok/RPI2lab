import {IFamilyMemberData} from "../interfaces/family";
import "./FamilyMemberOfTheDay.css";
import FamilyMemberCard from "../FamilyMemberCard/FamilyMemberCard";
import {useTranslation} from "react-i18next";

function getRandomId(members: IFamilyMemberData[]) {
    return Math.floor(Math.random() * members.length) + 1;
}

export default function MemberOfTheDay() {
    const {t} = useTranslation();
    const day = new Date().getDay();

    const members: IFamilyMemberData[] = t('family', {returnObjects: true});

    let memberId = localStorage.getItem("memberId") || getRandomId(members);

    if (day !== Number(localStorage.getItem("oldData"))) {
        memberId = getRandomId(members);
        localStorage.setItem("memberId", String(memberId));
        localStorage.setItem("oldData", String(day));
    }

    let member = members.find((member: IFamilyMemberData) => member.id === memberId);

    if (member === undefined) {
        memberId = 1;
        localStorage.setItem("memberId", String(memberId));
        member = members[0];
    }

    return (
        <div className="dayMemberContainer">
            <h1>Деятель дня</h1>
            <div className="dayMember">
                <FamilyMemberCard key={member.id} {...member}/>
            </div>
        </div>
    );
}
