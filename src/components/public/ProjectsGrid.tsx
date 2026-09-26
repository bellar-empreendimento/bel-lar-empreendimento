import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ProjectsGrid() {
  return (
    <section id="projetos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] sm:auto-rows-[340px] lg:auto-rows-[clamp(300px,23vw,424px)] overflow-hidden">
      {/* 1. Card Laranja */}
      <div className="bg-[#f2521c] p-7 sm:p-10 flex flex-col justify-between hover:bg-[#d8420f] transition-colors group">
        <div>
          <span className="text-white/85 text-xs font-bold tracking-widest uppercase block mb-5">
            Sala de imprensa / 20 jan 2026
          </span>
          <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug font-['Archivo',sans-serif]">
            Gestão predominante no processo de construção para o que vem.
          </h3>
        </div>
        <div className="w-12 h-12 border border-white/60 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>

      {/* 2. Foto com Zoom (Residencial Bel Lar) */}
      <div className="overflow-hidden relative group">
        <Image
          src="/midia/obras/Bellarcasa.webp"
          alt="Projeto Residencial Bel Lar Empreendimentos"
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* 3. Card Azul Escuro (Escopos) */}
      <div className="bg-[#0b2b56] p-7 sm:p-10 flex flex-col justify-between hover:bg-[#07203f] transition-colors group">
        <div>
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase block mb-5">
            Escopos
          </span>
          <h3 className="text-white text-xl sm:text-2xl font-bold leading-relaxed font-['Archivo',sans-serif]">
            Comercial<br />Residencial<br />Multipavimentos
          </h3>
        </div>
        <div className="w-12 h-12 border border-white/40 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>

      {/* 4. Card Azul Royal (Tendências) */}
      <div className="bg-[#0d5cab] p-7 sm:p-10 flex flex-col justify-between hover:bg-[#0a4b8d] transition-colors group">
        <div>
          <span className="text-white/70 text-xs font-bold tracking-widest uppercase block mb-5">
            Tendências
          </span>
          <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug font-['Archivo',sans-serif]">
            Espaços Construídos Para Todo Propósito Desde 2006
          </h3>
        </div>
        <div className="w-12 h-12 border border-white/50 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>

      {/* 5. Card Azul Royal (Conceito) */}
      <div className="bg-[#0d5cab] p-7 sm:p-10 flex flex-col justify-between hover:bg-[#0a4b8d] transition-colors group">
        <div>
          <span className="text-white/70 text-xs font-bold tracking-widest uppercase block mb-5">
            Conceito
          </span>
          <h3 className="text-white text-xl sm:text-2xl font-bold leading-snug font-['Archivo',sans-serif]">
            Escritório de construção moderna com equipe qualificada e profissional
          </h3>
        </div>
        <div className="w-12 h-12 border border-white/50 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>

      {/* 6. Card Cinza Claro (Serviços Destacados) */}
      <div className="bg-[#eef0f6] p-7 sm:p-10 flex flex-col justify-between hover:bg-[#e3e6ef] transition-colors group">
        <div>
          <span className="text-[#8a93a6] text-xs font-bold tracking-widest uppercase block mb-5">
            Serviços destacados
          </span>
          <h3 className="text-[#0b1e3e] text-xl sm:text-2xl font-bold leading-relaxed font-['Archivo',sans-serif]">
            Escritório de Arquitetura<br />Empreendimentos<br />Interiores
          </h3>
        </div>
        <div className="w-12 h-12 border border-[#0b1e3e] flex items-center justify-center text-[#0b1e3e] group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>

      {/* 7 & 8. Imagem Ampla (Design de Interiores) - Span 2 colunas */}
      <div className="col-span-1 sm:col-span-2 overflow-hidden relative group">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
          alt="Interiores de Alta Qualidade Entregues"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute left-6 bottom-6 bg-[#0b1e3e]/85 backdrop-blur-sm px-5 py-2.5 text-white text-xs font-bold tracking-widest uppercase shadow-md">
          Interiores &amp; Acabamento Premium
        </div>
      </div>
    </section>
  )
}
