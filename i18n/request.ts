/* ===== CONFIGURATION i18n — next-intl ===== */
/* Ce fichier définit comment charger les traductions.
   Le backend Django gère les fichiers /messages/fr.json et /messages/en.json.
   Le frontend consomme uniquement les clés via next-intl.
   
   TODO: Ajuster le chemin des messages si nécessaire après installation de next-intl.
   Docs: https://next-intl.dev/docs/getting-started/app-router
*/

import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';

// Langues supportées — la première est le fallback
export const locales = ['fr', 'en'] as const
export const defaultLocale = 'fr'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(locales, requested) ? requested : defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
