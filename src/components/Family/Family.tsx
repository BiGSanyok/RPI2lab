import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonPreviewCard from "../PersonPreview/PersonPreviewCard";
import {IFamilyMemberData} from "../interfaces/family";
import {useState} from "react";
import {Card, InputAdornment, TextField } from '@mui/material';
import {useTranslation} from "react-i18next";
import image from "../../images/Komei.jpeg"


const Family = () => {
    const {t} = useTranslation();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const family : IFamilyMemberData[] = t('family', {returnObjects: true});

    const filteredWinners = family.filter(
        (family: IFamilyMemberData) =>
            family.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            family.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="search-wrapper">
                <TextField className="search-input" variant="filled" label={t('search-input')} value={searchTerm} onChange={handleSearch}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       {/*<FaSearch/>*/}
                                   </InputAdornment>
                               ),
                           }}
                />
            </div>
            <div className={'winnersClass'}>
                {filteredWinners.map((winner: IFamilyMemberData) => (
                    <Card className="winnerClass" sx={{ width: 0.475 }}>
                        <img src={image}/>
                    </Card>
                ))}
            </div>
        </>
    );
};


export default Family;