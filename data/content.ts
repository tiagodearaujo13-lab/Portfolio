import { SkillCategory, SocialLink, ExperienceItem, Certification } from '@/types';

export const siteConfig = {
  name: 'Tiago Araújo Francisco',
  title: 'Engenheiro de Software Full-Stack | Certified Scrum Master (CSM®)',
  location: 'Lagoa, Faro, Portugal',
  email: 'tiagodearaujo13@gmail.com',
  phone: '+351 939 347 977',
  whatsapp: 'https://wa.me/351939347977',
  available: true,
  availabilityText: 'Disponível para projetos & posições Full-Stack',
};

export const personalInfo = {
  name: 'Tiago Araújo Francisco',
  role: 'Engenheiro de Software Full-Stack | Certified Scrum Master (CSM®)',
  location: 'Lagoa, Faro, Portugal',
  email: 'tiagodearaujo13@gmail.com',
  phone: '+351 939 347 977',
  eyebrow: 'ENGENHARIA DE SOFTWARE & ARQUITETURA DE PRODUTO',
  headline: 'TIAGO\nFRANCISCO',
  bioHeadline:
    'Arquitetura escalável, sistemas desacoplados e produtos reais em produção.',
  bioStatement:
    'Desenvolvo sistemas web resilientes, escaláveis e de alta disponibilidade em TypeScript, Node.js e React. Fundador e engenheiro líder de SaaS em produção com mais de 300 utilizadores ativos, canalizando duas décadas de liderança em operações críticas para engenharia de software previsível, código limpo e entregas Just-in-Time.',
  aboutParagraphs: [
    'Engenharia de software de alto rendimento compartilha os mesmos princípios de operações críticas de grande escala: organização rigorosa, desenho de arquitetura desacoplada, tolerância zero a falhas em produção e foco obsessivo em entrega de valor real ao utilizador final.',
    'Durante 20 anos, liderei equipas multidisciplinares de mais de 20 profissionais em ambientes de pressão extrema e alta precisão. Essa vivência consolidou uma maturidade executiva rara: capacidade de dialogar com stakeholders de negócio, priorização implacável de backlog técnico sob incerteza e entrega pontual.',
    'Como fundador e desenvolvedor do DocFácil.pt, projetei e coloquei em produção uma solução LegalTech completa: modelação relacional em PostgreSQL, pipelines de autenticação segura (JWT, Bcrypt, OAuth 2.0), motor de compilação de documentos em tempo de execução e processamento assíncrono de pagamentos via webhooks Stripe.',
  ],
  links: {
    github: 'https://github.com/tiagodearaujo13-lab',
    linkedin: 'https://www.linkedin.com/in/tiago-araújofrancisco/',
    portfolio: 'https://portfolio-lilac-six-37.vercel.app/',
  },
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/tiagodearaujo13-lab',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tiago-araújofrancisco/',
    icon: 'linkedin',
  },
  {
    label: 'DocFácil.pt',
    href: 'https://docfacil.pt',
    icon: 'external-link',
  },
];

