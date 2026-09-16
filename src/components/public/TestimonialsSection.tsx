import Image from 'next/image'

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#0b1338] overflow-hidden text-white">
      {/* Glow Radial de Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,92,171,0.25),transparent_70%)]" />

      <div className="relative max-w-[1680px] mx-auto px-6 md:px-12 xl:px-20 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Depoimento */}
        <div>
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-8 h-[2px] bg-[#f2521c]" />
            <span className="text-[#f2521c] text-xs font-bold tracking-[0.18em] uppercase">
              Depoimentos
            </span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight font-['Archivo',sans-serif] mb-9 max-w-[18ch]">
            O Que Falam Sobre A Empresa?
          </h2>

          <div className="flex gap-5 items-start">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/30">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                alt="Marcos Silva"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                &ldquo;Contratamos a Bel Lar para um galpão de 2.400 m² e a obra foi entregue duas semanas antes do prazo, dentro do orçamento aprovado. A comunicação semanal fez toda a diferença para a nossa operação.&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <span className="text-[#39a7ff] text-5xl font-serif font-extrabold leading-none select-none">
                  “
                </span>
                <div>
                  <div className="text-white text-lg font-bold">Marcos Silva</div>
                  <div className="text-[#f2521c] text-xs font-semibold tracking-wider uppercase mt-0.5">
                    Cliente Corporativo
                  </div>
                </div>
              </div>

              {/* Indicadores de Paginação */}
              <div className="flex gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-[#f2521c]" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Modelo Gráfico 3D BIM */}
        <div className="flex justify-center">
          <div className="w-full max-w-[540px] bg-gradient-to-br from-[#f2521c]/15 to-[#0d5cab]/20 border border-white/15 p-8 rounded-lg shadow-2xl backdrop-blur-sm animate-pulse duration-1000">
            <div className="flex justify-between items-center border-b border-white/15 pb-4 mb-6">
              <span className="text-[#f2521c] text-xs font-extrabold tracking-widest uppercase">
                BIM &amp; Modelagem 3D
              </span>
              <span className="text-white/60 text-xs font-mono">Bel Lar Engineering</span>
            </div>

            <div className="h-48 flex items-center justify-center">
              <svg viewBox="0 0 200 160" className="w-full h-full max-h-44">
                <polygon points="100,10 180,50 180,110 100,150 20,110 20,50" fill="none" stroke="#f2521c" strokeWidth="2.5" />
                <line x1="100" y1="10" x2="100" y2="150" stroke="#f2521c" strokeWidth="2" strokeDasharray="4,4" />
                <line x1="20" y1="50" x2="180" y2="110" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <line x1="20" y1="110" x2="180" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <polygon points="100,40 150,65 150,105 100,130 50,105 50,65" fill="rgba(242,82,28,0.25)" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>

            <p className="text-white/70 text-xs text-center leading-relaxed mt-4">
              Compatibilização milimétrica de todas as disciplinas antes de entrar no canteiro.
            </p>
          </div>
        </div>
      </div>

      {/* Linha de Parceiros */}
      <div className="relative border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        <div className="py-10 px-4 flex items-center justify-center border-r border-white/10 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-white text-base sm:text-lg font-extrabold tracking-widest uppercase font-['Archivo',sans-serif]">
            VALE S.A.
          </span>
        </div>
        <div className="py-10 px-4 flex items-center justify-center border-r border-white/10 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-white text-base sm:text-lg font-extrabold tracking-widest uppercase font-['Archivo',sans-serif]">
            CARAJÁS ENG
          </span>
        </div>
        <div className="py-10 px-4 flex items-center justify-center border-r border-white/10 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-white text-base sm:text-lg font-extrabold tracking-widest uppercase font-['Archivo',sans-serif]">
            GRUPO PARÁ
          </span>
        </div>
        <div className="py-10 px-4 flex items-center justify-center border-r border-white/10 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-white text-base sm:text-lg font-extrabold tracking-widest uppercase font-['Archivo',sans-serif]">
            GEOBRÁS
          </span>
        </div>
        <div className="py-10 px-4 flex items-center justify-center col-span-2 sm:col-span-1 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-white text-base sm:text-lg font-extrabold tracking-widest uppercase font-['Archivo',sans-serif]">
            MINERAÇÃO PA
          </span>
        </div>
      </div>
    </section>
  )
}
