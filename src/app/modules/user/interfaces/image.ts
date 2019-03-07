export interface Image {
    _id: string;
    url: string;
    create_date: string;
    glories: [];
    likes: [];
    views: [];
}

export interface ImagesList {
    counts: number;
    images: Image[];
}
