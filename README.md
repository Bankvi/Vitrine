# BankVi - Site Vitrine

Site vitrine moderne et professionnel pour BankVi, une néo-banque communautaire digitale en Afrique de l'Ouest.

## 🚀 Fonctionnalités

- **Hero Section animée** avec glass morphism et orbes colorées
- **Sections de produits** : ESSO, Tironienne, Wallet, Blockchain
- **Téléchargement app** : App Store et Google Play
- **Blog/Actualités** avec support MDX
- **Documentation publique** : Guides utilisateur, API, FAQ
- **Formulaire de contact** connecté au backend Django
- **Design responsif** avec Tailwind CSS
- **Theme clair/sombre** avec next-themes
- **Animations fluides** et transitions CSS
- **Fallback @supports** pour navigateurs sans backdrop-filter

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org) 16.2.6 - React framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) 4 - Styling
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode
- [lucide-react](https://lucide.dev) - Icons
- [PostCSS](https://postcss.org) - CSS processing

## 📁 Structure du Projet

```
vitrine/
├── app/
│   ├── page.tsx                 # Page d'accueil
│   ├── layout.tsx               # Layout racine
│   ├── globals.css              # Styles globaux
│   ├── blog/
│   │   └── page.tsx             # Page Blog
│   ├── documentation/
│   │   └── page.tsx             # Page Documentation
│   ├── cgu/
│   │   └── page.tsx             # Conditions d'utilisation
│   ├── confidentialite/
│   │   └── page.tsx             # Politique de confidentialité
│   └── mentions-legales/
│       └── page.tsx             # Mentions légales
├── components/
│   ├── header.tsx               # Header/Navigation
│   ├── footer.tsx               # Footer
│   ├── hero-section.tsx         # Hero section
│   ├── features-section.tsx     # Section produits
│   ├── download-app-section.tsx # Section téléchargement
│   ├── news-section.tsx         # Section actualités
│   └── cta-section.tsx          # Call-to-action
├── i18n/
│   ├── request.ts               # Config i18n
│   └── messages/
│       ├── fr.json              # Traductions français
│       └── en.json              # Traductions anglais
├── public/                      # Assets statiques
├── .env.example                 # Variables d'environnement
├── next.config.ts               # Config Next.js
├── tailwind.config.js           # Config Tailwind
└── tsconfig.json                # Config TypeScript
```

## 🎨 Design System

### Couleurs
- **Or BankVi** : `#C9A84C` (or-600)
- **Gradients** : Or → Bleu, Or → Violet, Bleu → Cyan
- **Glass morphism** : `rgba(255,255,255,0.12)` avec blur(24px)

### Animations
- `blob` - Animation fluide des orbes
- `float` - Flottement léger
- `pulse-custom` - Pulsation douce
- `orb1`, `orb2`, `orb3` - Orbes colorées animées
- Animations Tailwind : fadeIn, slideInUp, scaleIn, etc.

## 🚀 Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repo
git clone <url-du-repo>
cd vitrine

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Configurer les variables d'environnement
# Éditer .env.local avec vos valeurs
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans le navigateur
```

### Build & Production

```bash
# Builder l'application
npm run build

# Démarrer le serveur de production
npm start

# Vérifier les erreurs
npm run lint
```

## 📝 Configuration

### Variables d'environnement

Créez un fichier `.env.local` basé sur `.env.example` :

```env
NEXT_PUBLIC_API_URL=https://api.bankvi.com
NEXT_PUBLIC_API_TOKEN=your-token-here
```

### Connexion Backend Django

Le formulaire de contact envoie les données à :
```
POST {NEXT_PUBLIC_API_URL}/api/contact/messages/
```

Structure du payload :
```json
{
  "nom": "string",
  "email": "string",
  "sujet": "string",
  "message": "string"
}
```

## 🌍 Internationalisation

Les traductions sont dans `i18n/messages/` :
- `fr.json` - Français
- `en.json` - Anglais

À implémenter : système de traduction complet avec next-intl

## 📱 Responsive Design

- Mobile first approach
- Breakpoints Tailwind :
  - `sm` : 640px
  - `md` : 768px
  - `lg` : 1024px
  - `xl` : 1280px

## 🔒 Sécurité

- Validation des formulaires côté client
- Headers de sécurité via Next.js
- Protection CORS
- Sanitization des inputs (à implémenter)

## 📊 Performance

- Code splitting automatique
- Image optimization avec Next.js Image
- CSS minification
- Lazy loading des composants

## 🤝 Contribution

1. Créer une branche (`git checkout -b feature/nom-feature`)
2. Commit les changements (`git commit -m 'Add feature'`)
3. Push vers la branche (`git push origin feature/nom-feature`)
4. Ouvrir une Pull Request

## 📋 Roadmap

- [ ] Intégration CMS pour blog/actualités
- [ ] Système de commentaires
- [ ] Analytics et tracking
- [ ] SEO optimization
- [ ] PWA support
- [ ] Multilangue complet (FR/EN/AR)
- [ ] Newsletter subscription
- [ ] Search fonctionnelle
- [ ] Dark mode polish
- [ ] Performance optimizations

## 📄 Licence

© 2025 BankVi. Tous droits réservés.

## 📞 Support

Pour toute question, contactez : contact@bankvi.com

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
