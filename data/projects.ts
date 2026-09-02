export interface Project {
  id: string;
  title: string;
  status: 'production' | 'development' | 'archived';
  statusLabel: string;
  featured?: boolean;
  users?: string;
  description: string;
  longDescription?: string;
  highlight?: string;
  stack: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'docfacil',
    title: 'DocFácil.pt',
    status: 'production',
    statusLabel: 'SaaS em Produção',
    featured: true,
    users: '+300 Utilizadores Ativos',
    description:
      'Plataforma SaaS LegalTech para orquestração, automação e geração algorítmica de documentos e contratos jurídicos em tempo de execução.',
    longDescription:
      'Projetado como um monólito modular de alta coesão: frontend reativo em React.js, API RESTful desacoplada em Node.js/Express, persistência de dados em PostgreSQL gerenciado na Neon.tech e sistema financeiro integrado com Stripe Checkout via webhooks idempotentes.',
    highlight:
      'Motor proprietário de compilação dinâmica de PDFs que avalia dependências lógicas e injeta cláusulas contratuais customizadas em microssegundos.',
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
    links: {
      live: 'https://docfacil.pt',
      github: 'https://github.com/tiagodearaujo13-lab',
    },
  },
  {
    id: 'leadpulse',
    title: 'LeadPulse',
    status: 'production',
    statusLabel: 'B2B Extension & API',
    featured: false,
    users: 'Extração & Licenciamento Ativo',
    description:
      'Módulo cliente/servidor e extensão Chrome voltada à captação, raspagem programática e validação cadastral de leads corporativos B2B.',
    longDescription:
      'Arquitetura segura com injeção de scripts isolados (Chrome API), sanitizador estrito de DOM contra injeções de script (anti-XSS), controle de autenticação JWT, rate limiter adaptativo no backend e suíte de testes unitários com Vitest.',
    highlight:
      'Camada defensiva de segurança: DOMSanitizer customizado, validação transacional de licenças ativas e isolamento de contexto de execução.',
    stack: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express',
      'Chrome Extension API',
      'Vitest',
      'Tailwind CSS',
    ],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/leadpulse',
    },
  },
  {
    id: 'cognirav',
    title: 'Cognirav',
    status: 'development',
    statusLabel: 'Full-Stack Platform',
    featured: false,
    users: 'Avaliação Cognitiva & Psicométrica',
    description:
      'Sistema de ponta a ponta para execução de baterias psicométricas, computação algorítmica de score e geração de diagnósticos analíticos de perfil.',
    longDescription:
      'Monorepo modular estruturado em server/ e web/. Engine de avaliação em React Context API orquestrando 30+ dimensões de questionários com persistência assíncrona em API Express e tipagem estrita com TypeScript.',
    highlight:
      'Algoritmo determinístico de cálculo de score cognitivo com geração de relatórios de perfil e cards para compartilhamento instantâneo via Canvas API.',
    stack: [
      'TypeScript',
      'React.js (Vite)',
      'Node.js',
      'Express',
      'React Context API',
      'Canvas API',
      'Tailwind CSS',
    ],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/cognirav',
    },
  },
  {
    id: 'godoy-shake',
    title: 'Godoy Shake',
    status: 'production',
    statusLabel: 'E-Commerce Mobile-First',
    featured: false,
    users: 'Conversão & Pedidos em Tempo Real',
    description:
      'Catálogo interativo e motor de pedidos de alta conversão, otimizado para navegação mobile com microinterações fluidas e checkout ágil.',
    longDescription:
      'Desenvolvido com foco em Core Web Vitals (zero Cumulative Layout Shift, carregamento abaixo de 800ms), navegação acessível e catálogo responsivo de produtos alimentares.',
    highlight:
      'Fluxo de checkout transacional direto sem atrito com microestados de seleção e validação local.',
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Lucide React',
    ],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/godoy-shake',
    },
  },
  {
    id: 'raiz-e-luz',
    title: 'Raiz & Luz',
    status: 'production',
    statusLabel: 'Institutional Web App',
    featured: false,
    users: 'Presença Digital de Alta Performance',
    description:
      'Aplicação institucional moderna construída com foco em autoridade de marca, design system customizado e conformidade estrita com padrões de acessibilidade.',
    longDescription:
      'Arquitetura de componentes modularizada e acessível (WCAG AA), compressão avançada de assets estáticos e performance de carregamento ultrarrápida.',
    highlight:
      'Design responsivo suíço com paleta harmônica e estrutura focada em alta retenção e tempo de sessão.',
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Framer Motion',
    ],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/raiz-e-luz-web',
    },
  },
];