import { ImageComment } from './imageComment';

export interface ImageDetails {
    _id: string;
    challenges?: any[];
    comments: ImageComment[];
    create_date: string;
    description: string;
    glories: any[];
    is_deleted: boolean;
    likes: any[];
    title: string;
    url: string;
    total_votes: number;
    owner: ImageOwner;
    views: string[];
}


export interface ImageOwner {
    avatar: string;
    city: string;
    full_name: string;
    _id: string;
}
