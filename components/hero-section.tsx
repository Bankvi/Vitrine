'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orb 1 */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-orb1" style={{ background: 'radial-gradient(circle, rgba(60,30,10,0.6) 0%, transparent 70%)' }}></div>
        
        {/* Orb 2 */}
        <div className="absolute -top-40 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-orb2" style={{ background: 'radial-gradient(circle, rgba(60,30,10,0.5) 0%, transparent 70%)' }}></div>
        
        {/* Orb 3 */}
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-orb3" style={{ background: 'radial-gradient(circle, rgba(60,30,10,0.4) 0%, transparent 70%)' }}></div>
        
        {/* Fallback solid background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gold-50/50 to-gray-100 dark:from-[#0D0D0D] dark:via-[#1A0F05] dark:to-[#0D0D0D]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">
            La fintech d'Afrique de l'Ouest
          </span>
        </div>

        {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] via-gold-600 to-[#1A1A1A] dark:from-white dark:via-gold-400 dark:to-white animate-fadeIn">
          La Banque Numérique Ouest-Africaine
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed animate-slideInUp">
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass font-semibold rounded-xl transition-all duration-300 hover:brightness-110"
          >
            En Savoir Plus
          </Link>
        </div>

        {/* Features Quick Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          
        </div>
      </div>
    </section>
  )
}
