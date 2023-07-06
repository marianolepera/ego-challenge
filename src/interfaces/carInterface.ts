export interface Car {
    filter?: any;
    id: number;
    name: string;
    segment: string;
    year: number;
    price: number;
    thumbnail: string;
    photo: string;
}

export interface DetailCar {
    id: number;
    name: string;
    segment: string;
    year: number;
    price: number;
    thumbnail: string;
    photo?: string;
    image?: string;
    title:string;
    description: string;
    model_features: ModelFeatures;
    model_highlights: ModelHighLights
}

export interface ModelHighLights {
    map: any;
    title: string;
    content: string;
    image: string;
}   

export interface ModelFeatures {
    map: any;
    name: string;
    description: string;
    image: string;
}