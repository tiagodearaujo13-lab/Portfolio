import { experiences, personalInfo, skills } from '@/data/content';
import { projects } from '@/data/projects';
import type { Language } from '@/contexts/LanguageContext';

export interface ProjectCopy {
  statusLabel: string;
  users: string;
  role: string;
  impact: string;
  description: string;
  fullDescription: string;
  highlight: string;
}

export interface SiteCopy {
  nav: {
    role: string;
    cv: string;
    contact: string;
    githubLabel: string;
    linkedinLabel: string;
    cvAria: string;
    githubAria: string;
    linkedinAria: string;
    contactAria: string;
    homeAria: string;
    languageAria: string;
  };
  hero: {
    eyebrow: string;
    availability: string;
    statement: string;
    role: string;
    location: string;
    viewProjects: string;
    downloadCv: string;
    getInTouch: string;
    cvAria: string;
    contactAria: string;
  };
  sections: {
    about: string;
    projects: string;
    tech: string;
    experience: string;
    contact: string;
  };
  about: { headline: string; paragraphs: string[] };
  skills: typeof skills;
  experiences: typeof experiences;
  projects: typeof projects;
  contact: {
    heading: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    response: string;
    success: string;
    error: string;
    aside: string;
    aria: string;
  };
  footer: { backToTop: string; backToTopAria: string };
  modal: {
    document: string;
    title: string;
    closeAria: string;
    intro: string;
    emailLabel: string;
    emailPlaceholder: string;
    privacy: string;
    submit: string;
    processing: string;
    authorised: string;
    successTitle: string;
    successText: string;
    viewWeb: string;
    printInstruction: string;
    close: string;
    errorFallback: string;
  };
  topology: {
    title: string;
    services: string;
    description: string;
    operational: string;
    engine: string;
    node: string;
  };
  cv: {
    title: string;
    role: string;
    profile: string;
    projects: string;
    skills: string;
    experience: string;
    certifications: string;
    projectEntries: Array<{ title: string; meta: string; url: string; description: string; stack: string }>;
    skillGroups: Array<{ title: string; items: string }>;
    careerEntries: Array<{ title: string; company: string; period: string; bullets: string[] }>;
    certificationsList: string[];
    back: string;
  };
}

