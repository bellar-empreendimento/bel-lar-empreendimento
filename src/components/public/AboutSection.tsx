import Image from 'next/image'
import { Check } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 px-6 md:px-12 xl:px-20 max-w-[1680px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Imagens Verticais Escalonadas */}
        <div className="flex gap-4 sm:gap-6 items-end justify-center">
          <div className="relative w-[49%] h-[420px] sm:h-[500px] lg:h-[560px] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80"
              alt="Estrutura de Obra"
              fill
              sizes="(max-width: 1024px) 50vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="relative w-[47%] h-[340px] sm:h-[420px] lg:h-[470px] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="Engenheiro no Canteiro"
              fill
              sizes="(max-width: 1024px) 50vw, 400px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Conteúdo Institucional */}
        <div>
          <div className="flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[2px] bg-[#f2521c]" />
            <span className="text-[#f2521c] text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              Bem-vindo à Bel Lar Empreendimento
            </span>
          </div>

          <h2 className="text-[#0b1e3e] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight font-['Archivo',sans-serif] mb-5 max-w-[16ch]">
            Somos A Melhor Empresa Em Construção
          </h2>

          <p className="text-[#0b1e3e] text-lg sm:text-[19px] font-bold mb-4 leading-snug">
            Obras entregues com prazo cumprido, técnica apurada e acabamento impecável.
          </p>

          <p className="text-[#4b5563] text-base sm:text-[16.5px] leading-relaxed mb-8 max-w-[660px]">
            Atuamos em todas as etapas do empreendimento: estudo de viabilidade, projeto executivo, gestão de canteiro e entrega final. Cada obra é acompanhada por engenheiros responsáveis e relatórios semanais de medição, para que o cliente saiba exatamente onde cada real foi aplicado.
          </p>

          {/* Grid de 4 Benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 max-w-[660px]">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full border border-[#f2521c] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="text-[#0b1e3e] text-[17px] font-semibold">100% de Satisfação</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full border border-[#f2521c] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="text-[#0b1e3e] text-[17px] font-semibold">Flexível e Econômico</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full border border-[#f2521c] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="text-[#0b1e3e] text-[17px] font-semibold">Programas Anuais</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full border border-[#f2521c] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="text-[#0b1e3e] text-[17px] font-semibold">Equipe Treinada</span>
            </div>
          </div>

          {/* Rodapé da Seção com Contato e Assinatura */}
          <div className="flex items-center gap-6 flex-wrap border-t border-[#e8eaf0] pt-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                  alt="Diretor Técnico"
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[#f2521c] text-[11px] font-bold tracking-wider uppercase block">
                  Ligue para nós
                </span>
                <span className="text-[#0b1e3e] text-[17px] font-extrabold font-['Archivo',sans-serif] block mt-0.5">
                  (94) 99144-1811
                </span>
              </div>
            </div>

            <div className="ml-auto text-[#5a6274]/80 text-4xl sm:text-5xl -rotate-3 font-serif pr-2 italic select-none">
              Ricardo Almeida
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
