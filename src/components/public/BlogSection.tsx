import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blogPosts'

export function BlogSection() {
  return (
    <section id="blog" className="bg-[#f7f8fb] py-20 lg:py-28 px-5 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* Cabeçalho do Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#f2521c]" />
              <span className="text-[#f2521c] text-xs font-bold tracking-[0.18em] uppercase">
                Do blog
              </span>
            </div>
            <h2 className="text-[#0b1e3e] text-3xl sm:text-4xl font-extrabold tracking-tight font-['Archivo',sans-serif]">
              Novidades &amp; Artigos
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <p className="text-[#8a93a6] text-sm leading-relaxed max-w-md">
              Atualizações de canteiro, normas técnicas e boas práticas de execução publicadas pela nossa equipe de engenharia.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-[#f2521c] hover:text-[#0b1e3e] transition-colors"
            >
              <span>Ver todos os artigos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Grid dos Cards de Artigo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group border border-gray-100/60 rounded-xs"
            >
              {/* Container de Imagem com Badge de Data Sobreposto (Sem corte) */}
              <div className="relative h-60 w-full">
                <Link href={`/blog/${post.slug}`} className="block relative w-full h-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </Link>

                {/* Badge de Data com sobreposição perfeita e 100% visível */}
                <div className="absolute right-5 bottom-0 translate-y-1/2 bg-white py-2 px-3 sm:px-3.5 text-center shadow-md border border-gray-100 z-10 min-w-[56px] select-none">
                  <div className="text-[#0b1e3e] text-xl font-extrabold leading-tight font-['Archivo',sans-serif]">
                    {post.day}
                  </div>
                  <div className="text-[#f2521c] text-[11px] font-bold tracking-widest uppercase leading-none pb-0.5">
                    {post.month}
                  </div>
                </div>
              </div>

              {/* Informações e Conteúdo do Card */}
              <div className="p-7 pt-9 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[#8a93a6] text-[11px] font-semibold tracking-wider uppercase mb-3">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[#0b1e3e] text-lg font-bold leading-snug mb-4 group-hover:text-[#f2521c] transition-colors font-['Archivo',sans-serif]">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 bg-[#f2521c] hover:bg-[#0b1e3e] text-white text-[11px] font-extrabold tracking-widest uppercase px-5 py-3 transition-colors shadow-xs"
                  >
                    <span>Continue lendo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
