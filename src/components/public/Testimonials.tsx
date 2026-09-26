'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  project: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dra. Camila Rodrigues',
    role: 'Proprietária Residencial',
    company: 'Residencial Alphaville',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote:
      'A qualidade de acabamento e a seriedade técnica da equipe superaram todas as nossas expectativas. Cada detalhe arquitetônico foi respeitado com rigor e extremo cuidado até a entrega das chaves.',
    project: 'Residência Unifamiliar de Alto Padrão — 480 m²',
  },
  {
    id: 2,
    name: 'Eng. Roberto Mendes',
    role: 'Gerente de Infraestrutura',
    company: 'Setor de Mineração',
    avatar: '/midia/projetos/depoimento.webp',
    quote:
      'A conformidade de segurança e a gestão de canteiro da Bel Lar são exemplares. Ter um único responsável técnico acompanhando todas as frentes facilitou muito as vistorias e medições de campo.',
    project: 'Complexo Administrativo e Operacional — Pará',
  },
]

const PARTNERS = [
  { name: 'VALE S.A.' },
  { name: 'CARAJÁS ENG' },
  { name: 'GRUPO PARÁ' },
  { name: 'GEOBRÁS' },
  { name: 'MINERAÇÃO PA' },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play suave pausado quando o usuário passa o mouse
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [isHovered])

  const activeTestimonial = TESTIMONIALS[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de Clientes"
      className="relative bg-[#0b1e3e] overflow-hidden text-white transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Imagem de Fundo (Blueprint Blueprint Texture) com Overlay Escuro */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('/midia/projetos/bg-3.webp')" }}
      />

      {/* Camada escura de overlay (#0b1e3e/90 com degradê elegante de profundidade) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1e3e]/95 via-[#0b1e3e]/90 to-[#071327]/98 pointer-events-none" />

      {/* Glow radial azul de fundo para iluminar a composição e realçar o 3D */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] bg-[radial-gradient(circle,rgba(57,167,255,0.18)_0%,rgba(13,92,171,0.08)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

      {/* Container Principal */}
      <div className="relative max-w-[1680px] mx-auto px-5 sm:px-8 md:px-12 xl:px-20 pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LADO ESQUERDO: Textos, Títulos e Depoimento (7 colunas)  */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 z-10 flex flex-col justify-center">
            
            {/* Título Secundário com traço lateral laranja */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="w-8 sm:w-10 h-[2px] bg-[#f2521c] inline-block" />
              <span className="text-[#f2521c] text-xs sm:text-sm font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase font-['Archivo',sans-serif]">
                Depoimentos
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight font-['Archivo',sans-serif] mb-6 sm:mb-10 max-w-xl">
              O Que Falam Sobre A Empresa?
            </h2>

            {/* Card do Depoimento com Transição */}
            <div className="relative">
              {/* Aspas decorativas em azul vibrante */}
              <div className="flex items-center gap-3 mb-4 select-none">
                <Quote
                  className="w-10 h-10 sm:w-12 sm:h-12 text-[#39a7ff] opacity-90 rotate-180 fill-[#39a7ff]/10"
                  strokeWidth={2.2}
                />
              </div>

              {/* Texto da citação */}
              <blockquote className="min-h-[110px] sm:min-h-[96px] transition-opacity duration-300">
                <p className="text-white/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-6 max-w-2xl">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Informações do Cliente & Avatar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  {/* Foto redonda com borda de destaque */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#f2521c]/70 ring-2 ring-white/10 shadow-lg">
                    <Image
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="text-white text-lg sm:text-xl font-bold font-['Archivo',sans-serif] tracking-tight">
                      {activeTestimonial.name}
                    </div>
                    <div className="text-[#f2521c] text-xs sm:text-sm font-semibold tracking-wider uppercase mt-0.5">
                      {activeTestimonial.role} &bull; <span className="text-white/70">{activeTestimonial.company}</span>
                    </div>
                  </div>
                </div>

                {/* Controles de Navegação (Setas) */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Depoimento anterior"
                    className="w-9 h-9 rounded-full border border-white/20 hover:border-[#f2521c] hover:bg-[#f2521c] flex items-center justify-center text-white transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Próximo depoimento"
                    className="w-9 h-9 rounded-full border border-white/20 hover:border-[#f2521c] hover:bg-[#f2521c] flex items-center justify-center text-white transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Indicadores de Paginação (Dots Interativos) */}
              <div className="flex items-center gap-2.5 mt-6">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-[#f2521c]'
                        : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* LADO DIREITO: Imagem 3D do Prédio Flutuante (5 colunas)   */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0">
            
            {/* Prédio com animação de flutuação e efeito de profundidade 3D */}
            <div
              className="relative w-full max-w-[290px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] aspect-[4/3] flex items-center justify-center animate-floating"
              style={{
                animation: 'floating 5s ease-in-out infinite',
              }}
            >
              {/* Imagem do Prédio 3D (building2.webp) */}
              <div className="relative w-full h-full filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] hover:scale-[1.02] transition-transform duration-500 ease-out">
                <Image
                  src="/midia/projetos/building2.webp"
                  alt="Edifício Residencial e Comercial Bel Lar em Efeito 3D Flutuante"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 540px"
                  className="object-contain object-center"
                />
              </div>

              {/* Sombra de projeção no chão para reforçar o efeito de suspensão no ar */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 rounded-full blur-xl pointer-events-none scale-y-50" />
            </div>

            {/* Badge sutil com estética de engenharia */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[11px] font-mono text-white/70 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#39a7ff] animate-pulse" />
              Engenharia &amp; Arquitetura de Alta Precisão
            </div>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* LINHA DE PARCEIROS (Logos / Marcas Corporativas)         */}
      {/* ======================================================== */}
      <div className="relative border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-black/15 backdrop-blur-sm">
        {PARTNERS.map((partner, index) => (
          <div
            key={partner.name}
            className={`py-8 sm:py-10 px-4 flex items-center justify-center border-r border-white/10 opacity-70 hover:opacity-100 hover:bg-white/[0.03] transition-all group ${
              index === PARTNERS.length - 1 ? 'col-span-2 sm:col-span-1 border-r-0' : ''
            }`}
          >
            <span className="text-white text-sm sm:text-base lg:text-lg font-extrabold tracking-widest uppercase font-['Archivo',sans-serif] group-hover:text-[#f2521c] transition-colors">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
