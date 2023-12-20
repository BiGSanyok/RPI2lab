import React from 'react';
import PersonPreviewCard from "../PersonPreview/PersonPreviewCard";
import {IFamilyMemberData} from "../interfaces/family";
import {useState} from "react";
import {Card, InputAdornment, TextField } from '@mui/material';
import {useTranslation} from "react-i18next";
import FamilyMemberCard from "../FamilyMemberCard/FamilyMemberCard"
import "./family.css"
import {FaSearch} from "@react-icons/all-files/fa/FaSearch";


const Family = () => {
    const {t} = useTranslation();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const family : IFamilyMemberData[] = t('family', {returnObjects: true});

    const filteredMembers = family.filter(
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
                                       <FaSearch/>
                                   </InputAdornment>
                               ),
                           }}
                />
            </div>
            <div className={'familyClass'}>
                {filteredMembers.map((familyMember: IFamilyMemberData) => (
                    <Card className="familyClass" sx={{ width: 0.475 }}>
                        <FamilyMemberCard key={familyMember.id} {...familyMember} />
                    </Card>
                ))}
            </div>
        </>
    );
};


export default Family;