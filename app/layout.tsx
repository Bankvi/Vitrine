import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "BankVi - La banque numérique ouest-africaine",
  description: "BankVi est une néo-banque communautaire digitale. Tontines digitales, épargne programmable, et paiements mobiles. Tout en un seul endroit.",
  keywords: "banque, néo-banque, Afrique, tontine digitale, épargne, paiement mobile",
  authors: [{ name: "BankVi" }],
  openGraph: {
    title: "BankVi - La banque numérique ouest-africaine",
    description: "BankVi est une néo-banque communautaire digitale transformant la finance en Afrique de l'Ouest",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}
    >
      <body className="min-h-full flex flex-col relative font-sans bg-white dark:bg-gray-950 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme-preference">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}