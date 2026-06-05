'use client'

import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import DownloadAppSection from '@/components/download-app-section'
import NewsSection from '@/components/news-section'
import CTASection from '@/components/cta-section'
import { sendContactMessage } from '@/lib/api'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function Home() {
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
    // Check initial hash on mount
    if (window.location.hash.includes('#contact')) {
      setIsModalOpen(true)
    }
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

    // Handle hash-based modal opening
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
    setIsModalOpen(true)
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

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ nom: '', sujet: '', email: '', message: '' })

        setTimeout(() => {
          setIsModalOpen(false)
          setSubmitStatus('idle')
        }, 1500)
      } else {
        throw new Error(result.error)
      }

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Download App Section */}
      <DownloadAppSection />

      {/* News/Blog Section */}
      <NewsSection />

      {/* CTA Section */}
      <CTASection />

      
    </>
  )
}