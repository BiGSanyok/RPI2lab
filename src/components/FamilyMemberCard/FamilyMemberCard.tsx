import { useNavigate } from 'react-router-dom';
import { IFamilyMemberData} from "../interfaces/family";
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import {useTranslation} from "react-i18next";
import "./FamilyMemberCard.css"

export default function MemberCard({id, name, cardInfo, birthYear, deathYear, photo} : IFamilyMemberData) {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const handleCardClick = () => {
        navigate(`/Family/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <CardActionArea onClick={handleCardClick}>
                <CardMedia component="img" height="auto" image={photo} alt={`person ${id}`} />
                <CardContent>
                    <Typography className="title" gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="primary">
                        {t('age-info')}: {birthYear} - {deathYear}
                    </Typography>
                    <Typography className="subtitle" variant="body1" color="text.secondary">
                        {cardInfo}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className="member_container">
                <a onClick={handleCardClick} className="btn">{t('more')}</a>
            </div>
        </div>
    );
}