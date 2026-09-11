import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import ProjectsSection from '@/components/ProjectsSection';
import { projects } from '@/data/projects';

const deployedProjects = projects.filter((project) => {
  const liveUrl = project.liveUrl ?? project.links?.live;
  return typeof liveUrl === 'string' && liveUrl.length > 0;
});

const getLiveLinkFor = (projectTitle: string): HTMLAnchorElement => {
  const liveLink = screen.getByRole('link', {
    name: `Ver projeto ${projectTitle} online`,
  });
  return liveLink as HTMLAnchorElement;
};

describe('Componente ProjectsSection', () => {
  it('deve renderizar o título principal da secção de projetos', () => {
    render(<ProjectsSection />);

    expect(
      screen.getByRole('heading', { level: 2, name: /Projetos & Produtos/i })
    ).toBeInTheDocument();
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

    const liveLink = getLiveLinkFor('DocFácil.pt');
    expect(liveLink).toHaveAttribute('href', 'https://docfacil.pt');
    expect(liveLink).toHaveAttribute('target', '_blank');
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar o botão "Ver Online" para todos os projetos com liveUrl', () => {
    render(<ProjectsSection />);

    expect(deployedProjects.length).toBeGreaterThan(0);

    deployedProjects.forEach((project) => {
      const liveUrl = project.liveUrl ?? project.links?.live;
      const liveLink = getLiveLinkFor(project.title);

      expect(liveLink).toHaveAttribute('href', liveUrl as string);
      expect(liveLink).toHaveAttribute('target', '_blank');
      expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
      expect(liveLink).toHaveAccessibleName(`Ver projeto ${project.title} online`);
    });
  });

  it('deve renderizar o botão "Ver Online" do ClearBounce apontando para o deploy em produção', () => {
    render(<ProjectsSection />);

    const clearBounceLiveLink = getLiveLinkFor('ClearBounce');
    expect(clearBounceLiveLink).toHaveAttribute(
      'href',
      'https://clear-bounce.vercel.app'
    );
    expect(clearBounceLiveLink).toHaveAttribute('target', '_blank');
    expect(clearBounceLiveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar o botão "Ver Online" do Cognirav apontando para o deploy em produção', () => {
    render(<ProjectsSection />);

    const cogniravLiveLink = getLiveLinkFor('Cognirav');
    expect(cogniravLiveLink).toHaveAttribute('href', 'https://cognirav.vercel.app');
    expect(cogniravLiveLink).toHaveAttribute('target', '_blank');
    expect(cogniravLiveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar o botão "Ver Online" do LeadPulse apontando para o deploy em produção', () => {
    render(<ProjectsSection />);

    const leadPulseLiveLink = getLiveLinkFor('LeadPulse');
    expect(leadPulseLiveLink).toHaveAttribute(
      'href',
      'https://leadpulse-bice.vercel.app'
    );
    expect(leadPulseLiveLink).toHaveAttribute('target', '_blank');
    expect(leadPulseLiveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar o botão "Ver Online" do Godoy Shake apontando para o deploy em produção', () => {
    render(<ProjectsSection />);

    const godoyShakeLiveLink = getLiveLinkFor('Godoy Shake');
    expect(godoyShakeLiveLink).toHaveAttribute(
      'href',
      'https://godoy-shake.vercel.app'
    );
    expect(godoyShakeLiveLink).toHaveAttribute('target', '_blank');
    expect(godoyShakeLiveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar o botão "Ver Online" do Raiz & Luz apontando para o deploy em produção', () => {
    render(<ProjectsSection />);

    const raizELuzLiveLink = getLiveLinkFor('Raiz & Luz');
    expect(raizELuzLiveLink).toHaveAttribute(
      'href',
      'https://raiz-e-luz-web-lemon.vercel.app/'
    );
    expect(raizELuzLiveLink).toHaveAttribute('target', '_blank');
    expect(raizELuzLiveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve renderizar o botão "Código" (GitHub) com atributos de segurança para cada projeto com repositório', () => {
    render(<ProjectsSection />);

    const projectsWithRepo = projects.filter((project) => {
      const githubUrl = project.githubUrl ?? project.links?.github;
      return typeof githubUrl === 'string' && githubUrl.length > 0;
    });

    expect(projectsWithRepo.length).toBeGreaterThan(0);

    projectsWithRepo.forEach((project) => {
      const githubUrl = project.githubUrl ?? project.links?.github;
      const githubLink = screen.getByRole('link', {
        name: `Ver código de ${project.title} no GitHub`,
      });

      expect(githubLink).toHaveAttribute('href', githubUrl as string);
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('nao deve renderizar o botão "Ver Online" para projetos sem liveUrl', () => {
    render(<ProjectsSection />);

    projects
      .filter((project) => {
        const liveUrl = project.liveUrl ?? project.links?.live;
        return !(typeof liveUrl === 'string' && liveUrl.length > 0);
      })
      .forEach((project) => {
        expect(
          screen.queryByRole('link', {
            name: `Ver projeto ${project.title} online`,
          })
        ).not.toBeInTheDocument();
      });
  });

  it('deve agrupar os botões "Ver Online" e "Código" no mesmo card de cada projeto', () => {
    render(<ProjectsSection />);

    projects.forEach((project) => {
      const titleHeading = screen.getByRole('heading', { name: project.title });
      const card = titleHeading.closest('article');

      expect(card).not.toBeNull();

      const cardScope = within(card as HTMLElement);
      const liveUrl = project.liveUrl ?? project.links?.live;

      if (typeof liveUrl === 'string' && liveUrl.length > 0) {
        expect(
          cardScope.getByRole('link', {
            name: `Ver projeto ${project.title} online`,
          })
        ).toBeInTheDocument();
      }

      const githubUrl = project.githubUrl ?? project.links?.github;
      if (typeof githubUrl === 'string' && githubUrl.length > 0) {
        expect(
          cardScope.getByRole('link', {
            name: `Ver código de ${project.title} no GitHub`,
          })
        ).toBeInTheDocument();
      }
    });
  });
});
