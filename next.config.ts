import type { NextConfig } from "next";

/* ===== INTERNATIONALISATION (i18n) =====
   next-intl est optionnel pour l'instant.
   Pour l'activer :
   1. Exécute : npm install next-intl
   2. Décommente les 2 lignes ci-dessous
   3. Crée i18n/request.ts et messages/{fr,en}.json (déjà préparés)
   
   import createNextIntlPlugin from "next-intl/plugin";
   const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
*/

const nextConfig: NextConfig = {};

/* Décommenter après installation de next-intl :
   export default withNextIntl(nextConfig);
*/
export default nextConfig;
