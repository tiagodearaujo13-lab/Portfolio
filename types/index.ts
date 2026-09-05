/**
 * Modelo de contratos e tipos estritos do domínio da aplicação.
 * Zero uso de `any`, garantindo tipagem forte e imutabilidade.
 */

export type SkillCategoryType =
  | 'Backend'
  | 'Frontend'
  | 'Database'
  | 'DevOps'
  | 'Architecture';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  role?: string;
  impact?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  // Propriedades suplementares para apresentação de interface
  status?: 'production' | 'development' | 'archived';
  statusLabel?: string;
  users?: string;
  longDescription?: string;
  highlight?: string;
  stack?: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

export interface TechSkill {
  name: string;
  category: SkillCategoryType;
  iconName?: string;
  level?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
  location?: string;
  technologies?: string[];
}

export type ExperienceItem = Experience;

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

/**
 * Contrato padrão padronizado para respostas da API.
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
