'use client';

import { experiences } from '@/data/content';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ExperienceTimeline() {
  return (
    <section
      id="experiencia"
      className="grid grid-cols-1 lg:grid-cols-[minmax(9rem,0.33fr)_1fr] gap-[clamp(1.5rem,5vw,7rem)] p-[clamp(4rem,10vw,10rem)] px-[var(--page-gutter)] border-b border-rule bg-paper"
      aria-labelledby="experience-heading"
    >
      {/* Coluna Esquerda: Rótulo */}
      <div className="label-mono text-soft">04 / EXPERIÊNCIA</div>

      {/* Coluna Direita */}
      <div>
        <ScrollReveal direction="left">
          <h2
            id="experience-heading"
            className="font-serif font-normal text-[clamp(2.3rem,5.1vw,5.7rem)] tracking-[-0.06em] leading-[0.94] max-w-[16ch] mb-[clamp(2.25rem,5vw,4.75rem)] text-ink"
          >
            Trajetória de Engenharia.
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} direction="up" delay={index * 150}>
            <article
              key={exp.id}
              className={`py-8 ${
                index > 0 ? 'border-t border-quiet' : 'border-t border-rule'
              }`}
            >
              {/* Cabeçalho: Cargo + Período */}
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                <h3 className="font-serif text-[clamp(1.25rem,2.2vw,2.2rem)] font-normal text-ink leading-tight">
                  {exp.role}{' '}
                  <span className="font-sans text-soft font-light">
                    — {exp.company}
                  </span>
                </h3>
                <span className="label-mono text-soft">{exp.period}</span>
              </div>

              {/* Bullets de Resultados */}
              <ul className="space-y-2 mb-4 list-none pl-0">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="font-serif text-[clamp(0.95rem,1.4vw,1.15rem)] leading-[1.45] text-soft max-w-[48rem] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-ink before:text-[0.75rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags de Tecnologias */}
              <div className="label-mono text-soft text-[0.65rem] flex flex-wrap gap-2">
                {(exp.techStack || exp.technologies || []).map((tech) => (
                  <span
                    key={tech}
                    className="border border-quiet px-2 py-0.5 text-ink"
                  >
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
