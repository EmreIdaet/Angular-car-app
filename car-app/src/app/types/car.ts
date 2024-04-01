import { User } from "./user";

export interface Car {
    likes: string[];
    _id: string;
    carName: string;
    brand: string;
    year: number;
    color: string;
    imgUrl: string;
    description: string;
    userId: User;
    created_ad: string;
    updatedAt: string;
    __v: number;
}