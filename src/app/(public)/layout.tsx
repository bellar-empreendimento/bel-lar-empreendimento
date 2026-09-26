import type { ReactNode } from 'react'
import { SideMenu } from '@/components/public/SideMenu'
import { Header } from '@/components/public/Header'
import { Footer } from '@/components/public/Footer'

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#4b5563] font-sans antialiased overflow-x-hidden">
      {/* 1. Sidebar Esquerda e Menu Lateral Off-canvas */}
      <SideMenu />

      {/* 2. Área de Conteúdo Principal (Deslocada 78px à esquerda no desktop) */}
      <div className="md:pl-[78px] w-full min-h-screen relative">
        {/* Header Superior com Busca e Logotipo */}
        <Header />



        {/* Conteúdo Dinâmico das Páginas */}
        <main className="w-full">
          {children}
        </main>

        {/* Rodapé Global */}
        <Footer />
      </div>
    </div>
  )
}
