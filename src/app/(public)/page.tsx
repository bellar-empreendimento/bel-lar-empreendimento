import { trackPageView } from '@/utils/supabase/actions'
import { HeroSlider } from '@/components/public/HeroSlider'
import { AboutSection } from '@/components/public/AboutSection'
import { ProjectsGrid } from '@/components/public/ProjectsGrid'
import { ServicesSection } from '@/components/public/ServicesSection'
import { QualityBanner } from '@/components/public/QualityBanner'
import { CommitmentSection } from '@/components/public/CommitmentSection'
import { Testimonials } from '@/components/public/Testimonials'
import { OngoingWorksSection } from '@/components/public/OngoingWorksSection'
import { BlogSection } from '@/components/public/BlogSection'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  // Registro não-bloqueante e seguro de visualização
  trackPageView('home').catch(() => {})

  return (
    <>
      {/* 1. Hero Section com Slider e Banner Dividido */}
      <HeroSlider />

      {/* 2. Seção Sobre Nós com Fotos Escalonadas e Assinatura */}
      <AboutSection />

      {/* 3. Mosaico de Projetos com Blocos Coloridos Contrastantes */}
      <ProjectsGrid />

      {/* 4. Seção de Serviços com Accordion Interativo */}
      <ServicesSection />

      {/* 5. Banner de Obra de Alta Qualidade */}
      <QualityBanner />

      {/* 6. Métricas com Barras de Desempenho e Fotos Sobrepostas */}
      <CommitmentSection />

      {/* 7. Depoimentos e Prédio 3D Flutuante */}
      <Testimonials />

      {/* 8. Obras em Andamento e Tipologias Arquitetônicas */}
      <OngoingWorksSection />

      {/* 9. Blog de Novidades e Artigos Técnicos */}
      <BlogSection />
    </>
  )
}
