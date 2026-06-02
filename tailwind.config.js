/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light': {
                    'bg': '#ffffff',
                    'text': '#1A1A1A',
                    'border': '#e5e7eb',
                },
                'dark': {
                    'bg': '#0D0D0D',
                    'text': '#F5F5F5',
                    'border': '#374151',
                },
                /* Or BankVi — couleur primaire */
                'gold': {
                    '50': '#F9F3E0',
                    '100': '#F0E3B8',
                    '200': '#E6D08A',
                    '300': '#D9BC5B',
                    '400': '#C9A84C',
                    '500': '#B8943E',
                    '600': '#A08030',
                    '700': '#886C24',
                    '800': '#705818',
                    '900': '#58440E',
                },
            },
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-custom': 'pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fadeIn': 'fadeIn 0.6s ease-in',
                'slideInUp': 'slideInUp 0.6s ease-out',
                'slideInDown': 'slideInDown 0.6s ease-out',
                'slideInLeft': 'slideInLeft 0.6s ease-out',
                'slideInRight': 'slideInRight 0.6s ease-out',
                'scaleIn': 'scaleIn 0.5s ease-out',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                blob: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'pulse-custom': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                slideInUp: {
                    'from': { transform: 'translateY(30px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInDown: {
                    'from': { transform: 'translateY(-30px)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    'from': { transform: 'translateX(-30px)', opacity: '0' },
                    'to': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    'from': { transform: 'translateX(30px)', opacity: '0' },
                    'to': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    'from': { transform: 'scale(0.9)', opacity: '0' },
                    'to': { transform: 'scale(1)', opacity: '1' },
                },
            },
            transitionDuration: {
                '300': '300ms',
                '500': '500ms',
            }
        }
    },
    plugins: [],
}