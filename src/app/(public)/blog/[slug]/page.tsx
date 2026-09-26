import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Tag, ChevronRight, CheckCircle2 } from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '@/data/blogPosts'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Artigo não encontrado — Bel Lar Empreendimentos',
    }
  }

  return {
    title: `${post.title} — Bel Lar Empreendimentos`,
    description: post.subtitle || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: [{ url: post.image }],
    },
  }
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Artigos relacionados (outros artigos além do atual)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div className="bg-[#f7f8fb] min-h-screen pt-24 sm:pt-28 pb-20">
      {/* 1. Barra de Navegação Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3.5 px-5 sm:px-8 md:px-12">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-[#f2521c] transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/blog" className="hover:text-[#f2521c] transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#0b1e3e] font-semibold truncate max-w-[280px] sm:max-w-md">
            {post.title}
          </span>
        </div>
      </div>

      {/* 2. Container Central da Notícia */}
      <article className="max-w-[1080px] mx-auto px-5 sm:px-8 md:px-12 mt-8 sm:mt-12">
        {/* Cabeçalho da Matéria */}
        <header className="mb-8 sm:mb-10">
          <div className="inline-block bg-[#f2521c]/10 text-[#f2521c] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1e3e] tracking-tight leading-[1.12] mb-4 sm:mb-6 font-['Archivo',sans-serif]">
            {post.title}
          </h1>

          <p className="text-[#64748b] text-base sm:text-xl font-normal leading-relaxed mb-6 sm:mb-8 font-['Barlow',sans-serif]">
            {post.subtitle}
          </p>

          {/* Dados do Autor, Data e Tempo de Leitura */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-xs flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0b1e3e]">{post.author.name}</div>
                <div className="text-xs text-gray-400">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#f2521c]" />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#f2521c]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Imagem de Capa do Artigo com Legenda Técnica */}
        <div className="mb-10 sm:mb-12">
          <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[560px] rounded-xs overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1080px"
              className="object-cover"
            />
          </div>
          {post.imageCaption && (
            <p className="text-xs text-gray-400 mt-2.5 text-center italic">
              {post.imageCaption}
            </p>
          )}
        </div>

        {/* Corpo Editorial do Artigo */}
        <div className="bg-white p-6 sm:p-10 lg:p-14 shadow-sm border border-gray-100 rounded-xs">
          {/* Parágrafo de Introdução em Destaque */}
          <p className="text-lg sm:text-xl text-[#0b1e3e] font-medium leading-relaxed mb-8 pb-8 border-b border-gray-100 font-['Barlow',sans-serif]">
            {post.content.intro}
          </p>

          {/* Seções de Conteúdo */}
          <div className="space-y-8 text-[#4b5563] text-base sm:text-[17px] leading-relaxed font-['Barlow',sans-serif]">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e3e] tracking-tight font-['Archivo',sans-serif] pt-2">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.highlight && (
                  <blockquote className="my-6 border-l-4 border-[#f2521c] pl-5 sm:pl-7 py-3 bg-[#fdece7]/30 italic text-base sm:text-lg text-[#0b1e3e] font-semibold">
                    &ldquo;{section.highlight}&rdquo;
                  </blockquote>
                )}
              </div>
            ))}

            {/* Conclusão */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-[#0b1e3e] font-['Archivo',sans-serif] mb-3">
                Conclusão
              </h3>
              <p className="leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* Tags do Artigo */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#f2521c]" /> Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 hover:bg-[#fdece7] hover:text-[#f2521c] text-[#0b1e3e] text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Card do Autor no Rodapé do Artigo */}
          <div className="mt-10 p-6 bg-[#f7f8fb] rounded-xs border border-gray-200/70 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-[#f2521c] uppercase tracking-wider mb-1">
                Escrito por
              </div>
              <h4 className="text-base font-extrabold text-[#0b1e3e] font-['Archivo',sans-serif]">
                {post.author.name}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {post.author.role} &bull; Bel Lar Empreendimentos. Especialista em gestão de obras, conformidade técnica e soluções inovadoras na construção civil.
              </p>
            </div>
          </div>
        </div>

        {/* Ações e Navegação */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-[#0b1e3e] hover:text-[#f2521c] transition-colors p-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todos os artigos</span>
          </Link>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 bg-[#f2521c] hover:bg-[#0b1e3e] text-white text-xs font-extrabold tracking-widest uppercase px-6 py-3.5 transition-colors shadow-md"
          >
            <span>Falar com a Bel Lar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3. Artigos Relacionados */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-extrabold text-[#0b1e3e] font-['Archivo',sans-serif] mb-8">
              Artigos Relacionados
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  className="bg-white rounded-xs shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#f2521c] uppercase tracking-wider mb-2">
                        {related.category}
                      </div>
                      <h4 className="text-lg font-bold text-[#0b1e3e] group-hover:text-[#f2521c] transition-colors font-['Archivo',sans-serif] leading-snug mb-3">
                        <Link href={`/blog/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-[#64748b] line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#f2521c] uppercase tracking-wider hover:text-[#0b1e3e] transition-colors"
                    >
                      <span>Ler notícia completa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
