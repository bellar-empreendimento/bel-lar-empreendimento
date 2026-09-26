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
    template: '%s | Bel Lar Empreendimentos',
    default: 'Bel Lar Empreendimentos | Engenharia e Construção Civil',
  },
  description: "Há mais de 20 anos transformando projetos em obras sólidas. Especialistas em construção e engenharia nos segmentos residencial, comercial e industrial.",
  icons: {
    icon: '/midia/sobre/favicon.webp',
    shortcut: '/midia/sobre/favicon.webp',
    apple: '/midia/sobre/favicon.webp',
  },
  openGraph: {
    title: 'Bel Lar Empreendimentos | Engenharia e Construção Civil',
    description: 'Há mais de 20 anos transformando projetos em obras sólidas. Especialistas em construção e engenharia.',
    url: 'https://bellarempreendimentos.com.br',
    siteName: 'Bel Lar Empreendimentos',
    images: [
      {
        url: '/midia/sobre/BellarWEB.webp',
        width: 1200,
        height: 630,
        alt: 'Bel Lar Empreendimentos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bel Lar Empreendimentos | Engenharia e Construção',
    description: 'Há mais de 20 anos construindo com solidez, experiência e excelência.',
    images: ['/midia/sobre/BellarWEB.webp'],
  },
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
                "streetAddress": "Av Ipe Quadra18 Lote 01",
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
