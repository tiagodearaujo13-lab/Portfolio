import { SkillCategory, SocialLink, Experience, Certification } from '@/types';

export const siteConfig = {
  name: 'Tiago Araújo Francisco',
  title: 'Desenvolvedor Full-Stack JS/TS | Certified Scrum Master (CSM®)',
  location: 'Lagoa, Faro, Portugal',
  email: 'tiagodearaujo13@gmail.com',
  phone: '+351 939 347 977',
  whatsapp: 'https://wa.me/351939347977',
  pitch:
    '20 anos de liderança em operações e alta gastronomia canalizados para engenharia de software ágil, arquitetura limpa e entrega Just-in-Time com tolerância zero a falhas críticas.',
  available: true,
  availabilityText: 'Disponível para projetos & posições Full-Stack',
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

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'Vite' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'RESTful APIs' },
      { name: 'JWT / Auth' },
      { name: 'Nodemailer' },
      { name: 'Stripe' },
    ],
  },
  {
    category: 'Base de Dados',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'SQL' },
      { name: 'Neon.tech' },
      { name: 'Google OAuth' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'CI/CD' },
      { name: 'Vercel' },
      { name: 'Clean Architecture' },
    ],
  },
  {
    category: 'Metodologias',
    icon: '📋',
    skills: [
      { name: 'Scrum (CSM®)' },
      { name: 'Kanban (TKP®)' },
      { name: 'Agile' },
      { name: 'Just-in-Time' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'dev-freelance',
    role: 'Desenvolvedor Full-Stack Freelance',
    company: 'Independente',
    period: '2023 — Presente',
    location: 'Lagoa, Faro, Portugal',
    description: [
      'Fundação e desenvolvimento integral do DocFácil.pt — SaaS LegalTech em produção com +300 utilizadores ativos.',
      'Arquitetura full-stack com React, Node.js, PostgreSQL, integração Stripe e autenticação Google OAuth 2.0.',
      'Entrega de soluções web para clientes com foco em performance, UX e clean architecture.',
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Next.js'],
  },
  {
    id: 'ops-leader',
    role: 'Diretor de Operações & Líder de Equipa',
    company: 'Alta Gastronomia (Internacional)',
    period: '2003 — 2023',
    location: 'Portugal & Internacional',
    description: [
      'Liderança de equipas de até +20 pessoas em ambientes de alta pressão e exigência operacional.',
      'Gestão de processos críticos com tolerância zero a falhas, aplicando metodologias Just-in-Time.',
      'Tomada de decisão estratégica, resolução de problemas complexos e foco obsessivo em qualidade.',
    ],
    skills: ['Liderança', 'Gestão de Equipas', 'Operações', 'Just-in-Time'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'Certified Scrum Master®',
    issuer: 'Scrum Alliance',
    year: '2024',
    badge: 'CSM®',
  },
  {
    name: 'Team Kanban Practitioner®',
    issuer: 'Kanban University',
    year: '2024',
    badge: 'TKP®',
  },
  {
    name: 'Full-Stack JavaScript/TypeScript',
    issuer: 'Formação Especializada',
    year: '2023',
    badge: 'FS',
  },
];

export const aboutContent = {
  headline: 'Engenharia com a disciplina de quem já liderou cozinhas Michelin.',
  paragraphs: [
    'Fiz a transição de 20 anos a liderar operações de alta gastronomia para a engenharia de software. Não por acaso — mas porque reconheci que as duas disciplinas exigem o mesmo: arquitetura sólida, execução impecável e zero margem para falha crítica.',
    'Construí o DocFácil.pt do zero: desde a arquitetura de base de dados até à UI, integração de pagamentos e motor de geração de PDFs. Em produção, com utilizadores reais, resolvendo problemas reais.',
    'Trago para cada projeto a mentalidade de um chefe de cozinha de alto nível: obsessão com qualidade, liderança por exemplo e entrega consistente sob pressão.',
  ],
  values: [
    { icon: '⚡', label: 'Entrega Just-in-Time' },
    { icon: '🎯', label: 'Tolerância Zero a Falhas Críticas' },
    { icon: '🏗️', label: 'Clean Architecture' },
    { icon: '👥', label: 'Liderança de Equipas' },
  ],
};