const pt: SiteCopy = {
  nav: {
    role: 'Engenheiro Full-Stack JS/TS & CSM®', cv: 'CV ↓', contact: 'CONTATO ↗',
    githubLabel: 'GITHUB ↗', linkedinLabel: 'LINKEDIN ↗',
    cvAria: 'Abrir modal para descarregar o Curriculum Vitae',
    githubAria: 'Ver perfil no GitHub (abre em novo separador)',
    linkedinAria: 'Ver perfil no LinkedIn (abre em novo separador)',
    contactAria: 'Ir para a secção de contacto', homeAria: 'Tiago Araújo — Voltar ao início',
    languageAria: 'Selecionar idioma',
  },
  hero: {
    eyebrow: personalInfo.eyebrow, availability: 'DISPONÍVEL PARA PROJETOS & POSIÇÕES FULL-STACK',
    statement: personalInfo.bioStatement, role: personalInfo.role, location: personalInfo.location,
    viewProjects: 'VER PROJETOS →', downloadCv: 'DESCARREGAR CV ↓', getInTouch: 'ENTRAR EM CONTACTO ↗',
    cvAria: 'Abrir modal para descarregar o Curriculum Vitae', contactAria: 'Navegar para a secção de contacto',
  },
  sections: { about: '01 / PERFIL & FILOSOFIA DE ENGENHARIA', projects: '02 / PROJETOS SELECIONADOS', tech: '03 / ARQUITETURA & TECNOLOGIAS', experience: '04 / TRAJETÓRIA & EXPERIÊNCIA', contact: '05 / CONTACTO' },
  about: { headline: personalInfo.bioHeadline, paragraphs: personalInfo.aboutParagraphs },
  skills,
  experiences,
  projects,
  contact: {
    heading: 'Iniciar Diálogo.', name: 'Nome', email: 'E-mail de retorno', subject: 'Assunto', message: 'Mensagem',
    namePlaceholder: 'O seu nome', emailPlaceholder: 'nome@empresa.pt', subjectPlaceholder: 'Como posso ajudar?', messagePlaceholder: 'Descreva o projeto, posição ou desafio técnico.',
    send: 'ENVIAR MENSAGEM →', sending: 'A ENVIAR…', response: 'Resposta direta por e-mail', success: 'Mensagem enviada. Obrigado pelo contacto.', error: 'Não foi possível enviar. Verifique os dados ou tente novamente.',
    aside: 'Tem uma ideia, uma posição ou um sistema para discutir?', aria: 'Outras formas de contacto',
  },
  footer: { backToTop: 'Voltar ao topo ↑', backToTopAria: 'Voltar ao topo da página' },
  modal: {
    document: 'DOCUMENTO OFICIAL / 2026', title: 'Aceder ao Curriculum Vitae', closeAria: 'Fechar modal',
    intro: 'Introduza o seu endereço de e-mail corporativo ou pessoal para desbloquear o acesso ao documento em formato PDF:', emailLabel: 'E-MAIL PROFISSIONAL *', emailPlaceholder: 'exemplo@empresa.com', privacy: 'SEM SPAM · DADOS PROTEGIDOS', submit: 'CONFIRMAR & ACEDER AO CV ↓', processing: 'A PROCESSAR...',
    authorised: 'AUTORIZAÇÃO CONCEDIDA / 2026', successTitle: 'Acesso ao Curriculum Vitae', successText: 'O seu registo foi validado com sucesso. Para garantir que recebe a versão oficial, atualizada e com layout de alta densidade técnica (1 página), aceda à visualização web:', viewWeb: 'VISUALIZAR CV WEB ↗', printInstruction: 'Após abrir o CV Web, clique em “IMPRIMIR / GUARDAR EM PDF” para exportar a versão física oficial de 1 página.', close: 'FECHAR JANELA', errorFallback: 'Ocorreu um erro. Tente novamente.',
  },
  topology: { title: '0002 / TOPOLOGIA DE SISTEMAS DINÂMICA', services: 'CLIENTE • API GATEWAY • REDIS CACHE • POSTGRESQL', description: 'Diagrama de fluxo entre cliente Edge, API Gateway, Redis, PostgreSQL e integrações externas.', operational: '[ESTADO OPERACIONAL: TELEMETRIA ATIVA / LATÊNCIA 12ms]', engine: 'MOTOR: SVG VETORIAL NATIVO • ZERO GPU OVERHEAD • 60 FPS', node: 'NÓ' },
  cv: {
    title: 'CV — Tiago Francisco | Fullstack', role: 'Fullstack Developer · Certified Scrum Master (CSM®)', profile: '01 / Perfil profissional', projects: '02 / Projetos em destaque', skills: '03 / Competências técnicas', experience: '04 / Trajetória profissional', certifications: '05 / Formação & certificações',
    projectEntries: [
      { title: 'DocFácil.pt', meta: '— SaaS EM PRODUÇÃO · +300 UTILIZADORES', url: 'docfacil.pt ↗', description: 'Plataforma SaaS LegalTech para orquestração, automação e geração algorítmica de documentos jurídicos. Monólito modular com React, Node.js/Express, PostgreSQL, Stripe e webhooks idempotentes.', stack: 'REACT — NODE — EXPRESS — POSTGRESQL — STRIPE — JWT — TAILWIND' },
      { title: 'LeadPulse', meta: '— B2B EXTENSION & API', url: 'leadpulse-bice.vercel.app ↗', description: 'Módulo cliente/servidor e extensão Chrome para captação, raspagem programática e validação de leads B2B, com isolamento de contexto, sanitização e rate limiter adaptativo.', stack: 'TYPESCRIPT — REACT — NODE — EXPRESS — CHROME API — VITEST' },
      { title: 'Cognirav', meta: '— FULL-STACK PLATFORM', url: 'cognirav.vercel.app ↗', description: 'Sistema ponta a ponta para baterias psicométricas, computação algorítmica de score e diagnósticos analíticos, com engine de avaliação em React Context API.', stack: 'TYPESCRIPT — REACT — NODE — EXPRESS — CONTEXT API — CANVAS' },
    ],
    skillGroups: [
      { title: 'FRONTEND & INTERFACES', items: 'TYPESCRIPT — REACT — NEXT.JS — VITE — TAILWIND — CONTEXT API — WCAG 2.1 AA' }, { title: 'BACKEND & DISTRIBUÍDOS', items: 'NODE — EXPRESS — REST APIS — JWT — OAUTH 2.0 — BCRYPT — RATE LIMITING' }, { title: 'PERSISTÊNCIA & DADOS', items: 'POSTGRESQL — MODELAGEM RELACIONAL — MIGRAÇÕES — QUERIES — ACID' }, { title: 'QUALIDADE & DEVOPS', items: 'STRIPE — CHROME EXTENSIONS — VITEST — GIT — CI/CD — VERCEL — SCRUM — KANBAN' },
    ],
    careerEntries: [
      { title: 'Fundador & Lead Fullstack Engineer', company: '— DocFácil.pt', period: '2024 — PRESENTE', bullets: ['Arquitetura e implementação ponta a ponta de SaaS com +300 utilizadores ativos em produção.', 'Motor de compilação dinâmica de contratos, Stripe Checkout, webhooks idempotentes e autenticação JWT + OAuth 2.0.'] },
      { title: 'Fullstack Developer', company: '— Consultoria Independente', period: '2023 — PRESENTE', bullets: ['Arquitetura PERN/MERN com monólitos modulares, APIs limpas e contratos semânticos.', 'Extensões Chrome B2B, Clean Architecture, Vitest e pipelines CI/CD automatizados.'] },
      { title: 'Gestão Operacional & Liderança Executiva', company: '— Hotelaria & Alta Gastronomia', period: '2003 — 2023', bullets: ['Liderança de equipas de +20 colaboradores em ambientes de alta pressão e precisão contínua.', 'Gestão de cadeia de suprimentos, orçamento e entregas críticas sob modelo Just-in-Time.'] },
    ],
    certificationsList: ['Certified Scrum Master® (CSM) — Scrum Alliance', 'Team Kanban Practitioner® (TKP) — Kanban University', 'Certified Agile Coach (CAC) — MASSIMUS', 'Engenharia Full-Stack JavaScript/TypeScript — Mate Academy Brasil'], back: '← VOLTAR AO PORTFÓLIO',
  },
};

