import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'mergedesks',
    title: 'MergeDesks',
    status: 'production',
    statusLabel: 'SaaS em Produção',
    featured: true,
    users: 'Capacidade de Engenharia Assíncrona',
    role: 'Fundador & Lead Full-Stack Engineer',
    impact: 'Pull Requests Prontos para Produção em 48 Horas',
    description:
      'Capacidade de engenharia sénior entregue de forma assíncrona através de GitHub Issues focadas e pull requests prontos para produção.',
    fullDescription:
      'Serviço de subscrição Founder Desk com fila linear de uma tarefa ativa, zero chamadas ou reuniões e entrega de PRs em até 48 horas, com possibilidade de pausa ou cancelamento a qualquer momento.',
    longDescription:
      'Serviço de subscrição Founder Desk com fila linear de uma tarefa ativa, zero chamadas ou reuniões e entrega de PRs em até 48 horas, com possibilidade de pausa ou cancelamento a qualquer momento.',
    highlight:
      'Modelo assíncrono de engenharia: fila linear com uma tarefa ativa e pull requests em produção em até 48 horas, sem reuniões.',
    techStack: ['Next.js (App Router)'],
    stack: ['Next.js (App Router)'],
    liveUrl: 'https://mergedesks.vercel.app',
    links: {
      live: 'https://mergedesks.vercel.app',
    },
  },
  {
    id: 'normasafe-haccp',
    title: 'NormaSafe HACCP',
    status: 'development',
    statusLabel: 'Plataforma de Segurança Alimentar',
    featured: true,
    users: 'Conformidade HACCP Digital',
    role: 'Fundador & Lead Full-Stack Engineer',
    impact: 'Conformidade HACCP Digitalizada',
    description:
      'Aplicação web para digitalização e gestão de planos HACCP (Hazard Analysis and Critical Control Points), garantindo conformidade com as normas de segurança alimentar de forma estruturada e auditável.',
    fullDescription:
      'Plataforma construída com Next.js (App Router) e TypeScript em modo estrito, orientada à gestão de pontos críticos de controlo, registos de monitorização e documentação de conformidade alimentar.',
    longDescription:
      'Plataforma construída com Next.js (App Router) e TypeScript em modo estrito, orientada à gestão de pontos críticos de controlo, registos de monitorização e documentação de conformidade alimentar.',
    highlight:
      'Digitalização de planos HACCP: pontos críticos de controlo, monitorização e evidências de auditoria num só sistema.',
    techStack: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
    ],
    stack: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
  {
    id: 'docfacil',
    title: 'DocFácil.pt',
    status: 'production',
    statusLabel: 'SaaS em Produção',
    featured: true,
    users: '+300 Utilizadores Ativos',
    role: 'Fundador & Lead Full-Stack Engineer',
    impact: '+300 Utilizadores Ativos em Produção',
    description:
      'Plataforma SaaS LegalTech para orquestração, automação e geração algorítmica de documentos e contratos jurídicos em tempo de execução.',
    fullDescription:
      'Projetado como um monólito modular de alta coesão: frontend reativo em React.js, API RESTful desacoplada em Node.js/Express, persistência de dados em PostgreSQL gerenciado na Neon.tech e sistema financeiro integrado com Stripe Checkout via webhooks idempotentes.',
    longDescription:
      'Projetado como um monólito modular de alta coesão: frontend reativo em React.js, API RESTful desacoplada em Node.js/Express, persistência de dados em PostgreSQL gerenciado na Neon.tech e sistema financeiro integrado com Stripe Checkout via webhooks idempotentes.',
    highlight:
      'Motor proprietário de compilação dinâmica de PDFs que avalia dependências lógicas e injeta cláusulas contratuais customizadas em microssegundos.',
    techStack: [
      'React.js',
      'Node.js',
      'Express',
      'PostgreSQL (Neon)',
      'Stripe Webhooks',
      'JWT Authentication',
      '@react-pdf/renderer',
      'Tailwind CSS',
    ],
    stack: [
      'React.js',
      'Node.js',
      'Express',
      'PostgreSQL (Neon)',
      'Stripe Webhooks',
      'JWT Authentication',
      '@react-pdf/renderer',
      'Tailwind CSS',
    ],
    liveUrl: 'https://docfacil.pt',
    githubUrl: 'https://github.com/tiagodearaujo13-lab',
    links: {
      live: 'https://docfacil.pt',
      github: 'https://github.com/tiagodearaujo13-lab',
    },
  },
  {
    id: 'clearbounce',
    title: 'ClearBounce',
    status: 'development',
    statusLabel: 'SaaS B2B Monorepo',
    featured: false,
    users: 'Validação SMTP de Listas em Escala',
    role: 'Fundador & Lead Full-Stack Engineer',
    impact: 'Pipeline SMTP Seguro & Billing Transacional',
    description:
      'Plataforma B2B de autoatendimento para validação e limpeza de listas de e-mails em escala, detetando endereços inválidos, domínios descartáveis e contas inexistentes via pipeline SMTP seguro.',
    fullDescription:
      'Monorepo de alta coesão estruturado em server/ (API Fastify com validação SMTP, filas BullMQ e billing) e web/ (self-service em Next.js App Router). Segurança orientada a OWASP Top 10: bloqueio SSRF antes de qualquer conexão SMTP, rate limiting em dupla camada, API Keys com hashing SHA-256 e webhooks Stripe com validação criptográfica.',
    longDescription:
      'Monorepo de alta coesão estruturado em server/ (API Fastify com validação SMTP, filas BullMQ e billing) e web/ (self-service em Next.js App Router). Segurança orientada a OWASP Top 10: bloqueio SSRF antes de qualquer conexão SMTP, rate limiting em dupla camada, API Keys com hashing SHA-256 e webhooks Stripe com validação criptográfica.',
    highlight:
      'Pipeline de verificação SMTP com proteção SSRF (IPs privados e loopback bloqueados) e processamento assíncrono de listas via filas BullMQ em Redis.',
    techStack: [
      'Fastify',
      'Next.js (App Router)',
      'TypeScript',
      'PostgreSQL',
      'Redis & BullMQ',
      'Stripe Billing',
      'JWT Authentication',
      'Vitest & Playwright',
    ],
    stack: [
      'Fastify',
      'Next.js (App Router)',
      'TypeScript',
      'PostgreSQL',
      'Redis & BullMQ',
      'Stripe Billing',
      'JWT Authentication',
      'Vitest & Playwright',
    ],
    githubUrl: 'https://github.com/tiagodearaujo13-lab/ClearBounce',
    liveUrl: 'https://clear-bounce.vercel.app',
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/ClearBounce',
      live: 'https://clear-bounce.vercel.app',
    },
  },
  {
    id: 'leadpulse',
    title: 'LeadPulse',
    status: 'production',
    statusLabel: 'B2B Extension & API',
    featured: false,
    users: 'Extração & Licenciamento Ativo',
    role: 'Software Architect & Full-Stack Developer',
    impact: 'Extração & Licenciamento Ativo',
    description:
      'Módulo cliente/servidor e extensão Chrome voltada à captação, raspagem programática e validação cadastral de leads corporativos B2B.',
    fullDescription:
      'Arquitetura segura com injeção de scripts isolados (Chrome API), sanitizador estrito de DOM contra injeções de script (anti-XSS), controle de autenticação JWT, rate limiter adaptativo no backend e suíte de testes unitários com Vitest.',
    longDescription:
      'Arquitetura segura com injeção de scripts isolados (Chrome API), sanitizador estrito de DOM contra injeções de script (anti-XSS), controle de autenticação JWT, rate limiter adaptativo no backend e suíte de testes unitários com Vitest.',
    highlight:
      'Camada defensiva de segurança: DOMSanitizer customizado, validação transacional de licenças ativas e isolamento de contexto de execução.',
    techStack: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express',
      'Chrome Extension API',
      'Vitest',
      'Tailwind CSS',
    ],
    stack: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express',
      'Chrome Extension API',
      'Vitest',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/tiagodearaujo13-lab/leadpulse',
    liveUrl: 'https://leadpulse-bice.vercel.app',
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/leadpulse',
      live: 'https://leadpulse-bice.vercel.app',
    },
  },
  {
    id: 'cognirav',
    title: 'Cognirav',
    status: 'development',
    statusLabel: 'Full-Stack Platform',
    featured: false,
    users: 'Avaliação Cognitiva & Psicométrica',
    role: 'Full-Stack Software Engineer',
    impact: 'Avaliação Cognitiva & Psicométrica',
    description:
      'Sistema de ponta a ponta para execução de baterias psicométricas, computação algorítmica de score e geração de diagnósticos analíticos de perfil.',
    fullDescription:
      'Monorepo modular estruturado em server/ e web/. Engine de avaliação em React Context API orquestrando 30+ dimensões de questionários com persistência assíncrona em API Express e tipagem estrita com TypeScript.',
    longDescription:
      'Monorepo modular estruturado em server/ e web/. Engine de avaliação em React Context API orquestrando 30+ dimensões de questionários com persistência assíncrona em API Express e tipagem estrita com TypeScript.',
    highlight:
      'Algoritmo determinístico de cálculo de score cognitivo com geração de relatórios de perfil e cards para compartilhamento instantâneo via Canvas API.',
    techStack: [
      'TypeScript',
      'React.js (Vite)',
      'Node.js',
      'Express',
      'React Context API',
      'Canvas API',
      'Tailwind CSS',
    ],
    stack: [
      'TypeScript',
      'React.js (Vite)',
      'Node.js',
      'Express',
      'React Context API',
      'Canvas API',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/tiagodearaujo13-lab/cognirav',
    liveUrl: 'https://cognirav.vercel.app',
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/cognirav',
      live: 'https://cognirav.vercel.app',
    },
  },
  {
    id: 'godoy-shake',
    title: 'Godoy Shake',
    status: 'production',
    statusLabel: 'E-Commerce Mobile-First',
    featured: false,
    users: 'Conversão & Pedidos em Tempo Real',
    role: 'Frontend & UX Engineer',
    impact: 'Conversão & Pedidos em Tempo Real',
    description:
      'Catálogo interativo e motor de pedidos de alta conversão, otimizado para navegação mobile com microinterações fluidas e checkout ágil.',
    fullDescription:
      'Desenvolvido com foco em Core Web Vitals (zero Cumulative Layout Shift, carregamento abaixo de 800ms), navegação acessível e catálogo responsivo de produtos alimentares.',
    longDescription:
      'Desenvolvido com foco em Core Web Vitals (zero Cumulative Layout Shift, carregamento abaixo de 800ms), navegação acessível e catálogo responsivo de produtos alimentares.',
    highlight:
      'Fluxo de checkout transacional direto sem atrito com microestados de seleção e validação local.',
    techStack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Lucide React',
    ],
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Lucide React',
    ],
    githubUrl: 'https://github.com/tiagodearaujo13-lab/godoy-shake',
    liveUrl: 'https://godoy-shake.vercel.app',
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/godoy-shake',
      live: 'https://godoy-shake.vercel.app',
    },
  },
  {
    id: 'raiz-e-luz',
    title: 'Raiz & Luz',
    status: 'production',
    statusLabel: 'Institutional Web App',
    featured: false,
    users: 'Presença Digital de Alta Performance',
    role: 'Frontend Engineer & UI Architect',
    impact: 'Presença Digital de Alta Performance',
    description:
      'Aplicação institucional moderna construída com foco em autoridade de marca, design system customizado e conformidade estrita com padrões de acessibilidade.',
    fullDescription:
      'Arquitetura de componentes modularizada e acessível (WCAG AA), compressão avançada de assets estáticos e performance de carregamento ultrarrápida.',
    longDescription:
      'Arquitetura de componentes modularizada e acessível (WCAG AA), compressão avançada de assets estáticos e performance de carregamento ultrarrápida.',
    highlight:
      'Design responsivo suíço com paleta harmônica e estrutura focada em alta retenção e tempo de sessão.',
    techStack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Framer Motion',
    ],
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Framer Motion',
    ],
    githubUrl: 'https://github.com/tiagodearaujo13-lab/raiz-e-luz-web',
    liveUrl: 'https://raiz-e-luz-web-lemon.vercel.app/',
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/raiz-e-luz-web',
      live: 'https://raiz-e-luz-web-lemon.vercel.app/',
    },
  },
];