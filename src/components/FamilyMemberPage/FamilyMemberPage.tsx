import {useParams} from "react-router-dom";
import {IFamilyMemberData} from '../interfaces/family'
import TimeLine from "../Timeline/timeLine";
import {useTranslation} from "react-i18next";
import YoutubeMaps from "../YouTubeMaps/youtubeMaps";
import PersonContent from "../PersonContent/PersonContent";
import Gallery from "../Gallery/gallery";

export default function FamilyMemberPage() {
    const {t} = useTranslation();
    const { id } = useParams();
    const family: IFamilyMemberData[] = t('family', {returnObjects: true});
    const familyMember = family.find((familyMember : IFamilyMemberData) => familyMember.id === id!);

    return (
        <>
            <div className="info-block">
                <PersonContent {...familyMember!} />
                <TimeLine {...familyMember!}/>
                    <Gallery {...familyMember!} />
            </div>
            <YoutubeMaps {...familyMember!} />
        </>
    )
}