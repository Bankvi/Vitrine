'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-700 to-gold-800 dark:from-gold-900 dark:via-gold-800 dark:to-gold-900"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
          Prêt à transformer votre expérience bancaire?
        </h2>
        
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto animate-slideInUp">
          Rejoignez des milliers d'utilisateurs qui font confiance à BankVi pour gérer leurs finances 
          de manière simple, sécurisée et efficace.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp animation-delay-1000">
          <Link 
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gold-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Commencer Maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/documentation"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300"
          >
            Consulter la Documentation
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-white/70 text-sm mb-6">Approuvé par</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-white/60 font-semibold">Banque Centrale</div>
            <div className="text-white/60 font-semibold">ISO Certifiée</div>
            <div className="text-white/60 font-semibold">RGPD Conforme</div>
          </div>
        </div>
      </div>
    </section>
  )
}
