import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blogPosts'

export const metadata: Metadata = {
  title: 'Blog & Notícias da Construção Civil — Bel Lar Empreendimentos',
  description: 'Artigos técnicos, tendências de arquitetura, novidades de canteiro e boas práticas de engenharia civil no Pará.',
}

export default function BlogListingPage() {
  const featuredPost = BLOG_POSTS[0]
  const otherPosts = BLOG_POSTS.slice(1)

  return (
    <div className="bg-[#f7f8fb] min-h-screen pt-24 sm:pt-28 pb-20">
      {/* 1. Header do Blog com Banner Institucional */}
      <section className="bg-[#0b1e3e] text-white py-14 sm:py-20 px-5 sm:px-8 md:px-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: "url('/midia/projetos/bg-3.webp')" }}
        />
        <div className="relative max-w-[1240px] mx-auto">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#f2521c]" />
            <span className="text-[#f2521c] text-xs font-bold tracking-[0.2em] uppercase font-['Archivo',sans-serif]">
              Sala de Imprensa &amp; Conhecimento
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Archivo',sans-serif] mb-4">
            Blog Bel Lar
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-['Barlow',sans-serif] leading-relaxed">
            Acompanhe nossas análises técnicas, relatórios de obras, normas de engenharia e tendências da construção civil moderna.
          </p>
        </div>
      </section>

      {/* 2. Container dos Artigos */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 mt-12 sm:mt-16">
        {/* Post em Destaque (Principal de Hoje) */}
        {featuredPost && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f2521c] animate-pulse" />
              <span className="text-[#0b1e3e] text-xs font-extrabold tracking-wider uppercase">
                Artigo em Destaque
              </span>
            </div>

            <article className="bg-white rounded-xs shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="lg:col-span-7 relative h-[280px] sm:h-[380px] lg:h-full min-h-[280px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute left-6 top-6 bg-[#0b1e3e]/90 backdrop-blur-xs text-white text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full">
                  {featuredPost.category}
                </div>
              </div>

              <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#f2521c]" />
                      {featuredPost.publishedAt}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#f2521c]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-[#0b1e3e] text-2xl sm:text-3xl font-extrabold leading-tight mb-4 font-['Archivo',sans-serif] group-hover:text-[#f2521c] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-6 font-['Barlow',sans-serif]">
                    {featuredPost.subtitle}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0b1e3e]">{featuredPost.author.name}</div>
                      <div className="text-[10px] text-gray-400">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[#f2521c] hover:bg-[#0b1e3e] text-white text-xs font-bold tracking-wider uppercase px-5 py-3 transition-colors shadow-xs"
                  >
                    <span>Ler Artigo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Demais Artigos em Grid */}
        <div>
          <h3 className="text-[#0b1e3e] text-xl font-bold font-['Archivo',sans-serif] mb-8 pb-3 border-b border-gray-200">
            Outras Publicações Recentes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xs shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group border border-gray-100 overflow-hidden"
              >
                {/* Imagem com Data */}
                <div className="relative h-64 w-full">
                  <Link href={`/blog/${post.slug}`} className="block relative w-full h-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </Link>

                  {/* Badge de Data visível e sem corte */}
                  <div className="absolute right-5 bottom-0 translate-y-1/2 bg-white py-2 px-3.5 text-center shadow-md border border-gray-100 z-10 min-w-[56px]">
                    <div className="text-[#0b1e3e] text-xl font-extrabold leading-tight font-['Archivo',sans-serif]">
                      {post.day}
                    </div>
                    <div className="text-[#f2521c] text-[11px] font-bold tracking-widest uppercase leading-none pb-0.5">
                      {post.month}
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-7 pt-9 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-3">
                      <span className="text-[#f2521c] font-bold uppercase tracking-wider">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-[#0b1e3e] text-xl font-bold leading-snug mb-3 group-hover:text-[#f2521c] transition-colors font-['Archivo',sans-serif]">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>

                    <p className="text-[#64748b] text-sm leading-relaxed mb-6 font-['Barlow',sans-serif] line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-xs text-gray-500 font-medium">
                      Por {post.author.name}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-[#f2521c] hover:text-[#0b1e3e] transition-colors"
                    >
                      <span>Acessar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Institucional de Contato */}
        <div className="mt-16 bg-[#0b1e3e] text-white p-8 sm:p-12 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="text-[#f2521c] text-xs font-bold tracking-widest uppercase mb-2">
              Planejando seu próximo empreendimento?
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold font-['Archivo',sans-serif]">
              Fale com um dos nossos engenheiros especialistas
            </h4>
          </div>
          <Link
            href="/#contato"
            className="flex-shrink-0 bg-[#f2521c] hover:bg-white hover:text-[#0b1e3e] text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase px-7 py-4 transition-all shadow-md"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </div>
  )
}
