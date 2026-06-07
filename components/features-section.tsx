'use client'

import { useEffect, useState } from 'react'
import { sendContactMessage } from '@/lib/api'
import { Zap, Wallet, Users, Link2, X } from 'lucide-react'
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nom: '',
    sujet: '',
    email: '',
    message: ''
  })
  
  useEffect(() => {
    const set = () => {
      if (window.location.hash.includes('#contact')) {
        setIsModalOpen(true)
      }
    }
    set();
  }, [])
  
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
  
    const handleHashChange = () => {
      if (window.location.hash.includes('#contact')) {
        setIsModalOpen(true)
      } else if (window.location.hash === '' || window.location.hash === '#') {
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
  
    window.addEventListener('hashchange', handleHashChange)
  
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('hashchange', handleHashChange)
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])
  
  const openContactModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    setIsModalOpen(true);
  }
  
  const closeContactModal = () => {
    setIsModalOpen(false)
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
  
    try {
      const result = await sendContactMessage({
        nom: formData.nom,
        email: formData.email,
        sujet: formData.sujet,
        message: formData.message,
      })
  
      if (result && result.success) {
        setSubmitStatus('success')
        setFormData({ nom: '', sujet: '', email: '', message: '' })
  
        setTimeout(() => {
          setIsModalOpen(false)
          setSubmitStatus('idle')
        }, 1500)
      } else {
        console.warn("Le serveur a renvoyé un échec :", result?.error)
        setSubmitStatus('error')
      }
  
    } catch (error) {
      console.error('Erreur critique lors de l\'envoi du message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
    
  return (
    <>
      <section id="features" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-50/30 to-transparent dark:via-[#1A0F05]/50"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-gold-600 dark:from-white dark:to-gold-400">
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
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                      {feature.name}
                    </h3>
                    
                    <p className="text-white/45 leading-relaxed mb-6">
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
            <p className="text-secondary mb-6">
              Besoin d&apos;en savoir plus sur nos produits?
            </p>
            <button 
              onClick={() => openContactModal()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
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
                  Sujet
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
                className="w-full rounded-xl bg-gold-600 hover:bg-gold-700 px-6 py-3 font-semibold text-white hover:shadow-lg hover:shadow-gold-500/50 transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm text-center animate-fadeIn">
                  ✓ Message envoyé avec succès ! Nous vous répondrons rapidement.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center animate-fadeIn">
                  ✗ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                </p>
              )}
            </form>
          </div>
        </section>
      )}
    </>
  )
}