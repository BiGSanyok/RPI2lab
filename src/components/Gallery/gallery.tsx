import './gallery.css'
import {IFamilyMemberData} from "../interfaces/family";
import {IGallery} from "../interfaces/gallery";
import { Typography } from '@mui/material';
import {useTranslation} from "react-i18next";

export default function Gallery({photos} : IFamilyMemberData) {
    const {t} = useTranslation();
    return (
        <>
            <div className="container-gallery">
                <div className="container-slider-wrapper">
                    <div className="slider">
                        {photos.map((photo: IGallery, index: number) => (
                            <img id={`slide-${index + 1}`} key={index} src={photo.photoUrl} alt={`photo-${index + 1}`}/>
                        ))}
                    </div>
                    <div className="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                    </div>
                </div>
            </div>
        </>
    )
}