import type { Metadata } from "next";
import { Barlow, Archivo } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bellarempreendimentos.com.br'),
  title: {
    template: '%s | Bel Lar Empreendimento',
    default: 'Bel Lar Empreendimento — Construtora, Engenharia, Canaã dos Carajás, PA',
  },
  description: "Projetos de construção, arquitetura e engenharia civil com qualidade e solidez no Pará desde 1992.",
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${archivo.variable}`}>
      <body className="font-sans antialiased text-[#4b5563] bg-white">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bel Lar Empreendimento",
              "url": "https://bellarempreendimentos.com.br",
              "logo": "https://bellarempreendimentos.com.br/midia/sobre/logowebsite.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5594991441811",
                "contactType": "customer service",
                "email": "contato@bellarempreendimento.com.br",
                "areaServed": "BR",
                "availableLanguage": "Portuguese"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Brasil 638, Centro",
                "addressLocality": "Canaã dos Carajás",
                "addressRegion": "PA",
                "addressCountry": "BR"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
