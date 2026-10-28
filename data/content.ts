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
    'Auditoria fiscal automática, arquitetura resiliente e um produto real em produção.',
  bioStatement:
    'Desenvolvo sistemas web resilientes, escaláveis e de alta disponibilidade em TypeScript, Node.js e React. Fundador e engenheiro líder do GastroSpec Radar — SaaS de auditoria fiscal OCR e inteligência de margens na restauração, em produção no Google Cloud Run e Vercel —, canalizando duas décadas de liderança em operações críticas para engenharia de software previsível, código limpo e entregas Just-in-Time.',
  aboutParagraphs: [
    'Duas décadas a liderar operações de alta gastronomia ensinam o que nenhuma folha de cálculo resolve: a inflação silenciosa escondida nas guias de remessa, as quebras físicas na doca de carga e as margens que evaporam entre o camião e a cozinha. O GastroSpec Radar nasceu dessa vivência direta — engenharia que conhece o problema de dentro do camarim.',
    'Como fundador e engenheiro líder do GastroSpec Radar, projeto e opero em produção uma plataforma de auditoria fiscal e inteligência de margens na restauração: scanner OCR com IA (Gemini 2.5 Flash Lite) sobre guias e faturas, validação nativa de QR Code fiscal AT/ATCUD, disputas de inflação em 1 clique, gestão de stock com Custo Médio Ponderado e Semáforo de Margens em tempo real.',
    'A arquitetura espelha a filosofia que a operação de cozinha me ensinou — tolerância zero a falhas: servidor Node.js com arquitetura limpa e gates fail-closed no Google Cloud Run, PostgreSQL com trilha de auditoria cifrada (AES-256-GCM), motor nativo em Rust para streaming SAF-T, billing por plano com webhooks Stripe e suítes Vitest e Playwright, com acessibilidade WCAG 2.2 AA/AAA para quem opera de mãos molhadas sob sol direto na doca.',
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
      'Tailwind CSS',
      'Context API',
      'Framer Motion',
      'App Shell Mobile & PWA',
      'Design Systems',
      'Acessibilidade WCAG 2.2 AA/AAA',
      'Responsive Layouts',
    ],
  },
  {
    category: 'BACKEND & DISTRIBUÍDOS',
    items: [
      'Node.js',
      'Servidor HTTP Nativo',
      'Clean Architecture',
      'RESTful APIs',
      'Autenticação JWT',
      'Segurança 2FA/TOTP',
      'Gates Fail-Closed',
      'Rate Limiting & Load Shedding',
      'Webhooks HMAC-SHA256',
      'Zod (Validação de Schema)',
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
      'Trilha de Auditoria Cifrada (AES-256-GCM)',
    ],
  },
  {
    category: 'INTEGRAÇÕES, QUALIDADE & DEVOPS',
    items: [
      'Gemini AI (OCR Fiscal)',
      'Stripe Billing & Webhooks',
      'Resend (E-mail Transacional)',
      'Motor Nativo Rust (NAPI-RS)',
      'Vitest & Playwright',
      'Git & GitFlow',
      'CI/CD Pipelines (GitHub Actions)',
      'Cloud Run & Vercel',
      'Scrum (CSM®)',
      'Kanban (TKP®)',
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'gastrospec',
    role: 'Fundador & Lead Full-Stack Engineer',
    company: 'GastroSpec Radar (SaaS Fiscal-OCR na Restauração)',
    location: 'Portugal (Remoto)',
    period: '2025 — PRESENTE',
    description: [
      'Fundação e engenharia ponta a ponta de plataforma SaaS de auditoria fiscal e inteligência de margens para a restauração, em produção no Google Cloud Run e Vercel.',
      'Motor de OCR com IA (Gemini 2.5 Flash Lite) sobre guias de remessa e faturas, com validação nativa de QR Code fiscal AT/ATCUD, deteção de rasuras manuais e disputa de inflação em 1 clique.',
      'Gestão de stock automática via OCR com Custo Médio Ponderado (CMP), Semáforo de Margens em tempo real e Smart Ordering com Par Levels por fornecedor.',
      'Cibersegurança corporativa: 2FA/TOTP opcional, segredos cifrados em AES-256-GCM no crypto-vault, códigos de recuperação de uso único e Kill-Switch de sessões por versão de token.',
      'Faturação holding multi-loja com Stripe (Base + Store Fee + Overage), webhooks idempotentes sob pg_advisory_xact_lock e motor nativo Rust (NAPI-RS) para streaming SAF-T.',
    ],
    techStack: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Gemini AI (OCR)',
      'Rust (NAPI-RS)',
      'Stripe',
      'Vitest & Playwright',
    ],
    technologies: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Gemini AI (OCR)',
      'Rust (NAPI-RS)',
      'Stripe',
      'Vitest & Playwright',
    ],
  },
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
