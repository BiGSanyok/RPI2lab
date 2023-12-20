import React from 'react';
import {CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {IFamilyMemberData} from "../interfaces/family";
import {useTranslation} from "react-i18next";

const PersonContent = ({id, photo, birthYear, deathYear, name, cardInfo} : IFamilyMemberData) => {
    const {t} = useTranslation();
    return (
        <div className={"card_container"}>
            <CardActionArea sx={{ ml: 10, mt: 10, width: 'auto', borderRadius: 10, boxShadow: 2, bgcolor: 'lightgray', maxWidth: 500}}>
                <CardMedia component="img" height="auto" image={photo} alt={`person ${id}`} sx={{borderRadius: 10}} />
                <CardContent>
                    <Typography className="title" gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" color="text.secondary">
                        {t('age-info')}: {birthYear} - {deathYear}
                    </Typography>
                    <Typography className="subtitle" variant="body1" color="text.secondary">
                        {cardInfo}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </div>
    );
};

export default PersonContent;