const en: SiteCopy = {
  ...pt,
  nav: { ...pt.nav, role: 'Full-Stack JS/TS Engineer & CSM®', cv: 'RESUME ↓', contact: 'CONTACT ↗', githubLabel: 'GITHUB ↗', linkedinLabel: 'LINKEDIN ↗', cvAria: 'Open the Curriculum Vitae access modal', contactAria: 'Go to the contact section', homeAria: 'Tiago Araújo — Return to home', languageAria: 'Select language' },
  hero: { ...pt.hero, eyebrow: 'SOFTWARE ENGINEERING & PRODUCT ARCHITECTURE', availability: 'AVAILABLE FOR PROJECTS & FULL-STACK ROLES', statement: 'Engineering resilient, scalable, and high-availability web systems using TypeScript, Node.js, and React. Founder & Lead Engineer of a production SaaS platform serving 300+ active users, channeling two decades of mission-critical operational leadership into predictable software engineering, clean code, and Just-in-Time execution.', role: 'Full-Stack Software Engineer | Certified Scrum Master (CSM®)', viewProjects: 'VIEW PROJECTS →', downloadCv: 'DOWNLOAD RESUME ↓', getInTouch: 'GET IN TOUCH ↗', cvAria: 'Open the Curriculum Vitae access modal', contactAria: 'Navigate to the contact section' },
  sections: { about: '01 / PROFILE & ENGINEERING PHILOSOPHY', projects: '02 / SELECTED PROJECTS', tech: '03 / ARCHITECTURE & TECH STACK', experience: '04 / CAREER TIMELINE', contact: '05 / CONTACT' },
  about: { headline: 'Scalable architecture, decoupled systems, and real products in production.', paragraphs: ['High-performance software engineering shares the principles of mission-critical operations at scale: rigorous organisation, decoupled architecture, zero tolerance for production failure, and an uncompromising focus on delivering real user value.', 'For 20 years, I led multidisciplinary teams of more than 20 professionals in high-pressure, high-precision environments. That experience built rare executive maturity: translating between business stakeholders, prioritising technical backlogs under uncertainty, and delivering on time.', 'As founder and engineer of DocFácil.pt, I designed and shipped a complete LegalTech solution: relational modelling in PostgreSQL, secure authentication pipelines, a runtime document compilation engine, and asynchronous Stripe webhook payment processing.'] },
  skills: pt.skills.map((skill) => ({ ...skill, category: skill.category.replace('ACESSIBILIDADE', 'ACCESSIBILITY').replace('INTEGRAÇÕES, QUALIDADE & DEVOPS', 'INTEGRATIONS, QUALITY & DEVOPS').replace('BACKEND & DISTRIBUÍDOS', 'BACKEND & DISTRIBUTED').replace('PERSISTÊNCIA & DADOS', 'PERSISTENCE & DATA'), items: skill.items.map((item) => item.replace('Acessibilidade', 'Accessibility').replace('Testes Automatizados', 'Automated Testing').replace('Modelagem Relacional', 'Relational Modelling').replace('Migrações de Schema', 'Schema Migrations').replace('Otimização de Queries', 'Query Optimisation').replace('Integridade Transacional', 'Transactional Integrity').replace('Liderança de Equipas', 'Team Leadership').replace('Gestão de Crise', 'Crisis Management').replace('Tomada de Decisão', 'Decision Making').replace('Controlo Orçamentário', 'Budget Control')) })),
  experiences: pt.experiences.map((experience) => ({ ...experience, role: experience.role.replace('Engenheiro de Software', 'Full-Stack Software Engineer').replace('Projetos Próprios / Freelancer', 'Independent Projects / Freelancer').replace('Gestão Operacional & Liderança Executiva de Equipas', 'Operational Management & Executive Team Leadership'), company: experience.company.replace('Consultoria Independente de Engenharia Web', 'Independent Web Engineering Consultancy'), description: experience.description.map((item) => item.replace('Idealização, arquitetura de sistemas e implementação ponta a ponta de plataforma SaaS', 'End-to-end SaaS product conception, systems architecture and implementation').replace('Engenharia de software com foco na arquitetura', 'Software engineering focused on').replace('Liderança direta e coordenação diária de equipas multidisciplinares', 'Direct leadership and daily coordination of multidisciplinary teams')) })),
  contact: { ...pt.contact, heading: 'Start a Dialogue.', name: 'Name', email: 'Reply email', subject: 'Subject', message: 'Message', namePlaceholder: 'Your name', emailPlaceholder: 'name@company.com', subjectPlaceholder: 'How can I help?', messagePlaceholder: 'Describe the project, role or technical challenge.', send: 'SEND MESSAGE →', sending: 'SENDING…', response: 'Direct email response', success: 'Message sent. Thank you for getting in touch.', error: 'Unable to send. Check your details or try again.', aside: 'Have an idea, a role or a system to discuss?', aria: 'Other ways to get in touch' },
  footer: { backToTop: 'Back to top ↑', backToTopAria: 'Return to the top of the page' },
  modal: { ...pt.modal, document: 'OFFICIAL DOCUMENT / 2026', title: 'Access Curriculum Vitae', closeAria: 'Close modal', intro: 'Enter your professional or personal email to unlock access to the document in PDF format:', emailLabel: 'PROFESSIONAL EMAIL *', emailPlaceholder: 'example@company.com', privacy: 'NO SPAM · DATA PROTECTED', submit: 'CONFIRM & ACCESS RESUME ↓', processing: 'PROCESSING...', authorised: 'AUTHORISATION GRANTED / 2026', successTitle: 'Access Curriculum Vitae', successText: 'Your registration has been validated successfully. To ensure you receive the official, up-to-date version with a high-density technical layout (1 page), open the web view:', viewWeb: 'VIEW WEB RESUME ↗', printInstruction: 'Once opened, click “PRINT / SAVE AS PDF” to export the official 1-page document.', close: 'CLOSE WINDOW' },
  topology: { title: '0002 / DYNAMIC SYSTEM TOPOLOGY', services: 'CLIENT • API GATEWAY • REDIS CACHE • POSTGRESQL', description: 'Flow diagram between Edge client, API Gateway, Redis, PostgreSQL and external integrations.', operational: '[OPERATIONAL STATUS: ACTIVE TELEMETRY / LATENCY 12ms]', engine: 'ENGINE: NATIVE VECTOR SVG • ZERO GPU OVERHEAD • 60 FPS', node: 'NODE' },
  cv: { ...pt.cv, title: 'CV — Tiago Francisco | Fullstack', role: 'Fullstack Developer · Certified Scrum Master (CSM®)', profile: '01 / Professional profile', projects: '02 / Selected projects', skills: '03 / Technical capabilities', experience: '04 / Professional timeline', certifications: '05 / Education & certifications', projectEntries: [{ title: 'DocFácil.pt', meta: '— PRODUCTION SaaS · 300+ USERS', url: 'docfacil.pt ↗', description: 'LegalTech SaaS platform for orchestrating, automating and algorithmically generating legal documents. Modular monolith with React, Node.js/Express, PostgreSQL, Stripe and idempotent webhooks.', stack: 'REACT — NODE — EXPRESS — POSTGRESQL — STRIPE — JWT — TAILWIND' }, { title: 'LeadPulse', meta: '— B2B EXTENSION & API', url: 'leadpulse-bice.vercel.app ↗', description: 'Client/server module and Chrome extension for B2B lead capture, programmatic scraping and validation, with context isolation, sanitisation and adaptive rate limiting.', stack: 'TYPESCRIPT — REACT — NODE — EXPRESS — CHROME API — VITEST' }, { title: 'Cognirav', meta: '— FULL-STACK PLATFORM', url: 'cognirav.vercel.app ↗', description: 'End-to-end system for psychometric batteries, algorithmic scoring and analytical profile diagnostics, powered by a React Context API evaluation engine.', stack: 'TYPESCRIPT — REACT — NODE — EXPRESS — CONTEXT API — CANVAS' }], skillGroups: [{ title: 'FRONTEND & INTERFACES', items: 'TYPESCRIPT — REACT — NEXT.JS — VITE — TAILWIND — CONTEXT API — WCAG 2.1 AA' }, { title: 'BACKEND & DISTRIBUTED', items: 'NODE — EXPRESS — REST APIS — JWT — OAUTH 2.0 — BCRYPT — RATE LIMITING' }, { title: 'PERSISTENCE & DATA', items: 'POSTGRESQL — RELATIONAL MODELLING — MIGRATIONS — QUERIES — ACID' }, { title: 'QUALITY & DEVOPS', items: 'STRIPE — CHROME EXTENSIONS — VITEST — GIT — CI/CD — VERCEL — SCRUM — KANBAN' }], careerEntries: [{ title: 'Founder & Lead Fullstack Engineer', company: '— DocFácil.pt', period: '2024 — PRESENT', bullets: ['End-to-end SaaS architecture and implementation serving 300+ active users in production.', 'Dynamic contract compilation engine, Stripe Checkout, idempotent webhooks and JWT + OAuth 2.0 authentication.'] }, { title: 'Fullstack Developer', company: '— Independent Consultancy', period: '2023 — PRESENT', bullets: ['PERN/MERN architecture with modular monoliths, clean APIs and semantic integration contracts.', 'B2B Chrome extensions, Clean Architecture, Vitest and automated CI/CD pipelines.'] }, { title: 'Operational Management & Executive Leadership', company: '— Hospitality & Fine Dining', period: '2003 — 2023', bullets: ['Led teams of 20+ professionals in high-pressure environments requiring continuous precision.', 'Managed supply chains, budgets and critical deliveries under a Just-in-Time model.'] }], certificationsList: ['Certified Scrum Master® (CSM) — Scrum Alliance', 'Team Kanban Practitioner® (TKP) — Kanban University', 'Certified Agile Coach (CAC) — MASSIMUS', 'Full-Stack JavaScript/TypeScript Engineering — Mate Academy Brasil'], back: '← BACK TO PORTFOLIO' },
};

