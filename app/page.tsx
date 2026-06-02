'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, Lock, Smartphone, Zap, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    // Champs du formulaire de contact — correspondent au modèle Django ContactMessage
    id: '',
    nom: '',
    sujet:'',
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

  /* ===== CONTACT FORM — ENVOI VERS LE BACKEND DJANGO ===== */
  /* Cette fonction envoie les données du formulaire à l'API Django ContactMessage.
     TODO: Remplacer l'URL de l'API par l'URL réelle de ton backend Django. */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      /* ============================================================
         CONNEXION BACKEND — À COMPLÉTER AVEC TON LIEN DJANGO
         Remplace l'URL ci-dessous par l'endpoint de ton API Django :
         Exemple : https://api.bankvi.com/api/contact/messages/
         ============================================================ */
      const API_URL = process.env.NEXT_PUBLIC_API_URL 
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact/messages/`
        : 'http://localhost:8000/api/contact/messages/'

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          /* Si ton API Django nécessite une clé API ou un token :
             'Authorization': 'Token ' + process.env.NEXT_PUBLIC_API_TOKEN, */
        },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          sujet: formData.sujet,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error(`Erreur API: ${response.status}`)
      }

      // Succès — réinitialiser le formulaire
      setSubmitStatus('success')
      setFormData({ id: '', nom: '', sujet: '', email: '', message: '' })

      // Fermer la modale après 1.5s
      setTimeout(() => {
        setIsModalOpen(false)
        setSubmitStatus('idle')
      }, 1500)

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-gold-900 overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob">

          </div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000">

          </div>
          <div className="absolute -bottom-32 left-20 w-96 h-96 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000">

          </div>
        </div>

        {/* Content*/} 
        <div className="relative z-10">
         
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-32 animate-fadeIn">
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
                    className="rounded-xl from-gold-800 to-gold-600 px-8 py-3 font-semibold text-white hover:shadow-lg hover:shadow-gold-500/50 transform hover:scale-105 transition duration-300"
                  >
                    Découvrir
                  </Link>
                  <button
                    onClick={openContactModal}
                    className="rounded-xl glass px-8 py-3 font-semibold text-white  transform hover:scale-105 transition duration-300"
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
          </div>

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
                      className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white/20 transition duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-gray-200 mb-2">
                      Sujet de votre message
                    </label>
                    <input 
                      type="text" 
                      id="sujet" 
                      name="sujet" 
                      value={formData.sujet}
                      onChange={handleInputChange}
                      placeholder="Sujet de votre message" 
                      className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white/20 transition duration-300"
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
                      className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white/20 transition duration-300"
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
                      className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white/20 transition duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gold-00 px-6 py-3 font-semibold text-white hover:shadow-lg hover:shadow-gold-500/50 transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>

                  {/* Message de succès */}
                  {submitStatus === 'success' && (
                    <p className="text-green-400 text-sm text-center animate-fadeIn">
                      ✓ Message envoyé avec succès ! Nous vous répondrons rapidement.
                    </p>
                  )}

                  {/* Message d'erreur */}
                  {submitStatus === 'error' && (
                    <p className="text-red-400 text-sm text-center animate-fadeIn">
                      ✗ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                    </p>
                  )}
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
                <div className="group glass rounded-2xl p-8 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30 animate-slideInUp">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-900/30 group-hover:bg-gold-900/50 transition duration-300 transform group-hover:scale-110">
                    <TrendingUp className="h-6 w-6 text-gold-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold-300 transition">ESSO</h3>
                  <p className="mt-2 text-gray-300">
                    Tontines digitales automatisées, traçables et sécurisées.
                  </p>
                </div>

                {/* Tironienne */}
                <div className="group glass rounded-2xl p-8 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30 animate-slideInUp animation-delay-1000">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-900/30 group-hover:bg-gold-900/50 transition duration-300 transform group-hover:scale-110">
                    <Smartphone className="h-6 w-6 text-gold-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold-300 transition">Tironienne</h3>
                  <p className="mt-2 text-gray-300">
                    Épargne programmable accessible depuis votre téléphone.
                  </p>
                </div>

                {/* Wallet */}
                <div className="group glass rounded-2xl p-8 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30 animate-slideInUp animation-delay-2000">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-900/30 group-hover:bg-gold-900/50 transition duration-300 transform group-hover:scale-110">
                    <Zap className="h-6 w-6 text-gold-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold-300 transition">Wallet</h3>
                  <p className="mt-2 text-gray-300">
                    Paiements mobiles intégrés à Moov, Flooz et T-Money.
                  </p>
                </div>

                {/* Blockchain */}
                <div className="group glass rounded-2xl p-8 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30 animate-slideInUp animation-delay-4000">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-900/30 group-hover:bg-gold-900/50 transition duration-300 transform group-hover:scale-110">
                    <Lock className="h-6 w-6 text-gold-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold-300 transition">Blockchain</h3>
                  <p className="mt-2 text-gray-300">
                    Transparence et sécurité via Polygon.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/*la partie des blogs */}
          <section className="px-4 py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-4xl font-bold text-white mb-4 animate-slideInDown">Actualités BankVi</h2>
              <p className="text-gray-300 text-lg mb-12 max-w-2xl animate-slideInDown">
                Suivez les dernières innovations et actualités de BankVi au Togo
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                {/* Article 1 */}
                <article className="group glass rounded-2xl overflow-hidden hover:bg-white/20 transition duration-300 transform hover:scale-105 animate-slideInUp">
                  <div className="h-48 bg-gradient-to-br from-gold-800 to-gold-600 flex items-center justify-center">
                    <span className="text-gold-200 text-4xl font-bold opacity-50">01</span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="px-4 py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-4xl font-bold text-white mb-12 animate-slideInDown">Pourquoi BankVi</h2>
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="group glass rounded-2xl p-6 hover:bg-white/20 transition duration-300 transform hover:translate-x-2 animate-slideInLeft">
                    <h3 className="font-semibold text-white flex items-center gap-3">
                      <span className="inline-block w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-300 rounded-full animate-pulse-custom shadow-lg shadow-gold-500/50"></span>
                      Tontines modernes
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Remplacez les systèmes informels par une solution transparente et sécurisée.
                    </p>
                  </div>
                  <div className="group glass rounded-2xl p-6 hover:bg-white/20 transition duration-300 transform hover:translate-x-2 animate-slideInLeft animation-delay-1000">
                    <h3 className="font-semibold text-white flex items-center gap-3">
                      <span className="inline-block w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-300 rounded-full animate-pulse-custom shadow-lg shadow-gold-500/50"></span>
                      Épargne flexible
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Programmez votre épargne à votre rythme, sans contraintes.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="group glass rounded-2xl p-6 hover:bg-white/20 transition duration-300 transform hover:translate-x-2 animate-slideInRight">
                    <h3 className="font-semibold text-white flex items-center gap-3">
                      <span className="inline-block w-3 h-3 bg-gradient-to-r from-gold-400 to-gold-300 rounded-full animate-pulse-custom shadow-lg shadow-gold-500/50"></span>
                      Paiements instantanés
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Connecté aux opérateurs mobiles pour des transferts rapides et fiables.
                    </p>
                  </div>
                  <div className="group glass rounded-2xl p-6 hover:bg-white/20 transition duration-300 transform hover:translate-x-2 animate-slideInRight animation-delay-1000">
                    <h3 className="font-semibold text-white flex items-center gap-3">
                      <span className="inline-block w-3 h-3 bg-gold-300 rounded-full animate-pulse-custom shadow-lg shadow-gold-500/50"></span>
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

          {/* Téléchargement — App Store & Google Play */}
          <section className="px-4 py-20">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-4xl font-bold text-white mb-4 animate-slideInDown">Téléchargez BankVi</h2>
              <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto animate-slideInDown">
                Disponible sur iOS et Android. Gérez vos tontines, votre épargne et vos paiements en un clic.
              </p>
              <div className="flex flex-wrap justify-center gap-6 animate-slideInUp">
                {/* Lien App Store */}
                {/* TODO: Remplacer # par le vrai lien App Store */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl px-8 py-4 flex items-center gap-4 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30"
                >
                  <svg className="w-8 h-8 text-white group-hover:text-gold-300 transition" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Télécharger sur</p>
                    <p className="text-lg font-semibold text-white group-hover:text-gold-300 transition">App Store</p>
                  </div>
                </a>
                {/* Lien Google Play */}
                {/* TODO: Remplacer # par le vrai lien Google Play */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl px-8 py-4 flex items-center gap-4 hover:bg-white/20 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/30"
                >
                  <svg className="w-8 h-8 text-white group-hover:text-gold-300 transition" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Télécharger sur</p>
                    <p className="text-lg font-semibold text-white group-hover:text-gold-300 transition">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Blog / Actualités — Previews */}
          {/* TODO: Remplacer les articles statiques par des données MDX ou CMS headless */}
          <section className="px-4 py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-4xl font-bold text-white mb-4 animate-slideInDown">Actualités BankVi</h2>
              <p className="text-gray-300 text-lg mb-12 max-w-2xl animate-slideInDown">
                Suivez les dernières innovations et actualités de la finance digitale en Afrique de l'Ouest.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                {/* Article 1 */}
                <article className="group glass rounded-2xl overflow-hidden hover:bg-white/20 transition duration-300 transform hover:scale-105 animate-slideInUp">
                  <div className="h-48 bg-gradient-to-br from-gold-800 to-gold-600 flex items-center justify-center">
                    <span className="text-gold-200 text-4xl font-bold opacity-50">01</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gold-400 uppercase tracking-wider mb-2">Tontine digitale</p>
                    <h3 className="text-lg font-semibold text-white group-hover:text-gold-300 transition mb-2">
                      ESSO — La tontine 2.0 arrive au Sénégal
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Découvrez comment ESSO modernise les tontines traditionnelles avec la puissance de la blockchain Polygon.
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm font-medium transition"
                    >
                      Lire la suite →
                    </a>
                  </div>
                </article>
                {/* Article 2 */}
                <article className="group glass rounded-2xl overflow-hidden hover:bg-white/20 transition duration-300 transform hover:scale-105 animate-slideInUp animation-delay-1000">
                  <div className="h-48 bg-gradient-to-br from-gold-700 to-gold-500 flex items-center justify-center">
                    <span className="text-gold-200 text-4xl font-bold opacity-50">02</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gold-400 uppercase tracking-wider mb-2">Épargne</p>
                    <h3 className="text-lg font-semibold text-white group-hover:text-gold-300 transition mb-2">
                      Tironienne — Épargner n&apos;a jamais été aussi simple
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Programmez votre épargne depuis votre mobile et regardez votre capital grandir automatiquement.
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm font-medium transition"
                    >
                      Lire la suite →
                    </a>
                  </div>
                </article>
                {/* Article 3 */}
                <article className="group glass rounded-2xl overflow-hidden hover:bg-white/20 transition duration-300 transform hover:scale-105 animate-slideInUp animation-delay-2000">
                  <div className="h-48 bg-gradient-to-br from-gold-900 to-gold-700 flex items-center justify-center">
                    <span className="text-gold-200 text-4xl font-bold opacity-50">03</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gold-400 uppercase tracking-wider mb-2">Paiement mobile</p>
                    <h3 className="text-lg font-semibold text-white group-hover:text-gold-300 transition mb-2">
                      BankVi Wallet — Flooz, Moov & MixxByYas intégrés
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Payez et recevez de l&apos;argent instantanément depuis votre Wallet BankVi. Tous les opérateurs.
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm font-medium transition"
                    >
                      Lire la suite →
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-4 py-20">
            <div className="mx-auto max-w-4xl glass rounded-2xl p-12 text-center transform hover:scale-105 transition duration-300 hover:shadow-2xl hover:shadow-gold-500/20 animate-slideInUp">
              <h2 className="text-3xl font-bold text-white">
                Prêt à commencer ?
              </h2>
              <p className="mt-4 text-gray-300 text-lg">
                Rejoignez une communauté d'utilisateurs qui transforment leur avenir financier.
              </p>
              <button 
                onClick={openContactModal}
                className="mt-8 inline-block rounded-xl bg-gradient-to-r from-gold-900 to-gold-700 px-8 py-3 font-semibold text-white hover:shadow-lg hover:shadow-gold-500/50 transform hover:scale-110 transition duration-300"
              >
                Démarrer gratuitement
              </button>
            </div>
          </section>
        </div>
    </div>
  )
}