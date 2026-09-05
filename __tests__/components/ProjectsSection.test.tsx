import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectsSection from '@/components/ProjectsSection';
import { projects } from '@/data/projects';

describe('Componente ProjectsSection', () => {
  it('deve renderizar o título principal da secção de projetos', () => {
    render(<ProjectsSection />);
    expect(screen.getByRole('heading', { level: 2, name: /Projetos & Produtos/i })).toBeInTheDocument();
  });

  it('deve renderizar os cards de todos os projetos presentes em data/projects.ts', () => {
    render(<ProjectsSection />);

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('deve configurar os atributos dos links externos corretamente', () => {
    render(<ProjectsSection />);

    const docFacilLink = screen.getByText('DocFácil.pt').closest('a');
    expect(docFacilLink).toHaveAttribute('href', 'https://docfacil.pt');
    expect(docFacilLink).toHaveAttribute('target', '_blank');
    expect(docFacilLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
