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
    statusLabel: 'Em Produção',
    featured: true,
    users: '+300 Utilizadores Ativos',
    description:
      'Plataforma SaaS de LegalTech para geração e automação inteligente de contratos e documentos jurídicos em tempo real.',
    longDescription:
      'Arquitetura full-stack escalável com frontend modular em React, backend em Node.js/Express, persistência de dados em PostgreSQL (Neon.tech), integração com Stripe Checkout (Webhooks) e autenticação JWT/Google OAuth 2.0.',
    highlight:
      'Motor proprietário de renderização dinâmica de PDFs com adaptação algorítmica de cláusulas contratuais em tempo de execução.',
    stack: [
      'React.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Stripe API',
      'JWT',
      'Tailwind CSS',
      '@react-pdf/renderer'
    ],
    links: {
      live: 'https://docfacil.pt',
      github: 'https://github.com/tiagodearaujo13-lab'
    }
  },
  {
    id: 'leadpulse',
    title: 'LeadPulse',
    status: 'production',
    statusLabel: 'Em Produção',
    featured: false,
    users: 'B2B Extension & API',
    description:
      'Extensão para navegador e backend voltado à captação, raspagem e validação de leads B2B com sistema de licenças ativas.',
    longDescription:
      'Desenvolvido com content scripts, sanitização de DOM contra vulnerabilidades XSS, autenticação JWT, rate limiter adaptativo e suíte de testes com Vitest.',
    highlight:
      'Arquitetura com proteção multicamada: DOMSanitizer customizado, isolamento de contexto no Chrome API e rotas de webhooks seguras.',
    stack: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express',
      'Chrome Extension API',
      'Tailwind CSS',
      'Vitest'
    ],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/leadpulse'
    }
  },
  {
    id: 'cognirav',
    title: 'Cognirav',
    status: 'development',
    statusLabel: 'Full-Stack App',
    featured: false,
    users: 'Avaliação Cognitiva',
    description:
      'Plataforma interativa para aplicação de testes psicométricos, cálculo algorítmico de pontuação e relatórios de perfil.',
    longDescription:
      'Separação entre server/ e web/. Engine reativa com React Context API para gerenciar 30+ dimensões de perguntas e API REST em Express com TypeScript ponta a ponta.',
    highlight:
      'Sistema de cálculo dinâmico de score e geração de cards de compartilhamento social com canvas/exportação instantânea.',
    stack: [
      'TypeScript',
      'React.js (Vite)',
      'Node.js',
      'Express',
      'React Context API',
      'Tailwind CSS'
    ],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/cognirav'
    }
  },
  {
    id: 'godoy-shake',
    title: 'Godoy Shake',
    status: 'production',
    statusLabel: 'Em Produção',
    featured: false,
    users: 'Web App de Pedidos',
    description:
      'Catálogo interativo mobile-first para cardápio digital, personalização de pedidos de nutrição e conversão rápida.',
    longDescription:
      'Interface focada em UI/UX moderna, alta velocidade de resposta, componentes acessíveis e navegação direta para conversão de pedidos.',
    highlight:
      'Fluxo de pedidos direto e intuitivo otimizado para dispositivos móveis.',
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Lucide React'
    ],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/godoy-shake'
    }
  },
  {
    id: 'raiz-e-luz',
    title: 'Raiz & Luz',
    status: 'production',
    statusLabel: 'Website Institucional',
    featured: false,
    users: 'Branding & Presença Digital',
    description:
      'Website institucional com identidade visual consistente, assets visuais otimizados e foco em autoridade de marca.',
    longDescription:
      'Desenvolvido com diretrizes de acessibilidade WCAG, otimização de imagens, tipografia balanceada e design system responsivo.',
    highlight:
      'Design responsivo de alta fidelidade com paleta harmonizada e navegação fluida.',
    stack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Framer Motion'
    ],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab/raiz-e-luz-web'
    }
  }
];