export interface BlogPost {
  id: number
  slug: string
  title: string
  subtitle: string
  day: string
  month: string
  year: string
  publishedAt: string
  author: {
    name: string
    role: string
    avatar: string
    bio?: string
  }
  category: string
  readTime: string
  image: string
  imageCaption: string
  excerpt: string
  content: {
    intro: string
    sections: {
      heading: string
      paragraphs: string[]
      highlight?: string
    }[]
    conclusion: string
  }
  tags: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'padrao-que-evoluiu-de-geracao-em-geracao',
    title: 'O padrão que evoluiu de geração em geração',
    subtitle: 'Como a união entre tradição familiar e inovação tecnológica consolidou mais de três décadas de liderança na construção civil no Pará.',
    day: '25',
    month: 'Set',
    year: '2026',
    publishedAt: '25 de Setembro de 2026',
    author: {
      name: 'Geraldo Magela',
      role: 'CEO — Chief Executive Officer',
      avatar: '/midia/obras/Geraldo.webp',
      bio: 'Dono da empresa e CEO — Chief Executive Officer.',
    },
    category: 'Engenharia & Gestão',
    readTime: '4 min de leitura',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Canteiro de obras monitorado com padrões rigorosos de engenharia civil moderna.',
    excerpt: 'Desde a fundação em 1992, a Bel Lar Empreendimentos tem como premissa que cada estrutura erguida é um legado duradouro para as próximas gerações.',
    content: {
      intro: 'Construir não é apenas empilhar tijolos ou moldar concreto. Quando iniciamos nossas atividades em 1992, a construção civil no interior do Pará enfrentava desafios logísticos imensos, ausência de padronização técnica e carência de fornecedores homologados. Três décadas depois, o padrão Bel Lar evoluiu com base em um princípio inegociável: honestidade técnica absoluta e precisão milimétrica.',
      sections: [
        {
          heading: 'A Filosofia do Responsável Técnico Único',
          paragraphs: [
            'Um dos maiores erros do mercado imobiliário tradicional é a fragmentação de responsabilidades. Projetos elaborados por uma equipe, executados por outra e fiscalizados por terceiros geram ruídos de comunicação, atrasos e custos adicionais que invariavelmente recaem sobre o cliente.',
            'Na Bel Lar, mantemos um único engenheiro responsável técnico acompanhando a obra desde os primeiros estudos de sondagem do solo até a entrega formal do habite-se. Essa continuidade garante fidelidade integral às especificações arquitetônicas e estruturais.'
          ],
          highlight: 'A solidez de uma edificação não se mede apenas pela resistência do concreto, mas pela clareza dos processos e pela integridade das pessoas envolvidas.'
        },
        {
          heading: 'Tecnologia Aplicada ao Canteiro',
          paragraphs: [
            'A integração entre softwares BIM (Building Information Modeling) e relatórios digitais semanais de medição trouxe transparência sem precedentes aos nossos clientes comerciais, industriais e residenciais.',
            'Cada etapa cumprida é documentada com fotos de alta resolução, testes de esclerometria, ensaios de rompimento de corpos de prova de concreto e controle de suprimentos rastreados por lote.'
          ]
        }
      ],
      conclusion: 'O que aprendemos ao longo dessas gerações é que obras verdadeiramente memoráveis são aquelas que entregam segurança jurídica, previsibilidade orçamentária e paz de espírito a quem nelas investe.'
    },
    tags: ['Construção Civil', 'Gestão de Canteiro', 'Engenharia', 'Bel Lar', 'Qualidade']
  },
  {
    id: 2,
    slug: 'como-planejar-uma-reforma-residencial-eficiente',
    title: 'Como planejar uma reforma residencial eficiente',
    subtitle: 'O guia técnico definitivo para evitar custos imprevistos, cumprir cronogramas e valorizar seu imóvel com segurança estrutural.',
    day: '18',
    month: 'Set',
    year: '2026',
    publishedAt: '18 de Setembro de 2026',
    author: {
      name: 'Equipe Técnica Bel Lar',
      role: 'Consultoria de Projetos',
      avatar: '/midia/obras/Geraldo.webp',
    },
    category: 'Reformas & Planejamento',
    readTime: '6 min de leitura',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Acompanhamento milimétrico de armações e instalações hidrossanitárias em reformas.',
    excerpt: 'Descubra os passos fundamentais para planejar sua reforma com apoio de engenheiros qualificados, garantindo custo previsível e acabamento impecável.',
    content: {
      intro: 'Uma reforma residencial mal planejada é frequentemente associada a estresse, desperdício de materiais e prazos estourados. No entanto, quando conduzida sob métodos de engenharia de produção e controle orçamentário rigoroso, a renovação de um imóvel se transforma em uma experiência gratificante de valorização patrimonial.',
      sections: [
        {
          heading: '1. O Diagnóstico Estrutural Preliminar',
          paragraphs: [
            'Antes de qualquer demolição ou intervenção arquitetônica, é indispensável a realização de um diagnóstico da infraestrutura existente. Paredes estruturais, passagens de prumadas hidráulicas e capacidade dos conduítes elétricos devem ser checados com base em plantas originais ou ensaios não destrutivos.',
            'Ignorar essa etapa pode comprometer a estabilidade do imóvel e gerar custos de emergência dezenas de vezes maiores do que o valor de uma boa consultoria inicial.'
          ]
        },
        {
          heading: '2. Cronograma Físico-Financeiro e Curva S',
          paragraphs: [
            'Nossa equipe aplica a curva S de desembolso para que o proprietário saiba exatamente em qual semana cada material será necessário. Isso evita estoque desnecessário no canteiro, reduz perdas por umidade ou avarias e permite compras planejadas com melhores descontos junto a fornecedores certificados.',
            'O cronograma deve prever margem de contingência para interferências ocultas, mantendo sempre o cliente ciente de cada decisão técnica.'
          ],
          highlight: 'Planejar 80% do tempo economiza 50% dos custos de execução na fase de canteiro.'
        }
      ],
      conclusion: 'Transformar sua residência com requinte e tranquilidade exige planejamento, respeito às normas regulamentadoras e uma equipe que coloque a qualidade em primeiro lugar.'
    },
    tags: ['Reforma', 'Arquitetura', 'Planejamento', 'Residencial', 'Curva S']
  },
  {
    id: 3,
    slug: 'conheca-o-segredo-das-obras-seguras-da-bel-lar',
    title: 'Conheça o segredo das obras seguras da Bel Lar',
    subtitle: 'Por trás de cada entrega pontual existe um sistema integrado de segurança do trabalho, respeito às normas e valorização humana.',
    day: '10',
    month: 'Set',
    year: '2026',
    publishedAt: '10 de Setembro de 2026',
    author: {
      name: 'Eng. Roberto Mendes',
      role: 'Gerente de Infraestrutura & SST',
      avatar: '/midia/projetos/depoimento.webp',
    },
    category: 'Segurança & Normas',
    readTime: '5 min de leitura',
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Treinamento contínuo de equipe técnica e aplicação de normas regulamentadoras.',
    excerpt: 'Conheça as metodologias de conformidade com a NR-18 e proteção do trabalhador que tornam os canteiros da Bel Lar referência em segurança no Pará.',
    content: {
      intro: 'Em setores dinâmicos como a mineração e a construção civil pesada no Pará, segurança não é um departamento isolado — é a espinha dorsal de qualquer operação de sucesso. Na Bel Lar, acreditamos firmemente que uma obra de alta qualidade começa com a garantia de que cada colaborador retorne para sua família com total integridade.',
      sections: [
        {
          heading: 'Conformidade Rigorosa com a NR-18',
          paragraphs: [
            'Nossos canteiros operam em total conformidade com a Norma Regulamentadora 18 (Condições de Segurança e Saúde no Trabalho na Indústria da Construção). Desde o isolamento perimetral até plataformas protegidas de trabalho em altura, todos os equipamentos passam por manutenções preventivas documentadas.',
            'A realização diária do DDS (Diálogo Diário de Segurança) alinha a equipe sobre os riscos específicos de cada etapa, promovendo cultura preventiva e atenção coletiva.'
          ]
        },
        {
          heading: 'Parcerias com Grandes Indústrias da Região',
          paragraphs: [
            'Atuando lado a lado com parceiros de alto nível de exigência como mineradoras e grandes centros logísticos em Canaã dos Carajás e região, desenvolvemos padrões de auditoria que superam a média do mercado tradicional.',
            'O resultado é um histórico impecável de zero acidentes com afastamento e máxima pontualidade nos cronogramas de entrega.'
          ],
          highlight: 'Canteiro limpo, organizado e seguro é sinônimo de produtividade e respeito ao cliente.'
        }
      ],
      conclusion: 'A verdadeira excelência da engenharia civil se consolida quando tecnologia, segurança e dedicação humana caminham juntas do início ao fim da obra.'
    },
    tags: ['Segurança do Trabalho', 'NR-18', 'Mineração', 'SST', 'Engenharia Civil']
  }
]
