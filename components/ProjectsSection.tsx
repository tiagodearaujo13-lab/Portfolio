'use client';

import { projects } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';

const baseActionStyles =
  'label-mono inline-flex items-center justify-center gap-2 px-4 py-2 border transition-colors duration-[170ms] ease-in-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current';

const liveActionStyles = [
  baseActionStyles,
  'bg-ink text-paper border-ink',
  'hover:bg-soft-ink hover:border-soft-ink',
  'group-hover:bg-paper group-hover:text-ink group-hover:border-paper',
].join(' ');

const codeActionStyles = [
  baseActionStyles,
  'bg-transparent text-ink border-rule',
  'hover:bg-ink hover:text-paper',
  'group-hover:text-paper group-hover:border-paper',
].join(' ');

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="grid grid-cols-1 lg:grid-cols-[minmax(9rem,0.33fr)_1fr] gap-[clamp(1.5rem,5vw,7rem)] p-[clamp(4rem,10vw,10rem)] px-[var(--page-gutter)] border-b border-rule bg-paper"
      aria-labelledby="projects-heading"
    >
      {/* Coluna Esquerda: Rótulo */}
      <div className="label-mono text-soft">02 / PROJETOS</div>

      {/* Coluna Direita */}
      <div>
        <h2
          id="projects-heading"
          className="font-serif font-normal text-[clamp(2.3rem,5.1vw,5.7rem)] tracking-[-0.06em] leading-[0.94] max-w-[16ch] mb-[clamp(2.25rem,5vw,4.75rem)] text-ink"
        >
          Projetos &amp; Produtos.
        </h2>

        {/* Lista Full-Bleed */}
        <div className="-mx-[var(--page-gutter)] border-t border-b border-rule">
          <div className="divide-y divide-rule">
            {projects.map((project, index) => {
              const kickerNumber = String(index + 1).padStart(2, '0');
              const liveUrl = project.liveUrl || project.links?.live;
              const githubUrl = project.githubUrl || project.links?.github;
              const statusText = (
                project.statusLabel ||
                project.status ||
                'PROJETO'
              ).toUpperCase();
              const stackItems = project.techStack || project.stack || [];

              return (
                <article
                  key={project.id}
                  className="group grid grid-cols-1 md:grid-cols-[minmax(4rem,0.5fr)_minmax(12rem,1.2fr)_2fr_auto] gap-5 items-baseline p-[clamp(1.5rem,3.2vw,3.2rem)] px-[var(--page-gutter)] text-ink transition-colors duration-[170ms] ease-in-out hover:bg-ink hover:text-paper"
                >
                  {/* Coluna 1: Kicker / Status */}
                  <span className="label-mono text-inherit">
                    {kickerNumber} / {statusText}
                  </span>

                  {/* Coluna 2: Título Serifado */}
                  <h3 className="font-serif text-[clamp(1.75rem,3.5vw,4rem)] font-normal tracking-[-0.055em] leading-[0.92] text-inherit">
                    {project.title}
                  </h3>

                  {/* Coluna 3: Descrição & Tags Mono */}
                  <div className="space-y-2 max-w-[28rem]">
                    <p className="font-sans text-[0.95rem] leading-[1.35] text-soft group-hover:text-paper transition-colors duration-[170ms]">
                      {project.description}
                    </p>
                    <div className="label-mono opacity-80 text-[0.62rem]">
                      {stackItems.slice(0, 4).join(' — ').toUpperCase()}
                    </div>
                  </div>

                  {/* Ações: Deploy em Produção + Repositório */}
                  {(liveUrl || githubUrl) && (
                    <div className="md:col-span-4 flex items-center gap-3 flex-wrap mt-4 pt-4 border-t border-quiet group-hover:border-paper/40">
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver projeto ${project.title} online`}
                          className={liveActionStyles}
                        >
                          <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
                          Ver Online
                        </a>
                      )}
                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver código de ${project.title} no GitHub`}
                          className={codeActionStyles}
                        >
                          <Github size={14} strokeWidth={2} aria-hidden="true" />
                          Código
                        </a>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}