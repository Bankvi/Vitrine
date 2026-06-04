



/**"id": "620607fa-2033-4ee3-9c08-c87fa4f9951d",
            "title": "BankVi V2 : ce qui arrive bientôt",
            "title_en": "BankVi V2: what's coming soon",
            "slug": "bankvi-v2-fonctionnalites-a-venir",
            "excerpt": "Micro-crédit automatique, assurance tontine, expansion multi-pays… Découvrez la roadmap de BankVi pour 2026.",
            "cover_image": null,
            "published_at": "2026-05-21T03:08:44.269826Z" */


export interface BlogType{
    id  : string;
    slug : string;
    title : string;
    title_en : string;
    excerpt : string;
    cover_image? : string | null;
    published_at : string;
}

export interface getBlogPostsResponse{
    success: boolean,
    message: string,
    data : BlogType[];
}