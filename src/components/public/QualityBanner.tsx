import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function QualityBanner() {
  return (
    <section className="relative pb-16 lg:pb-28">
      <div className="bg-[#17181c] w-full lg:w-[72%] min-w-full lg:min-w-[680px] py-12 lg:py-20">
        {/* Cabeçalho do Bloco */}
        <div className="px-6 md:px-12 lg:pl-[7vw] lg:pr-14 flex items-center justify-between gap-6 flex-wrap">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-['Archivo',sans-serif]">
            Entregamos Trabalho de Qualidade
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-[#f2521c] text-xs font-bold tracking-widest uppercase">
              Nossas obras
            </span>
            <span className="w-10 h-[1px] bg-[#f2521c]" />
          </div>
        </div>

        {/* Imagem com Botão de Ação Laranja na Borda */}
        <div className="relative mt-8 lg:mt-12 lg:pl-[7vw]">
          <div className="overflow-hidden relative h-[320px] sm:h-[420px] lg:h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="Obra de Alta Qualidade"
              fill
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover"
            />
          </div>

          <Link
            href="#projetos"
            aria-label="Ver mais projetos"
            className="absolute -right-4 lg:-right-24 top-0 bottom-0 w-16 sm:w-20 lg:w-28 bg-[#f2521c] hover:bg-[#d8420f] transition-colors flex items-center justify-center text-white cursor-pointer shadow-lg"
          >
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </section>
  )
}
