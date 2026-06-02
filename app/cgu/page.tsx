import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — BankVi",
  description: "CGU de BankVi — Conditions générales d'utilisation de la plateforme BankVi.",
};

export default function CguPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Orbe décoratif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Conditions générales d&apos;utilisation</h1>

        <div className="glass rounded-2xl p-8 space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (ci-après &laquo; CGU &raquo;) régissent l&apos;accès et l&apos;utilisation de l&apos;application BankVi ainsi que des services associés proposés par BankVi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Acceptation des CGU</h2>
            <p>
              En accédant à l&apos;application BankVi et en utilisant les services, vous acceptez pleinement et sans réserve les présentes CGU. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser nos services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Description des services</h2>
            <p>BankVi propose les services suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>ESSO :</strong> Tontines digitales automatisées et sécurisées</li>
              <li><strong>Tironienne :</strong> Épargne programmable depuis votre mobile</li>
              <li><strong>Wallet :</strong> Paiements mobiles intégrés (Moov, Flooz, MixxByYas)</li>
              <li><strong>Blockchain :</strong> Transparence et traçabilité via Polygon</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Obligations de l&apos;utilisateur</h2>
            <p>L&apos;utilisateur s&apos;engage à :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Fournir des informations exactes et à jour</li>
              <li>Ne pas utiliser les services à des fins frauduleuses</li>
              <li>Respecter les lois et réglementations en vigueur</li>
              <li>Ne pas perturber le fonctionnement de l&apos;application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Propriété intellectuelle</h2>
            <p>
              Tous les éléments de l&apos;application (contenu, design, marques, logos) sont protégés par le droit d&apos;auteur et la propriété intellectuelle. Toute utilisation non autorisée est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation de responsabilité</h2>
            <p>
              BankVi met tout en œuvre pour assurer un service de qualité, mais ne saurait être tenue responsable des dommages indirects résultant de l&apos;utilisation de ses services, notamment en cas d&apos;interruption du service ou de perte de données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Données personnelles</h2>
            <p>
              Le traitement des données personnelles est effectué conformément à notre Politique de confidentialité. En utilisant nos services, vous consentez à cette collecte et à ce traitement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Modification des CGU</h2>
            <p>
              BankVi se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés des modifications substantielles. L&apos;utilisation continue des services après modification vaut acceptation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Droit applicable</h2>
            <p>
              Les présentes CGU sont soumises au droit sénégalais. Tout litige relève de la compétence des tribunaux de Dakar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              Pour toute question relative aux CGU : <a href="mailto:contact@bankvi.com" className="text-gold-400 hover:text-gold-300 transition">contact@bankvi.com</a>.
            </p>
          </section>

          <p className="text-sm text-gray-500 pt-4 border-t border-white/10">
            Dernière mise à jour : 2024
          </p>
        </div>
      </div>
    </div>
  );
}
