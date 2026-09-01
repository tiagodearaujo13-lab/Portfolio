import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'docfacil',
    title: 'DocFácil.pt',
    description:
      'Plataforma SaaS LegalTech em produção que simplifica a criação e gestão de documentos legais para cidadãos e PMEs portuguesas.',
    longDescription:
      'Arquitetura full-stack com autenticação JWT/Bcrypt e Google OAuth 2.0, processamento de pagamentos via Stripe Webhooks, motor de renderização de PDF dinâmico e base de dados PostgreSQL gerida na Neon.tech.',
    status: 'production',
    statusLabel: 'Em Produção',
    users: '+300 Utilizadores Ativos',
    stack: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Stripe',
      'JWT',
      'Google OAuth',
      'PDF Engine',
    ],
    links: {
      live: 'https://docfacil.pt',
    },
    featured: true,
    highlight:
      'SaaS LegalTech com motor de geração de documentos legais e sistema de pagamentos integrado.',
  },
  {
    id: 'portfolio',
    title: 'Portfólio Pessoal',
    description:
      'Este mesmo website — construído com Next.js 15, TypeScript e Tailwind CSS com design minimalista e dark mode nativo.',
    status: 'production',
    statusLabel: 'Ao Vivo',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab',
    },
    featured: false,
  },
  {
    id: 'projeto-3',
    title: 'Em Breve',
    description:
      'Próximo projeto em desenvolvimento. Acompanha o GitHub para ser o primeiro a saber.',
    status: 'development',
    statusLabel: 'Em Desenvolvimento',
    stack: ['React', 'TypeScript', 'Node.js'],
    links: {
      github: 'https://github.com/tiagodearaujo13-lab',
    },
    featured: false,
  },
];
