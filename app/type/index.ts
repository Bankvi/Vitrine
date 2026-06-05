


export interface BlogType {
    id : string,
    title : string,
    title_en : string,
    slug : string,
    excerpt : string,
    cover_image? : string,
    published_at : string,
}

export interface getBlogPostsResponse {
    success : boolean,
    message : string,
    data : BlogType[];
} 