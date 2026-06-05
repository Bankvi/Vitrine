import { useState, useEffect } from 'react';
import Link from 'next/link'
import { getFAQs } from '@/lib/api';
import { FAQItem } from '@/app/type';

const faqData : FAQItem[] = [
     {
            id: "e2abb027-27b4-488d-9aed-8893ed5f98b4",
            question: "Quels opérateurs Mobile Money sont acceptés ?",
            question_en: "Which Mobile Money operators are accepted?",
            answer: "BankVi accepte actuellement Flooz (Moov Money) et T-Money (Togocel) au Togo. Le support de nouveaux opérateurs et de nouveaux pays est prévu en V2.",
            answer_en: "BankVi currently accepts Flooz (Moov Money) and T-Money (Togocel) in Togo. Support for new operators and countries is planned for V2.",
            category: "paiement"
        },
        {
            id: "1a52e5cc-a852-41c9-9b9f-4f07ad89940c",
            question: "Qu'est-ce qu'un ESSO ?",
            question_en: "What is an ESSO?",
            answer: "Un ESSO est une tontine digitale sur BankVi. C'est un groupe d'épargne collective où chaque membre cotise régulièrement, et l'un d'entre eux reçoit la totalité de la cagnotte à chaque cycle. BankVi automatise et sécurise tout le processus.",
            answer_en: "An ESSO is a digital tontine on BankVi. It's a collective savings group where each member contributes regularly, and one of them receives the full pot each cycle. BankVi automates and secures the entire process.",
            category: "esso"
        },
        {
            id: "f319f930-b624-4835-b5d5-9f7f67f06471",
            question: "Comment vérifier mon identité (KYC) ?",
            question_en: "How do I verify my identity (KYC)?",
            answer: "Depuis votre profil dans l'application, accédez à la section KYC. Prenez une photo recto-verso de votre carte nationale d'identité togolaise, puis prenez un selfie en tenant votre pièce d'identité. Notre équipe valide votre dossier sous 24 à 48 heures.",
            answer_en: "From your profile in the app, go to the KYC section. Take a front and back photo of your Togolese national ID card, then take a selfie holding your ID. Our team validates your file within 24 to 48 hours.",
            category: "kyc"
        },
]


export default function FAQ() {

    const [FAQs, setFAQS] = useState<FAQItem[]>(faqData);
    const [featuredFAQ, setFeaturedFAQ] = useState<FAQItem[]>(FAQs.slice(0, 3));

    useEffect(()=>{
        const getfaqs = async () => {
            const rep = await getFAQs();
             if (rep.success && rep.data.length>0){
                setFAQS(rep.data);
                setFeaturedFAQ(rep.data.slice(0, 3));
        }
        }
        getfaqs();
    },[])


    return(
        {/* Page content goes here, using FAQs and featuredFAQ state variables */}
        {featuredFAQ.map((faq) => (
            <section key={faq.id}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
            </section>
        ))}
    )
}