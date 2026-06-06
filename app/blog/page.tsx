"use client";


import { useState, useEffect } from 'react';
import { BlogType } from '@/app/type';
import { getBlogPosts } from '@/lib/api';

import Link from 'next/link'
import { Calendar, User, ChevronRight, Search } from 'lucide-react'

const articles: BlogType[] = [
  {
            id: "620607fa-2033-4ee3-9c08-c87fa4f9951d",
            title: "BankVi V2 : ce qui arrive bientôt",
            title_en: "BankVi V2: what's coming soon",
            slug: "bankvi-v2-fonctionnalites-a-venir",
            excerpt: "Micro-crédit automatique, assurance tontine, expansion multi-pays… Découvrez la roadmap de BankVi pour 2026.",
            cover_image: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/media/https://res.cloudinary.com/dluh8pidu/image/upload/v1780593592/logo_azvakb.png",
            published_at: "2026-05-21T03:08:44.269826Z"
        },
        {
            id: "0d9084dc-14d6-407a-9ed4-58c0bc5e1016",
            title: "KYC et sécurité : comment BankVi protège vos données",
            title_en: "KYC and security: how BankVi protects your data",
            slug: "kyc-securite-bankvi-protection-donnees",
            excerpt: "La vérification d'identité (KYC) est obligatoire pour accéder à toutes les fonctionnalités de BankVi. Voici comment nous protégeons vos documents et vos données personnelles.",
            cover_image: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/media/https://res.cloudinary.com/dluh8pidu/image/upload/v1780593592/logo_azvakb.png",
            published_at: "2026-05-14T03:08:44.269826Z"
        },
        {
            id: "2fd8a76a-3245-40dd-8fbc-27b0015a56dd",
            title: "Mobile Money au Togo : Flooz et T-Money avec BankVi",
            title_en: "Mobile Money in Togo: Flooz and T-Money with BankVi",
            slug: "mobile-money-togo-flooz-tmoney-bankvi",
            excerpt: "BankVi s'intègre nativement avec Moov Money (Flooz) et Togocel (T-Money) via FedaPay. Rechargez votre wallet et retirez vers votre Mobile Money en quelques secondes.",
            cover_image: "https://res.cloudinary.com/your-cloud-name/image/upload/v1/media/https://res.cloudinary.com/dluh8pidu/image/upload/v1780593592/logo_azvakb.png",
            published_at: "2026-05-04T03:08:44.269826Z"
        }
];


export default function Blog() {

  const [blogs, setBlogs] = useState<BlogType[]>(articles);
  const [featuredArticles, setFeaturedArticles] = useState<BlogType[]>(blogs.slice(0,2));

    useEffect(()=>{
      const get= async ()=>{
        const rep = await getBlogPosts();
        if (rep.success && rep.data.length>0){
          setBlogs(rep.data);
          setFeaturedArticles(rep.data.slice(0,2));
        }
      }
      get();
    },[])

  return (
    <main className="min-h-screen bg-primary">
      {/* Header */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gold-50/30 dark:from-[#0D0D0D] dark:to-[#1A0F05]">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-gold-600 dark:from-white dark:to-gold-400">
            Blog BankVi
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Actualités, conseils et guides pour maîtriser la finance digitale
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="sticky top-16 z-40 bg-primary border-b border-white/10 py-4">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="search"
              placeholder="Rechercher un article..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-white/10 bg-white/10 dark:bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-primary">Articles en vedette</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group relative overflow-hidden rounded-2xl glass hover:brightness-110 transition-all duration-300 transform hover:scale-105"
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-orange-100 dark:from-gold-900/20 dark:to-orange-900/20 opacity-50"></div>

                  {/* Content */}
                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-900/30 px-3 py-1 rounded-full">
                        News
                      </span>
                      <span className="text-xs text-white/45">{article.published_at}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-white/45 mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3 text-sm text-white/45">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center text-gold-400 font-semibold gap-1 group-hover:gap-2 transition-all">
                        Lire <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-20 md:py-32 bg-white/50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary">Tous les articles</h2>
          <div className="space-y-6">
            {blogs.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group flex gap-6 p-6 rounded-xl glass hover:brightness-110 transition-all duration-300 transform hover:translate-x-1"
              >
                {/* Thumbnail */}
                <div className="hidden sm:block w-32 h-32 rounded-lg bg-gradient-to-br flex-shrink-0 flex items-center justify-center">
                  <img src={"https://res.cloudinary.com/dluh8pidu/image/upload/v1780593592/logo_azvakb.png"} alt={article.title} className="w-full h-full object-cover rounded-lg" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-900/30 px-3 py-1 rounded-full">
                      News
                    </span>
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <Calendar className="w-4 h-4" />
                      {article.published_at}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-white/45 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <User className="w-4 h-4" />
                      Par {article.author}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gold-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-gold-600 to-gold-700 dark:from-gold-900 dark:to-gold-800">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Abonnez-vous à notre newsletter
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Recevez les derniers articles et conseils directement dans votre boîte mail
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
              required
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-white hover:bg-gray-50 text-gold-700 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}