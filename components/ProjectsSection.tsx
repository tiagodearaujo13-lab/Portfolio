'use client';

import { projects } from '@/data/projects';

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
              const linkUrl = project.links.live || project.links.github || '#';

              return (
                <a
                  key={project.id}
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 md:grid-cols-[minmax(4rem,0.5fr)_minmax(12rem,1.2fr)_2fr_auto] gap-5 items-baseline p-[clamp(1.5rem,3.2vw,3.2rem)] px-[var(--page-gutter)] text-ink no-underline transition-colors duration-[170ms] ease-in-out hover:bg-ink hover:text-paper"
                >
                  {/* Coluna 1: Kicker / Status */}
                  <span className="label-mono text-inherit">
                    {kickerNumber} / {project.statusLabel.toUpperCase()}
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
                      {project.stack.slice(0, 4).join(' — ').toUpperCase()}
                    </div>
                  </div>

                  {/* Coluna 4: Seta */}
                  <span
                    className="font-sans text-2xl leading-none text-inherit transition-transform duration-[170ms] ease-in-out group-hover:translate-x-[0.35rem]"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}