export const copyByLanguage: Record<Language, SiteCopy> = { pt, en };
export const projectCopyByLanguage: Record<Language, Record<string, ProjectCopy>> = {
  pt: Object.fromEntries(projects.map((project) => [project.id, { statusLabel: project.statusLabel || 'PROJETO', users: project.users || '', role: project.role || '', impact: project.impact || '', description: project.description, fullDescription: project.fullDescription || '', highlight: project.highlight || '' }])) as Record<string, ProjectCopy>,
  en: {
    mergedesks: { statusLabel: 'Production SaaS', users: 'Asynchronous Engineering Capacity', role: 'Founder & Lead Full-Stack Engineer', impact: 'Production-Ready Pull Requests in 48 Hours', description: 'Asynchronous engineering capacity delivered through focused GitHub Issues and production-ready pull requests.', fullDescription: 'Founder Desk subscription service with a linear queue of one active task, no calls or meetings, and PR delivery within 48 hours, with pause or cancellation at any time.', highlight: 'Asynchronous engineering model: one active task in a linear queue and production pull requests within 48 hours, without meetings.' },
    'normasafe-haccp': { statusLabel: 'Food Safety Platform', users: 'Digital HACCP Compliance', role: 'Founder & Lead Full-Stack Engineer', impact: 'Digital HACCP Compliance', description: 'Web application for digitising and managing HACCP plans, providing structured and auditable compliance with food safety standards.', fullDescription: 'Next.js App Router and strict TypeScript platform for critical control points, monitoring records and food compliance documentation.', highlight: 'HACCP plan digitisation: critical control points, monitoring and audit evidence in one system.' },
    docfacil: { statusLabel: 'Production SaaS', users: '300+ Active Users', role: 'Founder & Lead Full-Stack Engineer', impact: '300+ Active Users in Production', description: 'LegalTech SaaS platform for orchestrating, automating and algorithmically generating legal documents and contracts at runtime.', fullDescription: 'High-cohesion modular monolith with React.js, Node.js/Express, PostgreSQL on Neon.tech and Stripe Checkout with idempotent webhooks.', highlight: 'Proprietary dynamic PDF compilation engine evaluating logical dependencies and injecting custom contract clauses in milliseconds.' },
    clearbounce: { statusLabel: 'B2B SaaS Monorepo', users: 'SMTP List Validation at Scale', role: 'Founder & Lead Full-Stack Engineer', impact: 'Secure SMTP Pipeline & Transactional Billing', description: 'Self-service B2B platform for validating and cleaning email lists at scale, detecting invalid addresses, disposable domains and non-existent accounts through a secure SMTP pipeline.', fullDescription: 'Cohesive monorepo with Fastify SMTP validation, BullMQ queues, Next.js self-service and OWASP Top 10 security controls including SSRF protection, layered rate limiting and hashed API keys.', highlight: 'SMTP verification pipeline with SSRF protection and asynchronous list processing through BullMQ queues on Redis.' },
    leadpulse: { statusLabel: 'B2B Extension & API', users: 'Active Extraction & Licensing', role: 'Software Architect & Full-Stack Developer', impact: 'Active Extraction & Licensing', description: 'Client/server module and Chrome extension for B2B lead capture, programmatic scraping and company data validation.', fullDescription: 'Secure architecture with isolated Chrome scripts, strict DOM sanitisation, JWT authentication, adaptive backend rate limiting and Vitest coverage.', highlight: 'Defensive security layer: custom DOM sanitiser, transactional licence validation and isolated execution context.' },
    cognirav: { statusLabel: 'Full-Stack Platform', users: 'Cognitive & Psychometric Assessment', role: 'Full-Stack Software Engineer', impact: 'Cognitive & Psychometric Assessment', description: 'End-to-end system for psychometric batteries, algorithmic scoring and analytical profile diagnostics.', fullDescription: 'Modular monorepo with a React Context API evaluation engine orchestrating 30+ questionnaire dimensions, asynchronous Express persistence and strict TypeScript.', highlight: 'Deterministic cognitive scoring algorithm with profile reports and shareable cards generated through the Canvas API.' },
    'godoy-shake': { statusLabel: 'Mobile-First E-Commerce', users: 'Conversion & Real-Time Orders', role: 'Frontend & UX Engineer', impact: 'Conversion & Real-Time Orders', description: 'Interactive catalogue and high-conversion ordering engine optimised for mobile navigation, fluid micro-interactions and an agile checkout.', fullDescription: 'Built around Core Web Vitals, accessible navigation and a responsive food catalogue.', highlight: 'Frictionless transactional checkout with local selection validation and responsive microstates.' },
    'raiz-e-luz': { statusLabel: 'Institutional Web App', users: 'High-Performance Digital Presence', role: 'Frontend Engineer & UI Architect', impact: 'High-Performance Digital Presence', description: 'Modern institutional application focused on brand authority, a custom design system and strict accessibility standards.', fullDescription: 'Modular, accessible component architecture (WCAG AA), advanced static asset compression and fast loading performance.', highlight: 'Swiss responsive design with a harmonious palette focused on retention and session time.' },
  },
};

export function getProjectCopy(lang: Language, id: string): ProjectCopy {
  return projectCopyByLanguage[lang][id] ?? projectCopyByLanguage.pt[id];
}
