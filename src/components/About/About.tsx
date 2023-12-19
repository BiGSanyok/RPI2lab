import './About.css'
import Text from "./AboutText";
import {useTranslation} from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <div className={"aboutClass"}>
            <Text title={t('aboutTitle')}
                text={t('aboutText')}
            />
        </div>
    )
}