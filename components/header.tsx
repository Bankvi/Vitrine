'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-80 transition duration-300 group"
          >
            <Image
              src="/bankvi.png"
              alt="BankVi"
              width={40}
              height={40}
              className="h-10 w-auto group-hover:scale-110 transition duration-300"
              priority
            />
            <span className="text-xl font-bold text-gold-900 dark:text-gold-400 group-hover:text-gold-700 dark:group-hover:text-gold-300 transition duration-300">
              BankVi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 font-medium relative group"
            >
              Produits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-800 to-gold-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              href="/documentation"
              className="text-gray-700 dark:text-gray-300 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 font-medium relative group"
            >
              Documentation
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-800 to-gold-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              href="/blog"
              className="text-gray-700 dark:text-gray-300 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 font-medium relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-800 to-gold-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Right side - Theme toggle and menu */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 group"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-white/5 animate-slideInDown">
            <div className="flex flex-col gap-2 px-2 py-4">
              <Link 
                href="#features"
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gold-900/20 rounded-xl transition duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <a 
                href="#"
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gold-900/20 rounded-xl transition duration-300 font-medium"
              >
                A propos
              </a>
              <a 
                href="#"
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gold-900/20 rounded-xl transition duration-300 font-medium"
              >
                Blog
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

