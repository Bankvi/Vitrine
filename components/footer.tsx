import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative mt-20 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
            <div className="mx-auto max-w-6xl px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid gap-8 md:grid-cols-4 mb-8">
                    {/* About */}
                    <div className="animate-fadeIn">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">BankVi</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Une néo-banque communautaire digitale transformant la finance en Afrique de l'Ouest.
                        </p>
                        <div className="flex gap-4 mt-4">
                            {/* Facebook — TODO: Remplacer # par le lien réel */}
                            <a href="#" title="Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gold-900 dark:hover:bg-gold-600 hover:text-white transition duration-300 transform hover:scale-110">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                            </a>
                            {/* Twitter/X — TODO: Remplacer # par le lien réel */}
                            <a href="#" title="Twitter / X" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gold-900 dark:hover:bg-gold-600 hover:text-white transition duration-300 transform hover:scale-110">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            {/* LinkedIn — TODO: Remplacer # par le lien réel */}
                            <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gold-900 dark:hover:bg-gold-600 hover:text-white transition duration-300 transform hover:scale-110">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            {/* Instagram — TODO: Remplacer # par le lien réel */}
                            <a href="#" title="Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gold-900 dark:hover:bg-gold-600 hover:text-white transition duration-300 transform hover:scale-110">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="animate-fadeIn animation-delay-1000">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Produits</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group">
                                    ESSO
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-900 to-gold-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group">
                                    Tironienne
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-900 to-gold-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group">
                                    Wallet
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-900 to-gold-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group">
                                    Blockchain
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-900 to-gold-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ressources */}
                    <div className="animate-fadeIn animation-delay-2000">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Ressources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/documentation" className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group">
                                    Documentation
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-900 to-gold-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group">
                                    Blog
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-900 to-gold-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group">
                                    Centre d&apos;aide
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-900 to-gold-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group">
                                    Statut du système
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-900 to-gold-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="animate-fadeIn animation-delay-4000">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Mail size={18} className="text-gold-900 dark:text-gold-400 flex-shrink-0" />
                                <a href="mailto:contact@bankvi.com" className="hover:text-gold-900 dark:hover:text-gold-400 transition duration-300">
                                    contact@bankvi.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Phone size={18} className="text-gold-900 dark:text-gold-400 flex-shrink-0" />
                                <a href="tel:#" className="hover:text-gold-900 dark:hover:text-gold-400 transition duration-300">
                                    un num est à mettre ici
                                </a>
                            </li>
                            <li className="flex gap-2 text-gray-600 dark:text-gray-400">
                                <MapPin size={18} className="text-gold-900 dark:text-gold-400 flex-shrink-0" />
                                <span>Lome, Togo</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-300 dark:border-gray-700"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                        &copy; 2024 BankVi. Tous droits réservés.
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm">
                        <Link 
                            href="/confidentialite" 
                            className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group"
                        >
                            Politique de confidentialité
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-800 to-gold-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            href="/cgu" 
                            className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group"
                        >
                            Conditions d&apos;utilisation
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-800 to-gold-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            href="/mentions-legales" 
                            className="text-gray-600 dark:text-gray-400 hover:text-gold-900 dark:hover:text-gold-400 transition duration-300 relative group"
                        >
                            Mentions légales
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-800 to-gold-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Animated accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 -z-10 animate-blob animation-delay-2000"></div>
        </footer>
    )
}