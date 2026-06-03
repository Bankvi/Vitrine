# 🔧 Configuration de l'API BankVi

## Endpoints Actuellement Supportés

Le formulaire de contact essaie automatiquement les endpoints suivants:

1. `POST /messages`
2. `POST /contact/messages`
3. `POST /contact`

## Comment Adapter l'API

### Option 1: Ajouter Votre Endpoint à `lib/api.ts`

Si votre API utilise un endpoint différent, modifiez le fichier [lib/api.ts](lib/api.ts#L34-L42):

```typescript
// Dans la fonction sendContactMessage()
const endpoints = [
  '/your-actual-endpoint',  // Remplacez ici
  '/messages',
  '/contact/messages',
  '/contact',
]
```

### Option 2: Configurer via Variable d'Environnement

Ajoutez à `.env.local`:
```
NEXT_PUBLIC_CONTACT_ENDPOINT=/votre-endpoint
```

Puis utilisez dans [lib/api.ts](lib/api.ts):
```typescript
const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/messages'
```

## Format de Données Envoyées

Le formulaire envoie les données en JSON:

```json
{
  "nom": "Nom de l'utilisateur",
  "email": "email@example.com",
  "sujet": "Sujet du message",
  "message": "Texte du message"
}
```

## Tester le Formulaire

1. Remplissez tous les champs du formulaire de contact
2. Cliquez sur "Envoyer"
3. Consultez la console du navigateur (F12 > Console) pour voir les détails de l'appel API

## Autres Endpoints à Intégrer

Dans `lib/api.ts`, vous pouvez également ajouter des endpoints pour:

- **Produits**: `getProducts()` - pour charger les produits depuis l'API
- **Articles de blog**: `getArticles()` - pour charger les articles en dynamique
- **Documentation**: `getDocumentation()` - pour charger la documentation

### Exemple: Charger les Articles du Blog

```typescript
// Dans app/blog/page.tsx
import { getArticles } from '@/lib/api'

const { data: articles } = await getArticles()
// Utiliser articles au lieu des articles codées en dur
```

## Configuration API

**URL de base**: `https://bankvi-api.onrender.com/api/v1`

Définie dans `.env.local`:
```
NEXT_PUBLIC_API_URL=https://bankvi-api.onrender.com/api/v1
```

## Débogage

Pour voir les requêtes API en détail:

1. Ouvrez DevTools: `F12`
2. Allez à l'onglet **Network**
3. Remplissez et soumettez le formulaire
4. Regardez la requête vers `https://bankvi-api.onrender.com/api/v1/...`
5. Consultez la réponse (Status, Headers, Response)

## Support CORS

Assurez-vous que votre API BankVi supporte les requêtes CORS (Cross-Origin) depuis `localhost:3000` et votre domaine de production.

Header requis:
```
Access-Control-Allow-Origin: *
```

Ou spécifiquement pour votre domaine production.
