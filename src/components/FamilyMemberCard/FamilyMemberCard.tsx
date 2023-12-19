import { useNavigate } from 'react-router-dom';
import { IFamilyMemberData} from "../interfaces/family";
import './winnerCard.css';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import {useTranslation} from "react-i18next";

export default function WinnerCard({name, short_description, description, photo, lifespan} : IFamilyMemberData) {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const handleCardClick = () => {
        // navigate(`/star-factory-winners/winners/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <CardActionArea onClick={handleCardClick}>
                {/*<CardMedia component="img" height="auto" image={photo} alt={`person ${id}`} />*/}
                <CardContent>
                    <Typography className="title" gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="primary">
                        {t('age-info')}{lifespan}
                    </Typography>
                    <Typography className="subtitle" variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className="container">
                <a onClick={handleCardClick} className="btn">{t('more-info')}</a>
            </div>
        </>
    );
}