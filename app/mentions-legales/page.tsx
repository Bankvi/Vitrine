import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — BankVi",
  description: "Informations légales de BankVi, néo-banque communautaire digitale en Afrique de l'Ouest.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A0F05] via-[#0D0D0D] to-[#1A0F05]">
      {/* Orbe décoratif */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(60,30,10,0.6) 0%, transparent 70%)' }}></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Mentions légales</h1>

        <div className="glass rounded-2xl p-8 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Éditeur du site</h2>
            <p>
              Le site internet BankVi (ci-après &laquo; le Site &raquo;) est édité par :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Raison sociale :</strong> BankVi SAS</li>
              <li><strong>Siège social :</strong> Dakar, Sénégal</li>
              <li><strong>Email :</strong> contact@bankvi.com</li>
              <li><strong>Téléphone :</strong> +221 76 123 45 67</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Directeur de la publication</h2>
            <p>Le Directeur de la publication est le représentant légal de BankVi SAS.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Hébergement</h2>
            <p>
              {/* TODO: Remplacer par les informations d'hébergement réelles */}
              Le Site est hébergé par [Nom de l&apos;hébergeur] — [Adresse de l&apos;hébergeur].
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu du Site (textes, images, logos, icônes, vidéos, marques) est la propriété exclusive de BankVi SAS, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Responsabilité</h2>
            <p>
              BankVi s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur le Site. BankVi ne saurait être tenue responsable des dommages directs ou indirects résultant de l&apos;utilisation du Site ou de l&apos;impossibilité d&apos;y accéder.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Pour toute question relative aux mentions légales, vous pouvez nous contacter à l&apos;adresse email : <a href="mailto:contact@bankvi.com" className="text-gold-400 hover:text-gold-300 transition">contact@bankvi.com</a>.
            </p>
          </section>

          <p className="text-sm text-white/45 pt-4 border-t border-white/10">
            Dernière mise à jour : 2024
          </p>
        </div>
      </div>
    </div>
  );
}
