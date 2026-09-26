'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsent() {
  const [show, setShow] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShow(true)
      // Pequeno delay para garantir que o componente montou antes de aplicar a classe de transição
      setTimeout(() => setIsVisible(true), 50)
    }
  }, [])

  if (!show) return null

  const handleAcceptAll = () => {
    setIsVisible(false)
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'accepted')
      setShow(false)
    }, 500) // Aguarda a animação de saída
  }

  const handleEssentialOnly = () => {
    setIsVisible(false)
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'essential_only')
      setShow(false)
    }, 500) // Aguarda a animação de saída
  }

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-[100] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] border-t border-gray-100 transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-6 md:py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-[#0b1e3e] text-sm md:text-base leading-relaxed">
            Utilizamos cookies para melhorar a sua experiência em nosso site, personalizar conteúdo e analisar o nosso tráfego. Ao continuar navegando, você concorda com a nossa{' '}
            <Link href="/politica-de-privacidade" className="text-[#f2521c] hover:underline font-semibold transition-all">
              Política de Privacidade
            </Link>{' '}
            e{' '}
            <Link href="/politica-de-cookies" className="text-[#f2521c] hover:underline font-semibold transition-all">
              Política de Cookies
            </Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
          <button
            onClick={handleEssentialOnly}
            className="px-6 py-3 text-sm font-bold text-[#0b1e3e] bg-transparent border-2 border-[#0b1e3e] hover:bg-[#0b1e3e] hover:text-white transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Apenas Essenciais
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-3 text-sm font-bold text-white bg-[#f2521c] border-2 border-[#f2521c] hover:bg-[#d8420f] hover:border-[#d8420f] transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  )
}
