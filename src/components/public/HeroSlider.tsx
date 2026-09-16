'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Square } from 'lucide-react'

interface SlideContent {
  badge: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  artImage: string
  artAlt: string
  fit: 'contain' | 'cover'
  position: string
  maxWidth: string
  height: string
}

const slides: SlideContent[] = [
  {
    badge: 'Serviços de construção confiáveis',
    title: 'Construindo Um Futuro Civil',
    description: 'Conduzimos cada obra com os mais altos padrões de honestidade e transparência. Confie na Bel Lar para construir.',
    ctaText: 'Ver todos os projetos',
    ctaLink: '#projetos',
    artImage: '/midia/hero/image-4.webp',
    artAlt: 'Engenheiro Bel Lar segurando projetos',
    fit: 'contain',
    position: 'object-bottom',
    maxWidth: 'max-w-[580px]',
    height: 'h-[94%]',
  },
  {
    badge: 'Engenharia e execução',
    title: 'Obras Que Duram Gerações',
    description: 'Do estudo de viabilidade ao habite-se, com um único responsável técnico acompanhando o canteiro do início ao fim.',
    ctaText: 'Conheça a empresa',
    ctaLink: '#sobre',
    artImage: '/midia/hero/image-7.webp',
    artAlt: 'Fachada Residencial Bel Lar',
    fit: 'contain',
    position: 'object-bottom-right',
    maxWidth: 'max-w-[720px]',
    height: 'h-[90%]',
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
    <section className="relative flex h-screen min-h-[640px] overflow-hidden select-none">
      {/* 1. Fundo Dividido: Lado Esquerdo com a imagem oficial banner-3.webp */}
      <div className="relative w-[42%] min-w-[180px] bg-[#0d5cab] overflow-hidden">
        <Image
          src="/midia/hero/banner-3.webp"
          alt="Edifício Arquitetura Bel Lar"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover object-[center_35%]"
        />
        {/* Gradiente suave de ambientação */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d5cab]/20 via-transparent to-[#0b1e3e]/70 pointer-events-none" />
      </div>

      {/* 2. Fundo Dividido: Lado Direito Laranja (#f2521c) com os recortes oficiais */}
      <div className="relative flex-1 bg-[#f2521c] overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === current
          return (
            <div
              key={slide.title}
              className={`absolute right-2 sm:right-6 lg:right-10 bottom-0 w-full ${slide.maxWidth} ${slide.height} flex items-end justify-center transition-all duration-1000 ease-out ${
                isActive 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12 pointer-events-none'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.artImage}
                  alt={slide.artAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className={`${slide.fit === 'contain' ? 'object-contain' : 'object-cover'} ${slide.position} drop-shadow-[-15px_15px_30px_rgba(0,0,0,0.3)]`}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. Conteúdo Flutuante Sobreposto (Centralizado no Encontro das Cores) */}
      <div className="absolute inset-0 flex items-center px-8 md:px-14 pt-28 pb-16 pointer-events-none">
        <div className="relative w-full max-w-[680px] md:ml-[7vw] pointer-events-auto">
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
                {/* Badge Escuro */}
                <div className="inline-flex items-center gap-2 bg-[#0b1e3e] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full mb-6 shadow-md">
                  {slide.badge}
                </div>

                {/* H1 Principal */}
                <h1 className="text-white text-4xl sm:text-5xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tight max-w-[12ch] mb-6 font-['Archivo',sans-serif]">
                  {slide.title}
                </h1>

                {/* Descrição */}
                <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-[500px] mb-8 font-['Barlow',sans-serif]">
                  {slide.description}
                </p>

                {/* Botão de Ação CTA */}
                <Link
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-3.5 bg-[#f2521c] hover:bg-[#0b1e3e] text-white text-sm font-extrabold tracking-widest uppercase px-8 py-5 shadow-[0_16px_40px_rgba(11,30,62,0.22)] transition-all hover:-translate-y-1"
                >
                  {slide.ctaText}
                  <Square className="w-3.5 h-3.5 fill-current" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. Controles do Slider (Bottom Right) */}
      <div className="absolute right-6 sm:right-10 bottom-10 flex flex-col z-20">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide Anterior"
          className="w-14 h-14 border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-[#f2521c] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próximo Slide"
          className="w-14 h-14 border border-white/60 border-t-0 flex items-center justify-center text-white hover:bg-white hover:text-[#f2521c] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
