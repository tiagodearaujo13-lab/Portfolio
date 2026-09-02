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

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

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
