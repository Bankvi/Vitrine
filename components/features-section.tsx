'use client'

import { Zap, Wallet, Users, Link2 } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    id: 'esso',
    name: 'ESSO',
    description: 'Épargne simple et sécurisée. Définissez vos objectifs et atteignez-les progressivement.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'tironienne',
    name: 'Tironienne Digitale',
    description: 'Gestion collaborative de fonds. Facilites les cycles de contribution communautaires.',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'wallet',
    name: 'Wallet',
    description: 'Paiements mobiles instantanés. Envoyez et recevez de l\'argent en quelques secondes.',
    icon: Wallet,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    description: 'Transactions sécurisées et transparentes. Technologie décentralisée pour votre protection.',
    icon: Link2,
    color: 'from-purple-500 to-indigo-600',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent dark:via-gray-900/30"></div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gold-800 dark:from-white dark:to-gold-400">
            Nos Produits
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une suite complète de solutions financières digitales adaptées à vos besoins.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Link 
                key={feature.id}
                href={`#${feature.id}`}
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 cursor-pointer animate-slideInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Glass morphism layer */}
                <div className="absolute inset-0 glass opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">
                    {feature.name}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-gold-600 dark:text-gold-400 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                    Découvrir
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold-400/50 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fadeIn animation-delay-2000">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Besoin d'en savoir plus sur nos produits?
          </p>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
