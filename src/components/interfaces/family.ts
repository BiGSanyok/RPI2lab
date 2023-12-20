export interface IFamilyMemberDates{
    title: string;
    cardTitle: string;
    url: string;
    cardSubtitle: string;
    cardDetailedText: string;
}



export interface IFamilyMemberData {
    name: string;
    id: number;
    birthYear: string;
    deathYear: string;
    description: string;
    cardInfo: string;
    youtube: string;
    maps: string;
    FamilyMemberDates: IFamilyMemberDates[];
}

