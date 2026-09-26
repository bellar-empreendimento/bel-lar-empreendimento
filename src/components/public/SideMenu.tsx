'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  MoreHorizontal, 
  FolderKanban, 
  FileSpreadsheet, 
  Newspaper, 
  X, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send 
} from 'lucide-react'

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Travar o scroll do body quando o menu lateral estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Fechar com a tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubscribed(true)
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 4000)
  }

  return (
    <>
      {/* ========================================================= */}
      {/* PARTE 1: Barra Lateral Esquerda Fixa (Sidebar Original)   */}
      {/* ========================================================= */}
      <aside className="fixed left-0 top-0 bottom-0 w-[78px] bg-[#0b1e3e] z-50 hidden md:flex flex-col items-center py-6 gap-8 select-none border-r border-white/10 shadow-lg">
        {/* Botão "Mais" que abre o Off-Canvas */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Fechar menu lateral' : 'Abrir menu lateral'}
          className={`w-[36px] h-[36px] rounded-full border flex items-center justify-center text-white transition-all cursor-pointer ${
            isOpen 
              ? 'border-[#f2521c] bg-[#f2521c] text-white rotate-90 shadow-md' 
              : 'border-white/30 hover:border-[#f2521c] hover:text-[#f2521c] hover:bg-white/5'
          }`}
          title="Mais opções"
        >
          {isOpen ? <X className="w-4 h-4" /> : <MoreHorizontal className="w-4 h-4" />}
        </button>
        <span className="text-[10px] font-semibold tracking-wider text-white/70 uppercase -mt-5">
          Mais
        </span>

        {/* Links Rápidos Centrais com Ícones e Labels */}
        <div className="flex-1 flex flex-col items-center gap-9 pt-4">
          <Link 
            href="#projetos" 
            className="flex flex-col items-center gap-2 group text-white/80 hover:text-white transition-transform hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded border-2 border-[#f2521c] flex items-center justify-center group-hover:bg-[#f2521c]/20 transition-colors">
              <FolderKanban className="w-4 h-4 text-[#f2521c]" />
            </div>
            <span className="text-[10px] font-semibold text-center leading-tight w-14 group-hover:text-[#f2521c] transition-colors">
              Nossos Projetos
            </span>
          </Link>

          <Link 
            href="#contato" 
            className="flex flex-col items-center gap-2 group text-white/80 hover:text-white transition-transform hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded border border-white/40 flex items-center justify-center group-hover:border-[#f2521c] group-hover:bg-[#f2521c]/20 transition-colors">
              <FileSpreadsheet className="w-4 h-4 text-white/70 group-hover:text-[#f2521c] transition-colors" />
            </div>
            <span className="text-[10px] font-semibold text-center leading-tight w-14 group-hover:text-[#f2521c] transition-colors">
              Orçamento
            </span>
          </Link>

          <Link 
            href="#blog" 
            className="flex flex-col items-center gap-2 group text-white/80 hover:text-white transition-transform hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded border border-white/40 flex items-center justify-center group-hover:border-[#f2521c] group-hover:bg-[#f2521c]/20 transition-colors">
              <Newspaper className="w-4 h-4 text-white/70 group-hover:text-[#f2521c] transition-colors" />
            </div>
            <span className="text-[10px] font-semibold text-center leading-tight w-14 group-hover:text-[#f2521c] transition-colors">
              Sala de Imprensa
            </span>
          </Link>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* PARTE 2: Overlay Escuro de Fundo (Backdrop)                */}
      {/* ========================================================= */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ========================================================= */}
      {/* PARTE 3: Painel Direito Off-canvas (Gaveta Lateral)       */}
      {/* ========================================================= */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Painel institucional Bel Lar"
        className={`fixed right-0 top-0 h-full w-[420px] max-w-[90vw] bg-white z-[60] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none invisible'
        }`}
      >
        <div className="p-8 sm:p-10 flex-1">
          {/* Header do Painel com Logo e Botão Fechar */}
          <div className="flex items-center justify-between pb-8 border-b border-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)} className="inline-block">
              <Image
                src="/midia/sobre/logowebsite.webp"
                alt="Bel Lar Empreendimentos"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar painel"
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#f2521c] hover:text-white text-[#0b1e3e] flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Seção Sobre Nós */}
          <div className="mt-8">
            <h3 className="text-[#0b1e3e] text-2xl font-extrabold tracking-tight font-['Archivo',sans-serif] mb-4">
              Encontrando Os Melhores Serviços
            </h3>
            <p className="text-gray-500 text-sm sm:text-[14.5px] leading-relaxed">
              Atuamos em todas as etapas da construção com máxima transparência, rigor técnico e excelência de engenharia, transformando projetos desafiadores em obras de alta durabilidade e valorização em todo o estado do Pará.
            </p>
          </div>

          {/* Seção Contatos */}
          <div className="mt-10">
            <h4 className="text-[#0b1e3e] text-lg font-bold font-['Archivo',sans-serif] mb-5">
              Contate-nos
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#fdece7] text-[#f2521c] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Endereço</span>
                  <span className="text-sm font-medium text-[#0b1e3e]">
                    Av. Brasil 638, Centro — Canaã dos Carajás, PA
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#fdece7] text-[#f2521c] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">E-mail</span>
                  <a href="mailto:contato@bellarempreendimentos.com.br" className="text-sm font-medium text-[#0b1e3e] hover:text-[#f2521c] transition-colors">
                    contato@bellarempreendimentos.com.br
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#fdece7] text-[#f2521c] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Telefone</span>
                  <a href="tel:94991441811" className="text-sm font-bold text-[#0b1e3e] hover:text-[#f2521c] transition-colors">
                    (94) 99144-1811
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#fdece7] text-[#f2521c] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Horário de Funcionamento</span>
                  <span className="text-sm font-medium text-[#0b1e3e]">
                    Segunda a Sexta: 08:00 às 18:00
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Seção Newsletter */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h4 className="text-[#0b1e3e] text-lg font-bold font-['Archivo',sans-serif] mb-3">
              Assine nossa Newsletter
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm mb-4">
              Receba atualizações exclusivas sobre o mercado da construção civil e novos lançamentos.
            </p>

            <form onSubmit={handleSubscribe} className="flex rounded-lg overflow-hidden border border-gray-200 focus-within:border-[#f2521c] transition-colors shadow-xs">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="flex-1 px-4 py-3 text-sm text-[#0b1e3e] outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                aria-label="Inscrever-se"
                className="bg-[#f2521c] hover:bg-[#d8420f] text-white px-5 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {isSubscribed && (
              <p className="text-emerald-600 text-xs font-semibold mt-2 animate-fadeIn">
                ✓ Obrigado por se inscrever! Em breve você receberá novidades.
              </p>
            )}
          </div>
        </div>

        {/* Rodapé do Painel */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Bel Lar Empreendimentos. Construindo com confiança.
          </p>
        </div>
      </div>
    </>
  )
}

export default SideMenu
