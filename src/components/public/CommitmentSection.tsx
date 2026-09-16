import Image from 'next/image'

export function CommitmentSection() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 xl:px-20 max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Métricas e Barras de Progresso */}
        <div>
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-8 h-[2px] bg-[#f2521c]" />
            <span className="text-[#f2521c] text-xs font-bold tracking-[0.18em] uppercase">
              Líderes em construção civil
            </span>
          </div>

          <h2 className="text-[#0b1e3e] text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight font-['Archivo',sans-serif] mb-4">
            Comprometidos Em Entregar Projetos De Alta Qualidade
          </h2>

          <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-9 max-w-lg">
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
        <div className="relative min-h-[460px] sm:min-h-[540px] flex items-center justify-center">
          <div className="absolute right-0 top-0 w-[55%] sm:w-[50%] max-w-[400px] h-[360px] sm:h-[460px] shadow-2xl rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
              alt="Supervisão Técnica de Obras"
              fill
              sizes="(max-width: 1024px) 50vw, 380px"
              className="object-cover"
            />
          </div>

          <div className="absolute right-[25%] bottom-0 w-[50%] sm:w-[45%] max-w-[320px] h-[260px] sm:h-[320px] shadow-2xl rounded-sm overflow-hidden border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&w=800&q=80"
              alt="Operação no Canteiro"
              fill
              sizes="(max-width: 1024px) 40vw, 280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
