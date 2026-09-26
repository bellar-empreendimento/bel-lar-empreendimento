import Image from 'next/image'

export function CommitmentSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 md:px-12 xl:px-20 max-w-[1500px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Métricas e Barras de Progresso */}
        <div>
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-8 h-[2px] bg-[#f2521c]" />
            <span className="text-[#f2521c] text-xs font-bold tracking-[0.16em] sm:tracking-[0.18em] uppercase">
              Líderes em construção civil
            </span>
          </div>

          <h2 className="text-[#0b1e3e] text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight font-['Archivo',sans-serif] mb-4">
            Comprometidos Em Entregar Projetos De Alta Qualidade
          </h2>

          <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Medimos desempenho obra a obra: prazo, custo e qualidade de acabamento. Os índices abaixo consolidam os contratos entregues nos últimos vinte e quatro meses.
          </p>

          <div className="space-y-6">
            {/* Barra 1 */}
            <div>
              <div className="flex justify-between text-[#0b1e3e] text-sm font-bold mb-2">
                <span>Construção</span>
                <span>96%</span>
              </div>
              <div className="h-2 bg-[#eef0f6] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#f2521c] rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: '96%' }}
                />
              </div>
            </div>

            {/* Barra 2 */}
            <div>
              <div className="flex justify-between text-[#0b1e3e] text-sm font-bold mb-2">
                <span>Reforma</span>
                <span>82%</span>
              </div>
              <div className="h-2 bg-[#eef0f6] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#f2521c] rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: '82%' }}
                />
              </div>
            </div>

            {/* Barra 3 */}
            <div>
              <div className="flex justify-between text-[#0b1e3e] text-sm font-bold mb-2">
                <span>Arquitetura</span>
                <span>82%</span>
              </div>
              <div className="h-2 bg-[#eef0f6] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#f2521c] rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: '82%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Imagens Sobrepostas */}
        <div className="relative min-h-[300px] sm:min-h-[440px] lg:min-h-[520px] w-full flex items-center justify-center">
          {/* Imagem mais comprida (fundo/vertical) */}
          <div className="absolute right-2 sm:right-0 top-0 w-[58%] sm:w-[50%] max-w-[400px] h-[240px] sm:h-[380px] lg:h-[460px] shadow-2xl rounded-sm overflow-hidden">
            <Image
              src="/midia/obras/image-10.webp"
              alt="Engenheiro e Planejamento Bel Lar Empreendimentos"
              fill
              sizes="(max-width: 768px) 60vw, 380px"
              className="object-cover"
            />
          </div>

          {/* Imagem mais quadrada (frente/canteiro) */}
          <div className="absolute right-[20%] sm:right-[25%] bottom-0 w-[52%] sm:w-[45%] max-w-[320px] h-[180px] sm:h-[260px] lg:h-[320px] shadow-2xl rounded-sm overflow-hidden border-4 border-white">
            <Image
              src="/midia/obras/image-9.webp"
              alt="Trabalho de Estrutura e Ferragem no Canteiro de Obras"
              fill
              sizes="(max-width: 768px) 50vw, 280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
