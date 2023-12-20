export interface IFamilyMemberDates{
    "dateTitle": string;
    "dateInfo":  string;
    "url": string;
}



export interface IFamilyMemberData {
    "name": string;
    "id": string;
    "birthYear": string;
    "deathYear": string;
    "description": string;
    "cardInfo": string;
    "FamilyMemberDates": IFamilyMemberDates[];
}

