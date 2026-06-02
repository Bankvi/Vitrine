import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — BankVi",
  description: "Politique de confidentialité de BankVi — Comment nous protégeons vos données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Orbe décoratif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Politique de confidentialité</h1>

        <div className="glass rounded-2xl p-8 space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Collecte des données</h2>
            <p>
              Nous collectons les informations que vous nous fournissez directement :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Messages et communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Utilisation des données</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Vous fournir nos services bancaires digitaux</li>
              <li>Répondre à vos demandes de contact</li>
              <li>Améliorer notre plateforme et notre expérience utilisateur</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Partage des données</h2>
            <p>
              BankVi ne vend pas vos données personnelles à des tiers. Nous pouvons partager vos données avec :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nos partenaires de paiement (opérateurs mobiles, processeurs)</li>
              <li>Les autorités compétentes si requis par la loi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. La technologie blockchain Polygon garantit la transparence et l&apos;intégrité de chaque transaction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p className="mt-2">
              Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@bankvi.com" className="text-gold-400 hover:text-gold-300 transition">contact@bankvi.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
            <p>
              Le Site utilise des cookies strictement nécessaires à son fonctionnement. Des cookies tiers (analytiques) peuvent être utilisés avec votre consentement. Vous pouvez gérer vos préférences à tout moment.
            </p>
          </section>

          <p className="text-sm text-gray-500 pt-4 border-t border-white/10">
            Dernière mise à jour : 2026
          </p>
        </div>
      </div> 
    </div>
  );
}
