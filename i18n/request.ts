/* ===== CONFIGURATION i18n — Configuration simple ===== */
/* Ce fichier gère le chargement des traductions.
   
   TODO: Intégrer next-intl pour une implémentation complète.
   Docs: https://next-intl.dev/docs/getting-started/app-router
*/

// Langues supportées — la première est le fallback
export const locales = ['fr', 'en'] as const
export const defaultLocale = 'fr'
export type Locale = (typeof locales)[number]

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// Fonction utilitaire pour charger les messages
export async function getMessages(locale: Locale) {
  try {
    const messages = (await import(`../messages/${locale}.json`)).default
    return messages
  } catch (error) {
    console.warn(`Failed to load messages for locale: ${locale}`)
    // Fallback à français
    const fallback = (await import(`../messages/${defaultLocale}.json`)).default
    return fallback
  }
}
