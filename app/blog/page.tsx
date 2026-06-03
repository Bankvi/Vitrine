import Link from 'next/link'
import { Calendar, User, ChevronRight, Search } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Comment maximiser vos épargnes avec ESSO',
    excerpt: 'Découvrez nos stratégies d\'épargne programmée et atteignez vos objectifs financiers plus rapidement.',
    author: 'Jean Dupont',
    date: '15 juin 2025',
    category: 'Conseil',
    readTime: '5 min',
    featured: true,
  },
  {
    id: 2,
    title: 'Guide complet: Gestion des tontines digitales',
    excerpt: 'Apprenez comment gérer efficacement vos cycles de contribution avec notre plateforme Tironienne.',
    author: 'Marie Traoré',
    date: '12 juin 2025',
    category: 'Guide',
    readTime: '8 min',
    featured: true,
  },
  {
    id: 3,
    title: 'Sécurité blockchain: Protégez vos transactions',
    excerpt: 'Comprendre la technologie blockchain et comment elle protège vos données financières.',
    author: 'Ahmed Diallo',
    date: '10 juin 2025',
    category: 'Sécurité',
    readTime: '6 min',
    featured: false,
  },
  {
    id: 4,
    title: 'Les avantages des paiements mobiles avec BankVi',
    excerpt: 'Explorez comment les paiements mobiles révolutionnent le commerce en Afrique de l\'Ouest.',
    author: 'Fatou Ba',
    date: '8 juin 2025',
    category: 'Paiements',
    readTime: '7 min',
    featured: false,
  },
  {
    id: 5,
    title: 'Construire une communauté financière solide',
    excerpt: 'Les meilleures pratiques pour créer une tontine digitale prospère et durable.',
    author: 'Pierre Noel',
    date: '5 juin 2025',
    category: 'Communauté',
    readTime: '10 min',
    featured: false,
  },
  {
    id: 6,
    title: 'Plan d\'action 2025: L\'avenir de BankVi',
    excerpt: 'Découvrez notre vision ambitieuse pour transformer la finance en Afrique de l\'Ouest.',
    author: 'Équipe BankVi',
    date: '1 juin 2025',
    category: 'Actualités',
    readTime: '12 min',
    featured: false,
  },
]

export default function Blog() {
  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gold-800 dark:from-white dark:to-gold-400">
            Blog BankVi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Actualités, conseils et guides pour maîtriser la finance digitale
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="search"
              placeholder="Rechercher un article..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Articles en vedette</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group relative overflow-hidden rounded-2xl glass hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-orange-100 dark:from-gold-900/20 dark:to-orange-900/20 opacity-50"></div>

                  {/* Content */}
                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-900/30 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{article.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-400 mb-6">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center text-gold-600 dark:text-gold-400 font-semibold gap-1 group-hover:gap-2 transition-all">
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
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Tous les articles</h2>
          <div className="space-y-6">
            {regularArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group flex gap-6 p-6 rounded-xl glass hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:translate-x-1"
              >
                {/* Thumbnail */}
                <div className="hidden sm:block w-32 h-32 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex-shrink-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white opacity-50">{String(article.id).padStart(2, '0')}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-900/30 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-400 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <User className="w-4 h-4" />
                      Par {article.author}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gold-600 dark:text-gold-400 group-hover:translate-x-1 transition-transform" />
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
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
