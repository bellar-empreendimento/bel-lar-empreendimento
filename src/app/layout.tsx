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
  title: "Bel Lar Empreendimento — Construindo um Futuro Melhor",
  description: "Projetos de construção, arquitetura e engenharia civil com qualidade e solidez no Pará desde 1992.",
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
      </body>
    </html>
  );
}
