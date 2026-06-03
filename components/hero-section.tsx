'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orb 1 - Gold */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full mix-blend-multiply filter blur-3xl animate-orb1 opacity-30"></div>
        
        {/* Orb 2 - Blue */}
        <div className="absolute -top-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-orb2 opacity-20"></div>
        
        {/* Orb 3 - Purple */}
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-700 rounded-full mix-blend-multiply filter blur-3xl animate-orb3 opacity-20"></div>
        
        {/* Fallback solid background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-gold-600 dark:text-gold-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            La fintech d'Afrique de l'Ouest
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gold-800 to-gray-900 dark:from-white dark:via-gold-400 dark:to-gray-200 animate-fadeIn">
          La Banque Numérique Ouest-Africaine
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-slideInUp">
          Tontines digitales, épargne programmable, et paiements mobiles. 
          Tout ce dont vous avez besoin pour gérer votre argent en toute confiance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slideInUp animation-delay-1000">
          <Link 
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Commencer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10"
          >
            En Savoir Plus
          </Link>
        </div>

        {/* Features Quick Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          <div className="glass rounded-xl p-6 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl md:text-3xl font-bold text-gold-600 dark:text-gold-400">100K+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">Utilisateurs Actifs</div>
          </div>
          <div className="glass rounded-xl p-6 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl md:text-3xl font-bold text-gold-600 dark:text-gold-400">24/7</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">Support Client</div>
          </div>
          <div className="glass rounded-xl p-6 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <div className="text-2xl md:text-3xl font-bold text-gold-600 dark:text-gold-400">0%</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">Frais Cachés</div>
          </div>
        </div>
      </div>
    </section>
  )
}
