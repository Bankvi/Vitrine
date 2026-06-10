


export interface BlogType {
    id : string,
    title : string,
    title_en : string,
    slug : string,
    excerpt : string,
    cover_image? : string,
    published_at : string,
    author? : string,
}

export interface getBlogPostsResponse {
    success : boolean,
    message : string,
    data : BlogType[];
} 


/**"id": "e2abb027-27b4-488d-9aed-8893ed5f98b4",
            "question": "Quels opérateurs Mobile Money sont acceptés ?",
            "question_en": "Which Mobile Money operators are accepted?",
            "answer": "BankVi accepte actuellement Flooz (Moov Money) et T-Money (Togocel) au Togo. Le support de nouveaux opérateurs et de nouveaux pays est prévu en V2.",
            "answer_en": "BankVi currently accepts Flooz (Moov Money) and T-Money (Togocel) in Togo. Support for new operators and countries is planned for V2.",
            "category": "paiement" */
export interface FAQItem {
    id : string,
    question : string,
    question_en : string,
    answer : string,
    answer_en : string,
    category : string
}

export interface getFAQsReponse {
    success : boolean,
    message : string,
    data : FAQItem[];
}

export interface ContactMessage {
  nom: string
  email: string
  sujet: string
  message: string
}

export interface ContactMessageResponse {
    success: boolean,
    message: string,
}