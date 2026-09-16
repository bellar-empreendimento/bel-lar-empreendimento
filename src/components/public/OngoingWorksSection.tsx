import Image from 'next/image'
import { Building2, Home } from 'lucide-react'

export function OngoingWorksSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-white max-w-[1900px] mx-auto">
      {/* Lado Esquerdo: Foto + Bloco Azul Marinho */}
      <div className="p-6 sm:p-10 flex items-stretch min-h-[360px] sm:min-h-[420px]">
        <div className="relative w-[60%] flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Arquitetura Contemporânea Bel Lar"
            fill
            sizes="(max-width: 1024px) 60vw, 30vw"
            className="object-cover"
          />
        </div>
        <div className="flex-1 bg-[#0b1338] p-6 sm:p-9 flex flex-col justify-center text-white">
          <span className="text-[#f2521c] text-xs font-bold tracking-widest uppercase mb-4 block">
            Obras em andamento
          </span>
          <h3 className="text-white text-lg sm:text-2xl font-medium leading-relaxed font-['Barlow',sans-serif]">
            Criamos edifícios funcionais e visualmente marcantes
          </h3>
        </div>
      </div>

      {/* Lado Direito: Tipologias Arquitetônicas */}
      <div className="border-t lg:border-t-0 lg:border-l border-[#e8eaf0] p-8 sm:p-14 lg:p-16 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Comercial */}
        <div>
          <div className="w-12 h-12 rounded-lg bg-[#0d5cab]/10 flex items-center justify-center text-[#0d5cab] mb-6">
            <Building2 className="w-7 h-7" />
          </div>
          <h4 className="text-[#0d5cab] text-xl font-bold mb-3 font-['Barlow',sans-serif]">
            Comercial
          </h4>
          <p className="text-[#4b5563] text-sm leading-relaxed max-w-[34ch]">
            Galpões, lojas e escritórios executados com estrutura pré-moldada e prazos curtos, prontos para operação.
          </p>
        </div>

        {/* Residencial */}
        <div>
          <div className="w-12 h-12 rounded-lg bg-[#0d5cab]/10 flex items-center justify-center text-[#0d5cab] mb-6">
            <Home className="w-7 h-7" />
          </div>
          <h4 className="text-[#0d5cab] text-xl font-bold mb-3 font-['Barlow',sans-serif]">
            Residencial
          </h4>
          <p className="text-[#4b5563] text-sm leading-relaxed max-w-[34ch]">
            Casas e edifícios multifamiliares com projeto integrado de arquitetura, estrutura e instalações.
          </p>
        </div>
      </div>
    </section>
  )
}
