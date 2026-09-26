'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0b1e3e] text-white/70 overflow-hidden">
      {/* Barra de Contato Superior */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10">
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#f2521c]/15 text-[#f2521c] flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[#f2521c] text-xs font-bold tracking-wider uppercase mb-1">
              Endereço
            </div>
            <div className="text-white/85 text-sm leading-relaxed">
              Av Ipe Quadra18 Lote 01<br />Canaã dos Carajás, PA
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#f2521c]/15 text-[#f2521c] flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[#f2521c] text-xs font-bold tracking-wider uppercase mb-1">
              E-mail
            </div>
            <div className="text-white/85 text-sm leading-relaxed">
              contato@bellarempreendimento.com.br
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#f2521c]/15 text-[#f2521c] flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[#f2521c] text-xs font-bold tracking-wider uppercase mb-1">
              Telefone
            </div>
            <div className="text-white/85 text-sm leading-relaxed font-bold">
              (94) 99144-1811
            </div>
          </div>
        </div>
      </div>

      {/* Corpo Principal do Rodapé */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Coluna 1: Sobre */}
        <div>
          <div className="mb-5">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Image
                src="/midia/sobre/logowebsite.webp"
                alt="Bel Lar Empreendimento"
                width={180}
                height={54}
                className="h-10 md:h-11 w-auto object-contain"
              />
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-white/70 max-w-xs">
            Há mais de 20 anos, a Bel Lar transforma projetos em obras sólidas, atuando nos segmentos residencial, comercial e industrial com excelência e compromisso.
          </p>
        </div>

        {/* Coluna 2: Links Úteis */}
        <div>
          <h5 className="text-white text-base font-bold mb-5">Links Úteis</h5>
          <ul className="space-y-3 text-sm">
            <li><Link href="/termos-de-uso" className="hover:text-[#f2521c] transition-colors">Termos de Uso</Link></li>
            <li><Link href="/politica-de-privacidade" className="hover:text-[#f2521c] transition-colors">Política de Privacidade</Link></li>
            <li><Link href="#contato" className="hover:text-[#f2521c] transition-colors">Fale Conosco</Link></li>
            <li><Link href="#sobre" className="hover:text-[#f2521c] transition-colors">Nossa Equipe</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Nossos Serviços */}
        <div>
          <h5 className="text-white text-base font-bold mb-5">Nossos Serviços</h5>
          <ul className="space-y-3 text-sm">
            <li><Link href="#servicos" className="hover:text-[#f2521c] transition-colors">Arquitetura</Link></li>
            <li><Link href="#servicos" className="hover:text-[#f2521c] transition-colors">Consultoria Técnica</Link></li>
            <li><Link href="#servicos" className="hover:text-[#f2521c] transition-colors">Reformas Estruturais</Link></li>
            <li><Link href="#servicos" className="hover:text-[#f2521c] transition-colors">Design de Interiores</Link></li>
            <li><Link href="#projetos" className="hover:text-[#f2521c] transition-colors">Planejamento de Obra</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Newsletter */}
        <div>
          <h5 className="text-white text-base font-bold mb-5">Newsletter</h5>
          <p className="text-sm leading-relaxed mb-4 text-white/70">
            Receba atualizações e novidades das obras.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex h-11 max-w-xs">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 bg-white text-[#0b1e3e] text-sm px-4 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              aria-label="Inscrever-se"
              className="w-12 bg-[#f2521c] hover:bg-[#d8420f] transition-colors flex items-center justify-center text-white cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-2.5 mt-5">
            <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f2521c] transition-all flex items-center justify-center text-white text-xs font-bold cursor-pointer">
              f
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f2521c] transition-all flex items-center justify-center text-white text-xs font-bold cursor-pointer">
              in
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f2521c] transition-all flex items-center justify-center text-white text-xs font-bold cursor-pointer">
              ig
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f2521c] transition-all flex items-center justify-center text-white text-xs font-bold cursor-pointer">
              yt
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Direitos Autorais */}
      <div className="border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-6 flex justify-between items-center flex-wrap gap-4 text-xs text-white/60">
          <div>© 2026 Bel Lar Empreendimento. Todos os direitos reservados.</div>
          <div>Projeto e execução própria</div>
        </div>
      </div>
    </footer>
  )
}
