import Link from 'next/link'
import { ChevronRight, Search, Book, HelpCircle, Code, Users } from 'lucide-react'

export default function Documentation() {
  const sections = [
    {
      id: 'guide-utilisateur',
      title: 'Guide Utilisateur',
      description: 'Apprenez à utiliser les fonctionnalités de BankVi',
      icon: Book,
      articles: [
        'Création de compte',
        'Paramètres de sécurité',
        'Gestion des paiements',
        'Configuration des notifications',
      ]
    },
    {
      id: 'guide-partenaire-api',
      title: 'Guide Partenaire API',
      description: 'Documentation complète pour les intégrations API',
      icon: Code,
      articles: [
        'Authentification',
        'Endpoints REST',
        'Webhooks',
        'Gestion des erreurs',
      ]
    },
    {
      id: 'faq',
      title: 'Questions Fréquentes',
      description: 'Réponses aux questions les plus posées',
      icon: HelpCircle,
      articles: [
        'Frais et commissions',
        'Limites de transactions',
        'Récupération de compte',
        'Conformité RGPD',
      ]
    },
    {
      id: 'support-communaute',
      title: 'Support & Communauté',
      description: 'Connectez-vous avec d\'autres utilisateurs',
      icon: Users,
      articles: [
        'Forum de support',
        'Tickets d\'aide',
        'Chat en direct',
        'Communautés Discord',
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-primary">
      {/* Header */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gold-50/30 dark:from-[#0D0D0D] dark:to-[#1A0F05]">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-gold-600 dark:from-white dark:to-gold-400">
            Documentation
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Tout ce dont vous avez besoin pour maîtriser BankVi
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="sticky top-16 z-40 bg-primary border-b border-gold-500/10 py-4">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="search"
              placeholder="Rechercher dans la documentation..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gold-500/10 bg-gold-500/10 dark:bg-gold-500/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link 
                  key={section.id}
                  href={`/documentation/${section.id}`}
                  className="group glass rounded-2xl p-8 hover:brightness-110 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white">
                      <Icon className="w-7 h-7" />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gold-400 group-hover:translate-x-2 transition-transform" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {section.title}
                  </h3>

                  <p className="text-white/45 mb-6">
                    {section.description}
                  </p>

                  <ul className="space-y-2">
                    {section.articles.map((article) => (
                      <li key={article} className="flex items-center gap-2 text-white/45">
                        <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                        {article}
                      </li>
                    ))}
                  </ul>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-gold-600 to-gold-700 dark:from-gold-900 dark:to-gold-800">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d'aide supplémentaire?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Notre équipe de support est disponible 24/7 pour vous aider
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gold-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Nous Contacter
          </Link>
        </div>
      </section>
    </main>
  )
}
