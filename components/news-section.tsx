"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { BlogType } from "@/type";
import { getBlogPosts } from "@/lib/api";

const articles: BlogType[] = [
  {
    id: "620607fa-2033-4ee3-9c08-c87fa4f9951d",
    title: "BankVi V2 : ce qui arrive bientôt",
    title_en: "BankVi V2: what's coming soon",
    slug: "bankvi-v2-fonctionnalites-a-venir",
    excerpt:
      "Micro-crédit automatique, assurance tontine, expansion multi-pays… Découvrez la roadmap de BankVi pour 2026.",
    cover_image: null,
    published_at: "2026-05-21T03:08:44.269826Z",
  },
  {
    id: "0d9084dc-14d6-407a-9ed4-58c0bc5e1016",
    title: "KYC et sécurité : comment BankVi protège vos données",
    title_en: "KYC and security: how BankVi protects your data",
    slug: "kyc-securite-bankvi-protection-donnees",
    excerpt:
      "La vérification d'identité (KYC) est obligatoire pour accéder à toutes les fonctionnalités de BankVi. Voici comment nous protégeons vos documents et vos données personnelles.",
    cover_image: null,
    published_at: "2026-05-14T03:08:44.269826Z",
  },
  {
    id: "2fd8a76a-3245-40dd-8fbc-27b0015a56dd",
    title: "Mobile Money au Togo : Flooz et T-Money avec BankVi",
    title_en: "Mobile Money in Togo: Flooz and T-Money with BankVi",
    slug: "mobile-money-togo-flooz-tmoney-bankvi",
    excerpt:
      "BankVi s'intègre nativement avec Moov Money (Flooz) et Togocel (T-Money) via FedaPay. Rechargez votre wallet et retirez vers votre Mobile Money en quelques secondes.",
    cover_image: null,
    published_at: "2026-05-04T03:08:44.269826Z",
  },
];

export default function NewsSection() {
  const [blogs, setBlogs] = useState<BlogType[]>(articles);

  useEffect(()=>{
    const get= async ()=>{
      const rep = await getBlogPosts();
      if (rep.success && rep.data.length>0){
        setBlogs(rep.data.slice(0, 3));
      }
    }
  },[])

  return (
    <section id="news" className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent dark:via-gray-900/30"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gold-800 dark:from-white dark:to-gold-400">
            Actualités & Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Restez informé des dernières actualités BankVi, conseils financiers
            et mises à jour produits.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((article, index) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="group overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-2xl glass backdrop-blur-md p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 flex flex-col">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 w-fit mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-900/30 px-3 py-1 rounded-full">
                    Actualité
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10 dark:border-white/5">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.published_at}
                    </span>
                  
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold-600 dark:text-gold-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Articles Link */}
        <div className="text-center animate-fadeIn animation-delay-1000">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Voir tous les articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
