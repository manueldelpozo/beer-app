export interface Beer {
    id: number;
    name: string;
    tagline: string;
    image_url: string;
    description: string;
    brewer_tips: object;
    ibu: number;
    abv: number;
    ebc?: number;
}
