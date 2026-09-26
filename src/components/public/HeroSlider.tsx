'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

interface SlideContent {
  badge: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  artImage: string
  artAlt: string
  type: 'person' | 'building'
}

const slides: SlideContent[] = [
  {
    badge: 'EXPERIÊNCIA • ENGENHARIA • CONFIANÇA',
    title: 'Construindo Hoje.\nDeixando Legados.',
    description: 'Há mais de 20 anos, transformamos projetos em obras sólidas, conduzidas com experiência, responsabilidade e excelência.',
    ctaText: 'CONHEÇA NOSSOS PROJETOS',
    ctaLink: '#projetos',
    artImage: '/midia/hero/image-4.webp',
    artAlt: 'Engenheiro Bel Lar com Projetos',
    type: 'person',
  },
  {
    badge: 'Engenharia e execução',
    title: 'Obras Que Duram Gerações',
    description: 'Do estudo de viabilidade ao habite-se, com um único responsável técnico acompanhando o canteiro do início ao fim.',
    ctaText: 'Conheça a empresa',
    ctaLink: '#sobre',
    artImage: '/midia/hero/image-7.webp',
    artAlt: 'Fachada Residencial Bel Lar',
    type: 'building',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative flex flex-col lg:flex-row min-h-[600px] h-[100dvh] max-h-[1080px] overflow-hidden select-none bg-[#0b1e3e] lg:bg-[#f2521c]">
      {/* 1. Fundo: No Mobile/Tablet imagem Full com Overlay; No Desktop Lado Esquerdo 42% */}
      <div className="absolute inset-0 lg:relative lg:inset-auto w-full lg:w-[42%] lg:min-w-[200px] h-full overflow-hidden bg-[#0d5cab] flex-shrink-0 z-0">
        <Image
          src="/midia/hero/banner-3.webp"
          alt="Fachada Arquitetônica Bel Lar"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center"
        />
        {/* Overlay escuro elegante no mobile/tablet para contraste e legibilidade perfeita do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3e] via-[#0b1e3e]/85 to-[#0b1e3e]/70 lg:hidden z-1" />
      </div>

      {/* 2. Fundo Desktop Laranja (#f2521c) com as ilustrações/artes do slide */}
      <div className="relative lg:flex-1 w-full h-full overflow-hidden lg:bg-[#f2521c] z-10 pointer-events-none">
        {slides.map((slide, index) => {
          const isActive = index === current

          if (slide.type === 'person') {
            return (
              /* Slide 1: Homem com projetos - Oculto em mobile e tablet, visível APENAS no desktop (lg:) */
              <div
                key={slide.title}
                className={`hidden lg:flex absolute bottom-0 right-[8%] lg:right-[16%] xl:right-[18%] w-[530px] xl:w-[580px] h-[88%] items-end justify-center transition-all duration-1000 ease-out z-10 ${
                  isActive 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.artImage}
                    alt={slide.artAlt}
                    fill
                    priority
                    sizes="580px"
                    className="object-contain object-bottom drop-shadow-[-12px_12px_28px_rgba(0,0,0,0.22)]"
                  />
                </div>
              </div>
            )
          }

          /* Slide 2: Prédio PNG - Emergindo de baixo para cima (translate-y-24 para translate-y-0), visível no mobile, tablet e desktop */
          return (
            <div
              key={slide.title}
              className={`flex absolute bottom-0 right-[-8%] sm:right-[-6%] md:right-[-4%] lg:right-[-10%] w-[310px] sm:w-[440px] md:w-[560px] lg:w-[820px] xl:w-[940px] h-[55%] sm:h-[68%] md:h-[80%] lg:h-[94%] items-end justify-end transition-all duration-1000 ease-out z-10 ${
                isActive 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-24 pointer-events-none'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.artImage}
                  alt={slide.artAlt}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 70vw, 940px"
                  className="object-contain object-bottom-right drop-shadow-[-15px_15px_30px_rgba(0,0,0,0.35)]"
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. Container de Texto Global */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center z-20 pt-20 md:pt-0">
        <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-10 relative">
          <div className="relative w-full max-w-[620px] sm:max-w-[700px] lg:max-w-[820px] left-0 md:left-[6%] lg:left-[12%] xl:left-[16%] pointer-events-auto">
            {slides.map((slide, index) => {
              const isActive = index === current
              return (
                <div
                  key={slide.title}
                  className={`transition-all duration-700 ease-out ${
                    isActive 
                      ? 'opacity-100 translate-y-0 relative' 
                      : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {/* Badge Escuro com Borda Arredondada */}
                  <div className="inline-flex items-center gap-2 bg-[#0b1e3e] text-white text-[10px] sm:text-xs font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-3.5 sm:mb-5 shadow-lg border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#f2521c] inline-block animate-pulse" />
                    <span>{slide.badge}</span>
                  </div>

                  {/* Título Principal */}
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[72px] font-extrabold leading-[1.08] sm:leading-[1.04] tracking-tight mb-3.5 sm:mb-5 font-['Archivo',sans-serif] drop-shadow-md whitespace-pre-line">
                    {slide.title}
                  </h1>

                  {/* Descrição */}
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[540px] mb-4 sm:mb-5 font-['Barlow',sans-serif] drop-shadow-sm">
                    {slide.description}
                  </p>

                  {/* Linha de Progresso / Acento Visual */}
                  <div className="w-28 sm:w-36 h-[3px] bg-[#0b1e3e]/40 relative mb-6 sm:mb-8 overflow-hidden rounded-full">
                    <div className="w-12 sm:w-14 h-full bg-[#f2521c] md:bg-white absolute left-0 top-0 rounded-full" />
                  </div>

                  {/* Botão de Ação CTA */}
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center gap-3 bg-[#f2521c] hover:bg-[#0b1e3e] text-white text-xs sm:text-sm font-extrabold tracking-[0.14em] uppercase px-6 sm:px-8 py-3.5 sm:py-5 shadow-[0_16px_40px_rgba(11,30,62,0.3)] transition-all hover:-translate-y-1 active:scale-95 rounded-none"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 4. Controles do Slider */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-row z-30 shadow-lg bg-black/20 backdrop-blur-xs rounded-full overflow-hidden">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide Anterior"
          className="w-12 h-12 sm:w-14 sm:h-14 border border-white/40 border-r-0 rounded-l-full flex items-center justify-center text-white hover:bg-white hover:text-[#f2521c] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próximo Slide"
          className="w-12 h-12 sm:w-14 sm:h-14 border border-white/40 rounded-r-full flex items-center justify-center text-white hover:bg-white hover:text-[#f2521c] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  )
}
