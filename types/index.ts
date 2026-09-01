export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  status: 'production' | 'development' | 'archived';
  statusLabel: string;
  users?: string;
  stack: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
  highlight?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badge?: string;
}
