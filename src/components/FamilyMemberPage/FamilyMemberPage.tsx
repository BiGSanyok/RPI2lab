import {useParams} from "react-router-dom";
import {IFamilyMemberData} from '../interfaces/family'
import TimeLine from "../Timeline/timeLine";
import {useTranslation} from "react-i18next";

export default function WinnerPage() {
    //const familyMember = family.find((familyMember: IFamilyMemberData)=> familyMember.id === id);

    const {t} = useTranslation();
    const { id } = useParams();
    const family: IFamilyMemberData[] = t('family', {returnObjects: true});
    const familyMember = family.find((familyMember : IFamilyMemberData) => familyMember.id === id);

    return (
        <>
            <div className="info-block">
                <TimeLine {...familyMember!}/>
            </div>
            {/*<InfoMapsYoutube {...familyMember!}/>*/}
            {/*<Gallery {...winner!}/>*/}
        </>
    )
}