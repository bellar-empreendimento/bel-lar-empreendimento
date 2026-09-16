import Image from 'next/image'
import Link from 'next/link'

interface Post {
  id: number
  title: string
  day: string
  month: string
  comments: number
  image: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'O padrão que evoluiu de geração em geração',
    day: '29',
    month: 'Mar',
    comments: 0,
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Como planejar uma reforma residencial eficiente',
    day: '29',
    month: 'Mar',
    comments: 3,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Conheça o segredo das obras seguras da Bel Lar',
    day: '29',
    month: 'Mar',
    comments: 0,
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="bg-[#f7f8fb] py-24 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto">
        {/* Cabeçalho do Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-12">
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

          <p className="text-[#8a93a6] text-sm leading-relaxed max-w-md md:justify-self-end">
            Atualizações de canteiro, normas técnicas e boas práticas de execução publicadas pela nossa equipe de engenharia.
          </p>
        </div>

        {/* Grid dos Cards de Artigo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute right-5 -bottom-5 bg-white py-2.5 px-3.5 text-center shadow-md">
                  <div className="text-[#0b1e3e] text-xl font-extrabold leading-none">
                    {post.day}
                  </div>
                  <div className="text-[#f2521c] text-[10px] font-bold tracking-wider uppercase mt-0.5">
                    {post.month}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-9 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#8a93a6] text-[11px] font-semibold tracking-wider uppercase block mb-3">
                    Admin / {post.comments} comentários
                  </span>
                  <h3 className="text-[#0b1e3e] text-lg font-bold leading-snug mb-6">
                    {post.title}
                  </h3>
                </div>

                <div>
                  <Link
                    href="#blog"
                    className="inline-block bg-[#f2521c] hover:bg-[#0b1e3e] text-white text-[11px] font-extrabold tracking-widest uppercase px-5 py-3 transition-colors"
                  >
                    Continue lendo
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
