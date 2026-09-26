import Image from 'next/image'
import { Check } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre" className="py-14 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-12 xl:px-20 max-w-[1680px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Imagens Verticais Escalonadas */}
        <div className="flex gap-3 sm:gap-6 items-end justify-center w-full">
          <div className="relative w-1/2 h-[260px] sm:h-[420px] lg:h-[560px] shadow-xl rounded-xs overflow-hidden">
            <Image
              src="/midia/obras/image-5.webp"
              alt="Estrutura de Obra Bel Lar"
              fill
              sizes="(max-width: 768px) 50vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="relative w-1/2 h-[210px] sm:h-[340px] lg:h-[470px] shadow-xl rounded-xs overflow-hidden">
            <Image
              src="/midia/obras/image-4 (1).webp"
              alt="Engenheiro no Canteiro de Obras Bel Lar"
              fill
              sizes="(max-width: 768px) 50vw, 400px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Conteúdo Institucional */}
        <div className="w-full">
          <div className="flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[2px] bg-[#f2521c]" />
            <span className="text-[#f2521c] text-xs sm:text-[13px] font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase">
              Bem-vindo à Bel Lar Empreendimento
            </span>
          </div>

          <h2 className="text-[#0b1e3e] text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight font-['Archivo',sans-serif] mb-4 sm:mb-5 max-w-xl">
            Somos A Melhor Empresa Em Construção
          </h2>

          <p className="text-[#0b1e3e] text-base sm:text-[19px] font-bold mb-3 sm:mb-4 leading-snug">
            Obras entregues com prazo cumprido, técnica apurada e acabamento impecável.
          </p>

          <p className="text-[#4b5563] text-sm sm:text-[16.5px] leading-relaxed mb-6 sm:mb-8 max-w-[660px]">
            Atuamos em todas as etapas do empreendimento: estudo de viabilidade, projeto executivo, gestão de canteiro e entrega final. Cada obra é acompanhada por engenheiros responsáveis e relatórios semanais de medição, para que o cliente saiba exatamente onde cada real foi aplicado.
          </p>

          {/* Grid de 4 Benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6 mb-8 sm:mb-10 max-w-[660px]">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full border border-[#f2521c] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="text-[#0b1e3e] text-base sm:text-[17px] font-semibold">100% de Satisfação</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full border border-[#f2521c] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="text-[#0b1e3e] text-base sm:text-[17px] font-semibold">Flexível e Econômico</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full border border-[#f2521c] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="text-[#0b1e3e] text-base sm:text-[17px] font-semibold">Programas Anuais</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full border border-[#f2521c] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="text-[#0b1e3e] text-base sm:text-[17px] font-semibold">Equipe Treinada</span>
            </div>
          </div>

          {/* Rodapé da Seção com Contato e Assinatura */}
          <div className="flex items-center justify-between gap-4 flex-wrap border-t border-[#e8eaf0] pt-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
                <Image
                  src="/midia/obras/Geraldo.webp"
                  alt="Diretor Geraldo"
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[#f2521c] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase block">
                  Ligue para nós
                </span>
                <a href="tel:94991441811" className="text-[#0b1e3e] text-base sm:text-[17px] font-extrabold font-['Archivo',sans-serif] block mt-0.5 hover:text-[#f2521c] transition-colors">
                  (94) 99144-1811
                </a>
              </div>
            </div>

            <div className="pr-2">
              <Image
                src="/midia/obras/Assinatura.png"
                alt="Assinatura"
                width={180}
                height={50}
                className="h-9 sm:h-12 w-auto object-contain opacity-85"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
