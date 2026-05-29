import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

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
                            <a href="#" title="Facebook" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-900 dark:hover:bg-amber-600 hover:text-white transition duration-300 transform hover:scale-110 text-xs font-bold">
                                f
                            </a>
                            <a href="#" title="Twitter" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-900 dark:hover:bg-amber-600 hover:text-white transition duration-300 transform hover:scale-110 text-xs font-bold">
                                𝕏
                            </a>
                            <a href="#" title="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-900 dark:hover:bg-amber-600 hover:text-white transition duration-300 transform hover:scale-110 text-xs font-bold">
                                in
                            </a>
                            <a href="#" title="Instagram" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-900 dark:hover:bg-amber-600 hover:text-white transition duration-300 transform hover:scale-110 text-xs font-bold">
                                📷
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="animate-fadeIn animation-delay-1000">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Produits</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group">
                                    ESSO
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group">
                                    Tironienne
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group">
                                    Wallet
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group">
                                    Blockchain
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ressources */}
                    <div className="animate-fadeIn animation-delay-2000">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Ressources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group">
                                    Documentation
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group">
                                    Blog
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group">
                                    Centre d&apos;aide
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group">
                                    Statut du système
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="animate-fadeIn animation-delay-4000">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Mail size={18} className="text-amber-900 dark:text-amber-400 flex-shrink-0" />
                                <a href="mailto:contact@bankvi.com" className="hover:text-amber-900 dark:hover:text-amber-400 transition duration-300">
                                    contact@bankvi.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <Phone size={18} className="text-amber-900 dark:text-amber-400 flex-shrink-0" />
                                <a href="tel:+221761234567" className="hover:text-amber-900 dark:hover:text-amber-400 transition duration-300">
                                    +221 76 123 45 67
                                </a>
                            </li>
                            <li className="flex gap-2 text-gray-600 dark:text-gray-400">
                                <MapPin size={18} className="text-amber-900 dark:text-amber-400 flex-shrink-0" />
                                <span>Dakar, Sénégal</span>
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
                            href="/privacy" 
                            className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group"
                        >
                            Politique de confidentialité
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            href="/terms" 
                            className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group"
                        >
                            Conditions d&apos;utilisation
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            href="/cookies" 
                            className="text-gray-600 dark:text-gray-400 hover:text-amber-900 dark:hover:text-amber-400 transition duration-300 relative group"
                        >
                            Politique des cookies
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-900 to-orange-900 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Animated accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 -z-10 animate-blob animation-delay-2000"></div>
        </footer>
    )
}