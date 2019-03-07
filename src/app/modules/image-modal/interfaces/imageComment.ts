export interface ImageComment {
    _id: string;
    avatar: string;
    full_name: string;
    image: string;
    owner?: CommentOwner;
    sub_comments?: any;
    text: string;
    time_update: string;
    __v: number;
}

export interface CommentOwner {
    avatar: string;
    full_name: string;
    _id: string;
}
