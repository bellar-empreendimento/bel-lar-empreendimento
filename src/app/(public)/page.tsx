import { trackPageView } from '@/utils/supabase/actions'
import { HeroSlider } from '@/components/public/HeroSlider'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  // 1. Registro atômico de acesso no Supabase antes da renderização
  await trackPageView('home')

  return (
    <>
      {/* Hero Section com Slider */}
      <HeroSlider />

      {/* Seção Sobre Nós */}
      <section id="sobre" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-0.5 bg-[#f2521c]" />
          <span className="text-[#f2521c] text-xs font-bold tracking-widest uppercase">
            Bem-vindo à Bel Lar Empreendimento
          </span>
        </div>
        <h2 className="text-[#0b1e3e] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Archivo',sans-serif] max-w-xl mb-6">
          Somos A Melhor Empresa Em Construção Civil
        </h2>
        <p className="text-[#4b5563] text-lg leading-relaxed max-w-3xl font-['Barlow',sans-serif]">
          Atuamos em todas as etapas do empreendimento: estudo de viabilidade, projeto executivo, gestão de canteiro e entrega com pontualidade e rigor técnico no Pará desde 1992.
        </p>
      </section>
    </>
  )
}