export const skills: SkillCategory[] = [
  {
    category: 'FRONTEND & INTERFACES',
    items: [
      'TypeScript',
      'React.js',
      'Next.js (App Router)',
      'Vite',
      'Tailwind CSS',
      'Context API',
      'Design Systems',
      'Acessibilidade WCAG 2.1 AA',
      'Responsive Layouts',
    ],
  },
  {
    category: 'BACKEND & DISTRIBUÍDOS',
    items: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Autenticação JWT',
      'Google OAuth 2.0',
      'Bcrypt Hashing',
      'Rate Limiting',
      'CORS & Security Headers',
      'Nodemailer Engine',
    ],
  },
  {
    category: 'PERSISTÊNCIA & DADOS',
    items: [
      'PostgreSQL (Neon.tech)',
      'Modelagem Relacional',
      'Migrações de Schema',
      'Otimização de Queries',
      'Integridade Transacional (ACID)',
      'SQLite (Local Prototyping)',
    ],
  },
  {
    category: 'INTEGRAÇÕES, QUALIDADE & DEVOPS',
    items: [
      'Stripe Checkout & Webhooks',
      'Chrome Extensions Engine',
      'Vitest & Testes Automatizados',
      'Git & GitFlow',
      'CI/CD Pipelines (GitHub Actions)',
      'Vercel Deployment',
      'Scrum (CSM®)',
      'Kanban (TKP®)',
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'docfacil',
    role: 'Fundador & Lead Full-Stack Engineer',
    company: 'DocFácil.pt (SaaS LegalTech)',
    location: 'Portugal (Remoto)',
    period: '2024 — PRESENTE',
    description: [
      'Idealização, arquitetura de sistemas e implementação ponta a ponta de plataforma SaaS com mais de 300 utilizadores ativos em produção.',
      'Desenvolvimento de motor de compilação dinâmica de contratos em PDF com substituição algorítmica de cláusulas condicionais baseada em inputs em tempo real.',
      'Engenharia de faturamento transacional com Stripe Checkout e orquestração de webhooks idempotentes para gestão automatizada do ciclo de subscrições.',
      'Arquitetura de autenticação segura híbrida combinando JWT assinado, hashing de credenciais com Bcrypt e Single Sign-On via Google OAuth 2.0.',
      'Migração de dados estruturais de SQLite local para PostgreSQL serverless em nuvem (Neon.tech) garantindo alta disponibilidade.',
    ],
    techStack: [
      'React.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Stripe API',
      'JWT',
      '@react-pdf/renderer',
      'Tailwind CSS',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Stripe API',
      'JWT',
      '@react-pdf/renderer',
      'Tailwind CSS',
    ],
  },
  {
    id: 'freelance-dev',
    role: 'Engenheiro de Software Full-Stack (Projetos Próprios / Freelancer)',
    company: 'Consultoria Independente de Engenharia Web',
    location: 'Portugal / Internacional',
    period: '2023 — PRESENTE',
    description: [
      'Engenharia de software com foco na arquitetura PERN/MERN, projetando monólitos bem modularizados, APIs limpas e contratos semânticos de integração.',
      'Desenvolvimento de extensões Chrome avançadas para automação e extração de dados B2B com injeção segura de scripts e sanitização anti-XSS.',
      'Aplicação contínua de boas práticas de Clean Architecture, refatoração orientada a testes (Vitest) e pipelines de deploy automatizados.',
    ],
    techStack: [
      'TypeScript',
      'React',
      'Node.js',
      'Chrome API',
      'REST APIs',
      'Tailwind CSS',
      'GitFlow',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'Chrome API',
      'REST APIs',
      'Tailwind CSS',
      'GitFlow',
    ],
  },
  {
    id: 'executive-chef',
    role: 'Gestão Operacional & Liderança Executiva de Equipas',
    company: 'Hotelaria & Alta Gastronomia (Vila Vita Parc e outras)',
    location: 'Portugal',
    period: '2003 — 2023',
    description: [
      'Liderança direta e coordenação diária de equipas multidisciplinares de alta performance (+20 colaboradores) em ambientes de estresse e pressão contínuos.',
      'Gestão de cadeia de suprimentos, previsibilidade orçamentária, controlo rigoroso de desperdícios e entregas críticas sob o modelo Just-in-Time.',
      'Resolução de incidentes e tomada de decisão estratégica em segundos mantendo conformidade absoluta com padrões de qualidade e tolerância zero a falhas.',
    ],
    techStack: [
      'Liderança de Equipas',
      'Processos Just-in-Time',
      'Gestão de Crise',
      'Tomada de Decisão',
      'Controlo Orçamentário',
    ],
    technologies: [
      'Liderança de Equipas',
      'Processos Just-in-Time',
      'Gestão de Crise',
      'Tomada de Decisão',
      'Controlo Orçamentário',
    ],
  },
];

export const certifications: Certification[] = [
  { title: 'Certified Scrum Master® (CSM)', issuer: 'Scrum Alliance' },
  { title: 'Team Kanban Practitioner® (TKP)', issuer: 'Kanban University' },
  { title: 'Certified Agile Coach (CAC)', issuer: 'MASSIMUS' },
  {
    title: 'Engenharia Full-Stack JavaScript/TypeScript',
    issuer: 'Mate academy Brasil',
  },
];
