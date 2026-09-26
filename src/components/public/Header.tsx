'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Phone, ChevronDown, X, ArrowRight, Building2, Wrench, FileText, Menu } from 'lucide-react'

interface SearchResult {
  title: string
  category: 'Projetos' | 'Serviços' | 'Institucional'
  href: string
  desc: string
}

const SEARCHABLE_ITEMS: SearchResult[] = [
  { title: 'Nossos Projetos', category: 'Projetos', href: '#projetos', desc: 'Galpões comerciais, residenciais e industriais' },
  { title: 'Consultoria de Engenharia', category: 'Serviços', href: '#servicos', desc: 'Estudos de viabilidade técnica e financeira' },
  { title: 'Projetos Residenciais', category: 'Serviços', href: '#servicos', desc: 'Casas de alto padrão e condomínios fechados' },
  { title: 'Arquitetura e BIM', category: 'Serviços', href: '#servicos', desc: 'Modelagem 3D e compatibilização milimétrica' },
  { title: 'Planejamento de Obra', category: 'Serviços', href: '#servicos', desc: 'Controle de suprimentos, prazos e curva S' },
  { title: 'Sobre a Bel Lar', category: 'Institucional', href: '#sobre', desc: 'Mais de 30 anos de excelência no Pará' },
  { title: 'Depoimentos de Clientes', category: 'Institucional', href: '#depoimentos', desc: 'O que dizem os parceiros e clientes corporativos' },
  { title: 'Obras em Andamento', category: 'Projetos', href: '#obras-andamento', desc: 'Acompanhe as construções ativas no canteiro' },
  { title: 'Blog e Notícias', category: 'Institucional', href: '#blog', desc: 'Artigos técnicos, inovações e tendências da construção' },
  { title: 'Solicitar Orçamento', category: 'Institucional', href: '#contato', desc: 'Fale com nossa equipe técnica de engenheiros' },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Travar o scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Foco automático ao abrir a barra de pesquisa
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setSearchQuery('')
    }
  }, [isSearchOpen])

  // Fechar no Escape e abrir com Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isSearchOpen) setIsSearchOpen(false)
        if (isMobileMenuOpen) setIsMobileMenuOpen(false)
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen, isMobileMenuOpen])

  const filteredResults = searchQuery.trim() === ''
    ? SEARCHABLE_ITEMS.slice(0, 5)
    : SEARCHABLE_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )

  return (
    <>
      <header className="absolute top-0 left-0 md:left-[78px] right-0 z-40 flex items-stretch md:items-start max-w-full">
        {/* Bloco do Logotipo Bel Lar */}
        <Link
          href="/"
          className="flex items-center bg-[#0b1e3e]/95 backdrop-blur-md px-3 sm:px-5 md:px-8 h-18 sm:h-22 md:h-28 flex-shrink-0 ml-0 sm:ml-4 md:ml-8 border-b-2 border-[#f2521c] transition-all hover:bg-[#0b1e3e] group shadow-md"
        >
          <div className="relative h-9 sm:h-11 md:h-14 w-auto min-w-[105px] sm:min-w-[130px] flex items-center">
            <Image
              src="/midia/sobre/logowebsite.webp"
              alt="Bel Lar Empreendimento"
              width={200}
              height={60}
              priority
              className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Barra de Navegação Superior */}
        <div className="flex-1 bg-white h-18 sm:h-22 md:min-h-[88px] shadow-[0_14px_44px_rgba(11,30,62,0.18)] flex items-center justify-end lg:justify-between px-3 sm:px-6 md:px-10">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
            <Link href="/" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
              Início <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            <Link href="/#sobre" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
              Sobre <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            <Link href="/#servicos" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
              Serviços <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            <Link href="/#projetos" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
              Projetos <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            <Link href="/blog" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
              Blog <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
            <Link href="/#contato" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
              Contato <ChevronDown className="w-3 h-3 opacity-60" />
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Botão de Busca Rápida */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Abrir barra de pesquisa"
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-[#dfe3ec] flex items-center justify-center text-[#0b1e3e] hover:bg-[#f2521c] hover:border-[#f2521c] hover:text-white transition-all cursor-pointer shadow-sm group"
              title="Pesquisar (Ctrl + K)"
            >
              <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
            </button>

            {/* Botão Menu Hambúrguer (Visível em Mobile e Tablet < lg) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu de navegação"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b1e3e] text-white flex items-center justify-center hover:bg-[#f2521c] transition-colors cursor-pointer shadow-sm"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Chamada Telefônica (Desktop e Tablet) */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0 ml-2">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#fdece7] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-left hidden md:block">
                <span className="text-[#8a93a6] text-[10px] font-bold tracking-wider uppercase block leading-tight">
                  FALE COM NOSSA EQUIPE
                </span>
                <a href="tel:94991441811" className="text-[#0b1e3e] text-sm md:text-base font-extrabold leading-tight block font-['Archivo',sans-serif] hover:text-[#f2521c] transition-colors">
                  (94) 99144-1811
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* MENU MOBILE DESLIZANTE (OFF-CANVAS)                       */}
      {/* ========================================================= */}
      <div
        className={`fixed inset-0 bg-black/65 backdrop-blur-xs z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-[55] lg:hidden shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none invisible'
        }`}
      >
        <div className="p-6 overflow-y-auto">
          {/* Cabeçalho do Menu Mobile */}
          <div className="flex items-center justify-between pb-5 border-b border-gray-100">
            <Image
              src="/midia/sobre/logowebsite.webp"
              alt="Bel Lar Empreendimento"
              width={130}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
              className="w-9 h-9 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-[#f2521c] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links de Navegação Mobile */}
          <nav className="mt-6 flex flex-col gap-2">
            {[
              { label: 'Início', href: '/' },
              { label: 'Sobre Nós', href: '/#sobre' },
              { label: 'Nossos Serviços', href: '/#servicos' },
              { label: 'Projetos', href: '/#projetos' },
              { label: 'Obras em Andamento', href: '/#obras-andamento' },
              { label: 'Depoimentos', href: '/#depoimentos' },
              { label: 'Blog & Notícias', href: '/blog' },
              { label: 'Contato', href: '/#contato' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-bold text-[#0b1e3e] hover:text-[#f2521c] hover:bg-[#fdece7]/40 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Rodapé do Menu Mobile com Contato Direto */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-3">
          <a
            href="tel:94991441811"
            className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 text-[#0b1e3e]"
          >
            <div className="w-9 h-9 rounded-full bg-[#fdece7] text-[#f2521c] flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase block">Atendimento</span>
              <span className="text-sm font-extrabold text-[#0b1e3e] font-['Archivo',sans-serif]">(94) 99144-1811</span>
            </div>
          </a>

          <Link
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 bg-[#f2521c] hover:bg-[#0b1e3e] text-white text-xs font-bold tracking-widest uppercase rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MODAL / BARRA DE PESQUISA INTERATIVA                       */}
      {/* ========================================================= */}
      {isSearchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 md:pt-28 px-4 bg-[#0b1e3e]/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Campo de Input com Ícones */}
            <div className="flex items-center gap-3 px-6 py-4.5 border-b border-gray-100 bg-white">
              <Search className="w-5 h-5 text-[#f2521c] flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="O que você está procurando? (Ex: galpão, residencial, orçamento...)"
                className="w-full text-base sm:text-lg text-[#0b1e3e] placeholder-gray-400 outline-none bg-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpar texto"
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                aria-label="Fechar pesquisa"
                className="ml-2 px-2.5 py-1 text-xs font-semibold text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Lista de Resultados e Sugestões */}
            <div className="max-h-[380px] overflow-y-auto p-4 divide-y divide-gray-50">
              <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                {searchQuery.trim() === '' ? 'Sugestões Rápidas' : `Resultados (${filteredResults.length})`}
              </div>

              {filteredResults.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                  <p className="font-semibold text-[#0b1e3e]">Nenhum resultado encontrado</p>
                  <p className="text-sm mt-1">Tente pesquisar por termos como &quot;projetos&quot;, &quot;reforma&quot; ou &quot;contato&quot;.</p>
                </div>
              ) : (
                filteredResults.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#fdece7]/50 group transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#f2521c] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                        {item.category === 'Projetos' && <Building2 className="w-4 h-4" />}
                        {item.category === 'Serviços' && <Wrench className="w-4 h-4" />}
                        {item.category === 'Institucional' && <FileText className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-[#0b1e3e] group-hover:text-[#f2521c] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 line-clamp-1">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#f2521c] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))
              )}
            </div>

            {/* Rodapé do Modal com atalhos */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Pressione <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono shadow-xs">ESC</kbd> para fechar</span>
              <span className="font-medium text-[#f2521c]">Bel Lar Empreendimento</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
