'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, Lock, Smartphone, Zap, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    nom: '',
    numero: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('contact-modal')
      if (modal && event.target === modal) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscapeKey)
      document.addEventListener('click', handleClickOutside)
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  const openContactModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const closeContactModal = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Ajouter la logique d'envoi du formulaire ici
    setFormData({ nom: '', numero: '', email: '', message: '' })
    setIsModalOpen(false)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:py-32 animate-fadeIn">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-5xl font-bold text-white leading-tight">
                La banque ouest-africaine qui grandit avec vous
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                BankVi est une néo-banque communautaire digitale. Tontines digitales, épargne programmable, et paiements mobiles. Tout en un seul endroit.
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link 
                  href="#features"
                  className="rounded-lg bg-gradient-to-r from-amber-900 to-amber-700 px-8 py-3 font-semibold text-white hover:shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition duration-300"
                >
                  Découvrir
                </Link>
                <button
                  onClick={openContactModal}
                  className="rounded-lg glass px-8 py-3 font-semibold text-white hover:bg-white/30 transform hover:scale-105 transition duration-300"
                >
                  Nous contacter
                </button>
              </div>
            </div>
            <div className="flex justify-center ">
              <Image
                src="/bankvi.png"
                alt="BankVi"
                width={300}
                height={300}
                className="h-64 w-64 drop-shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Modal de contact */}
        {isModalOpen && (
          <section 
            id="contact-modal" 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm animate-fadeIn"
          >
            <div className="p-8 rounded-2xl w-full max-w-md mx-4 glass animate-scaleIn shadow-2xl border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Nous contacter</h2>
                <button
                  onClick={closeContactModal}
                  className="text-gray-400 hover:text-white transition p-1 hover:bg-white/10 rounded-lg"
                  aria-label="Fermer"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-200 mb-2">
                    Nom complet
                  </label>
                  <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder="Votre nom" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white/20 transition duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="numero" className="block text-sm font-medium text-gray-200 mb-2">
                    Numéro de téléphone
                  </label>
                  <input 
                    type="tel" 
                    id="numero" 
                    name="numero" 
                    value={formData.numero}
                    onChange={handleInputChange}
                    placeholder="Votre numéro de téléphone" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white/20 transition duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Votre email" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white/20 transition duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Votre message" 
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white/20 transition duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-amber-900 to-amber-700 px-6 py-3 font-semibold text-white hover:shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition duration-300"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </section>
        )}

        {/* Features */}
        <section id="features" className="py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 animate-slideInUp">
              <h2 className="text-4xl font-bold text-white mb-4">Nos produits</h2>
              <p className="text-gray-300 max-w-2xl">
                Trois solutions pour transformer votre relation avec l'argent en Afrique de l'Ouest.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* ESSO */}
              <div className="group glass rounded-xl p-8 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 animate-slideInUp">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-900/30 group-hover:bg-amber-900/50 transition duration-300 transform group-hover:scale-110">
                  <TrendingUp className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-amber-300 transition">ESSO</h3>
                <p className="mt-2 text-gray-300">
                  Tontines digitales automatisées, traçables et sécurisées.
                </p>
              </div>

              {/* Tironienne */}
              <div className="group glass rounded-xl p-8 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 animate-slideInUp animation-delay-1000">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-900/30 group-hover:bg-orange-900/50 transition duration-300 transform group-hover:scale-110">
                  <Smartphone className="h-6 w-6 text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition">Tironienne</h3>
                <p className="mt-2 text-gray-300">
                  Épargne programmable accessible depuis votre téléphone.
                </p>
              </div>

              {/* Wallet */}
              <div className="group glass rounded-xl p-8 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 animate-slideInUp animation-delay-2000">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-900/30 group-hover:bg-amber-900/50 transition duration-300 transform group-hover:scale-110">
                  <Zap className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-amber-300 transition">Wallet</h3>
                <p className="mt-2 text-gray-300">
                  Paiements mobiles intégrés à Moov, Flooz et T-Money.
                </p>
              </div>

              {/* Blockchain */}
              <div className="group glass rounded-xl p-8 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 animate-slideInUp animation-delay-4000">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-900/30 group-hover:bg-orange-900/50 transition duration-300 transform group-hover:scale-110">
                  <Lock className="h-6 w-6 text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition">Blockchain</h3>
                <p className="mt-2 text-gray-300">
                  Transparence et sécurité via Polygon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white mb-12 animate-slideInDown">Pourquoi BankVi</h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="group glass rounded-lg p-6 hover:bg-white/20 transition duration-300 transform hover:translate-x-2 animate-slideInLeft">
                  <h3 className="font-semibold text-white flex items-center gap-3">
                    <span className="inline-block w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full animate-pulse-custom shadow-lg shadow-amber-500/50"></span>
                    Tontines modernes
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Remplacez les systèmes informels par une solution transparente et sécurisée.
                  </p>
                </div>
                <div className="group glass rounded-lg p-6 hover:bg-white/20 transition duration-300 transform hover:translate-x-2 animate-slideInLeft animation-delay-1000">
                  <h3 className="font-semibold text-white flex items-center gap-3">
                    <span className="inline-block w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full animate-pulse-custom shadow-lg shadow-amber-500/50"></span>
                    Épargne flexible
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Programmez votre épargne à votre rythme, sans contraintes.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="group glass rounded-lg p-6 hover:bg-white/20 transition duration-300 transform hover:translate-x-2 animate-slideInRight">
                  <h3 className="font-semibold text-white flex items-center gap-3">
                    <span className="inline-block w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full animate-pulse-custom shadow-lg shadow-orange-500/50"></span>
                    Paiements instantanés
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Connecté aux opérateurs mobiles pour des transferts rapides et fiables.
                  </p>
                </div>
                <div className="group glass rounded-lg p-6 hover:bg-white/20 transition duration-300 transform hover:translate-x-2 animate-slideInRight animation-delay-1000">
                  <h3 className="font-semibold text-white flex items-center gap-3">
                    <span className="inline-block w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full animate-pulse-custom shadow-lg shadow-orange-500/50"></span>
                    Confiance garantie
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Blockchain pour la transparence maximale de chaque transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl glass rounded-2xl p-12 text-center transform hover:scale-105 transition duration-300 hover:shadow-2xl hover:shadow-amber-500/20 animate-slideInUp">
            <h2 className="text-3xl font-bold text-white">
              Prêt à commencer ?
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Rejoignez une communauté d'utilisateurs qui transforment leur avenir financier.
            </p>
            <button 
              onClick={openContactModal}
              className="mt-8 inline-block rounded-lg bg-gradient-to-r from-amber-900 to-amber-700 px-8 py-3 font-semibold text-white hover:shadow-lg hover:shadow-amber-500/50 transform hover:scale-110 transition duration-300"
            >
              Démarrer gratuitement
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}