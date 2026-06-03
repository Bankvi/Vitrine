'use client'

import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Comment maximiser vos épargnes avec ESSO',
    excerpt: 'Découvrez nos stratégies d\'épargne programmée et atteindrez vos objectifs financiers plus rapidement.',
    category: 'Conseil',
    date: '15 juin 2025',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Guide complet: Gestion des tontines digitales',
    excerpt: 'Apprenez comment gérer efficacement vos cycles de contribution avec notre plateforme Tironienne.',
    category: 'Guide',
    date: '12 juin 2025',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Sécurité blockchain: Protégez vos transactions',
    excerpt: 'Comprendre la technologie blockchain et comment elle protège vos données financières.',
    category: 'Sécurité',
    date: '10 juin 2025',
    readTime: '6 min',
  },
]

export default function NewsSection() {
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
            Restez informé des dernières actualités BankVi, conseils financiers et mises à jour produits.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
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
                    {article.category}
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
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
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
  )
}
