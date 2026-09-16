import type { ReactNode } from 'react'
import Link from 'next/link'
import { 
  FolderKanban, 
  FileSpreadsheet, 
  Newspaper, 
  MoreHorizontal, 
  Phone, 
  Search, 
  ChevronDown 
} from 'lucide-react'
import { Footer } from '@/components/public/Footer'

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#4b5563] font-sans antialiased overflow-x-hidden">
      {/* 1. Sidebar Esquerda Fixa (Oculta em mobile) */}
      <aside className="fixed left-0 top-0 bottom-0 w-[78px] bg-[#0b1e3e] z-50 hidden md:flex flex-col items-center py-6 gap-8 select-none">
        {/* Top Dots */}
        <div className="w-[34px] h-[34px] rounded-full border border-white/30 flex items-center justify-center text-white text-xs hover:border-[#f2521c] hover:text-[#f2521c] transition-colors cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-semibold tracking-wider text-white/70 uppercase -mt-5">
          Mais
        </span>

        {/* Links Centrais com Ícones e Labels */}
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

      {/* 2. Área de Conteúdo (Deslocada 78px à esquerda no desktop) */}
      <div className="md:pl-[78px] w-full min-h-screen relative">
        {/* Header Superior Flutuante */}
        <header className="absolute top-0 left-0 md:left-[78px] right-0 z-40 flex items-start">
          {/* Logo Bel Lar em Bloco Escuro */}
          <div className="flex items-center gap-3.5 bg-[#0b1e3e]/85 backdrop-blur-md px-6 md:px-8 h-24 md:h-28 flex-shrink-0 ml-4 md:ml-8 border-b-2 border-[#f2521c]">
            <div className="w-8 h-8 border-[3px] border-[#f2521c] relative flex-shrink-0">
              <div className="absolute left-1.5 top-1.5 w-3 h-3 bg-[#f2521c]" />
            </div>
            <div>
              <span className="text-white text-2xl md:text-[27px] font-extrabold tracking-tight leading-none block font-['Archivo',sans-serif]">
                Bel Lar
              </span>
              <span className="text-white/60 text-[9px] md:text-[9.5px] font-bold tracking-[0.28em] uppercase mt-1 block">
                Empreendimento
              </span>
            </div>
          </div>

          {/* Barra de Navegação Branca */}
          <div className="flex-1 bg-white min-h-[72px] md:min-h-[88px] shadow-[0_14px_44px_rgba(11,30,62,0.18)] flex items-center flex-wrap gap-6 px-6 md:px-10">
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
              <Link href="#" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
                Início <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              <Link href="#sobre" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
                Sobre <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              <Link href="#servicos" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
                Serviços <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              <Link href="#projetos" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
                Projetos <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              <Link href="#blog" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
                Blog <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
              <Link href="#contato" className="text-[#0b1e3e] hover:text-[#f2521c] text-[15px] font-semibold flex items-center gap-1.5 transition-colors">
                Contato <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>
            </nav>

            {/* Botão de Busca Rápida */}
            <button 
              type="button" 
              aria-label="Pesquisar"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#dfe3ec] flex items-center justify-center text-[#0b1e3e] hover:bg-[#f2521c] hover:border-[#f2521c] hover:text-white transition-all ml-auto lg:ml-0 cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Chamada Telefônica */}
            <div className="ml-auto hidden sm:flex items-center gap-3 flex-shrink-0">
              <div className="w-11 h-11 rounded-full bg-[#fdece7] text-[#f2521c] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[#8a93a6] text-[11px] font-bold tracking-wider uppercase block leading-tight">
                  Ligue para nós
                </span>
                <span className="text-[#0b1e3e] text-base md:text-lg font-extrabold leading-tight block font-['Archivo',sans-serif]">
                  (94) 99144-1811
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo Dinâmico das Páginas */}
        <main className="w-full">
          {children}
        </main>

        {/* Rodapé Global */}
        <Footer />
      </div>
    </div>
  )
}
