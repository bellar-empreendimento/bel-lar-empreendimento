'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface ServiceItem {
  id: number
  number: string
  title: string
  description: string
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    number: '01.',
    title: 'Consultoria',
    description: 'Do estudo preliminar ao habite-se, mantemos um único responsável técnico por contrato. Isso reduz retrabalho, mantém o cronograma e dá previsibilidade de custo em obras de qualquer porte.',
  },
  {
    id: 2,
    number: '02.',
    title: 'Projeto Residencial',
    description: 'Desenvolvimento arquitetônico completo, compatibilização hidrossanitária, elétrica e estrutural, com modelagem 3D detalhada e acompanhamento minucioso de cada fase da obra.',
  },
  {
    id: 3,
    number: '03.',
    title: 'Arquitetura',
    description: 'Criação de conceitos estéticos marcantes que aliam sustentabilidade, eficiência energética e máximo aproveitamento dos espaços para edificações comerciais e corporativas.',
  },
  {
    id: 4,
    number: '04.',
    title: 'Planejamento de Obra',
    description: 'Gestão físico-financeira com curva S, controle rigoroso de suprimentos, medições semanais e conformidade total com as normas regulamentadoras e de segurança.',
  },
]

export function ServicesSection() {
  const [activeId, setActiveId] = useState<number>(1)

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? 0 : id))
  }

  return (
    <section id="servicos" className="py-14 sm:py-24 lg:py-32 px-5 sm:px-8 md:px-12 xl:px-20 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-24 items-start">
        {/* Coluna Esquerda */}
        <div>
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-normal leading-relaxed text-[#5a6274] max-w-xl">
            Oferecemos todos os tipos de serviços nas áreas de{' '}
            <strong className="text-[#0b1e3e] font-bold">arquitetura, construção</strong> e{' '}
            <strong className="text-[#0b1e3e] font-bold">design de interiores</strong>
          </h2>

          <div className="flex items-center gap-4 mt-9 cursor-pointer group select-none">
            <div className="w-14 h-14 rounded-full bg-[#f2521c] text-white flex items-center justify-center flex-shrink-0 group-hover:rotate-90 transition-transform duration-300">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-[#0b1e3e] text-xs sm:text-sm font-extrabold tracking-widest uppercase leading-tight max-w-[110px]">
              Descubra mais
            </span>
          </div>
        </div>

        {/* Coluna Direita (Accordion) */}
        <div className="flex flex-col">
          {servicesData.map((item) => {
            const isOpen = activeId === item.id
            return (
              <div key={item.id} className="border-b border-[#e8eaf0] last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center gap-5 py-5 sm:py-6 px-2 hover:pl-4 transition-all duration-300 text-left cursor-pointer group"
                >
                  <span className="text-[#8a93a6] text-xs sm:text-sm font-bold tracking-wider">
                    {item.number}
                  </span>
                  <span className="text-[#0b1e3e] group-hover:text-[#f2521c] text-xl sm:text-2xl font-bold font-['Archivo',sans-serif] transition-colors">
                    {item.title}
                  </span>
                  <span className="ml-auto text-[#f2521c] font-bold">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-2 pb-6 pt-1 text-[#8a93a6] text-base leading-relaxed max-w-[760px] animate-fadeIn">
                    {item.description}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
