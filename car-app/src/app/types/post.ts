import { Car } from "./car";
import { User } from "./user";

export interface Post {
    likes: string[];
    _id: string;
    text: string;
    userId: User;
    carId: Car;
    created_at: string;
    updatedAt: string;
    __v: number;
}