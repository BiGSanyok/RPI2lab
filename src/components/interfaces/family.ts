export interface IFamilyMemberDates{
    "dateTitle": string;
    "dateInfo":  string;
    "url": string;
}



export interface IFamilyMemberData {
    "name": string;
    "id": number;
    "birthYear": string;
    "deathYear": string;
    "description": string;
    "cardInfo": string;
    "youtube": string;
    "maps": string;
    "FamilyMemberDates": IFamilyMemberDates[];
}

