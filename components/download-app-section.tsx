'use client'

import Link from 'next/link'
import { Download, Smartphone } from 'lucide-react'
import Image from 'next/image'

export default function DownloadAppSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-slideInLeft">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gold-800 dark:from-white dark:to-gold-400">
              Téléchargez BankVi
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Accédez à tous vos services financiers depuis votre smartphone. 
              L'application BankVi est disponible sur iOS et Android avec une interface intuitive 
              et sécurisée pour gérer votre argent où que vous soyez.
            </p>

            {/* App Store & Play Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* App Store */}
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl glass hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-md"
              >
                <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 13.5c-.91 0-1.64.45-2.09 1.56h4.26c-.22-1.11-.99-1.56-2.17-1.56zm-4.3 0c-1.11 0-2.03.67-2.09 1.76h4.19c-.09-1.09-.98-1.76-2.1-1.76zM17.05 9.5a1.97 1.97 0 0 1-2 2h-1v-4h1c1.1 0 2 .9 2 2zm-4.3 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5.26 4c-.91 0-1.64.45-2.09 1.56h4.26c-.22-1.11-.99-1.56-2.17-1.56zm0-4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Télécharger sur</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">App Store</div>
                </div>
              </Link>

              {/* Google Play */}
              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl glass hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-md"
              >
                <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13.5h8v8H3z M12.5 13.5H20.5V22H12.5z M20.5 2.5H12.5V11H20.5z M3 2.5v8h8v-8z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600 dark:text-gray-400">Disponible sur</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">Google Play</div>
                </div>
              </Link>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'Paiements instantanés',
                'Épargne programmée',
                'Notifications temps réel',
                'Sécurité biométrique',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative animate-slideInRight">
            <div className="relative mx-auto w-64 h-96 rounded-3xl border-8 border-gray-900 dark:border-gray-100 shadow-2xl overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
              {/* Phone screen content */}
              <div className="w-full h-full bg-gradient-to-b from-gold-50 to-white dark:from-gray-900 dark:to-gray-950 flex flex-col items-center justify-center p-4">
                <Smartphone className="w-16 h-16 text-gold-600 dark:text-gold-400 mb-4 animate-float" />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">BankVi</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Disponible bientôt</p>
                </div>
              </div>

              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 dark:bg-gray-800 rounded-b-3xl"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-gold-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
