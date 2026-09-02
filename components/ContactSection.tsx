'use client';

import { personalInfo } from '@/data/content';

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="grid grid-cols-1 lg:grid-cols-[minmax(9rem,0.33fr)_1fr] gap-[clamp(1.5rem,5vw,7rem)] p-[clamp(4rem,10vw,10rem)] px-[var(--page-gutter)] border-b border-rule bg-paper"
      aria-labelledby="contact-heading"
    >
      {/* Coluna Esquerda: Rótulo */}
      <div className="label-mono text-soft">05 / CONTATO</div>

      {/* Coluna Direita */}
      <div>
        <h2
          id="contact-heading"
          className="font-serif font-normal text-[clamp(2.3rem,5.1vw,5.7rem)] tracking-[-0.06em] leading-[0.94] max-w-[16ch] mb-[clamp(2.25rem,5vw,4.75rem)] text-ink"
        >
          Iniciar Diálogo.
        </h2>

        {/* Caixa de Destaque */}
        <div className="border border-rule p-[clamp(1.4rem,3vw,2.4rem)] flex flex-col justify-between max-w-[42rem] space-y-8 bg-paper">
          <p className="font-serif font-normal text-[clamp(1.4rem,2.5vw,2.2rem)] leading-[1.03] text-ink">
            Tem um projeto de engenharia, uma posição full-stack ou uma arquitetura que precisa de revisão crítica?
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 border-t border-quiet">
            <a
              href={`mailto:${personalInfo.email}`}
              className="label-mono text-ink text-[0.78rem] tracking-wider no-underline hover:text-soft"
            >
              {personalInfo.email} ↗
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono text-ink text-[0.78rem] tracking-wider no-underline hover:text-soft"
            >
              LINKEDIN ↗
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono text-ink text-[0.78rem] tracking-wider no-underline hover:text-soft"
            >
              GITHUB ↗
            </a>
            <a
              href={`https://wa.me/351939347977`}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono text-ink text-[0.78rem] tracking-wider no-underline hover:text-soft"
            >
              {personalInfo.phone} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
