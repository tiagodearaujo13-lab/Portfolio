'use client';

import { personalInfo } from '@/data/content';
import SystemArchitectureGraphic from './SystemArchitectureGraphic';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="grid grid-cols-1 lg:grid-cols-[minmax(9rem,0.33fr)_1fr] gap-[clamp(1.5rem,5vw,7rem)] p-[clamp(4rem,10vw,10rem)] px-[var(--page-gutter)] border-b border-rule bg-paper"
      aria-labelledby="about-heading"
    >
      {/* Coluna Esquerda: Rótulo */}
      <div className="label-mono text-soft">01 / PERFIL &amp; FILOSOFIA DE ENGENHARIA</div>

      {/* Coluna Direita */}
      <div>
        <ScrollReveal direction="left">
          <h2
            id="about-heading"
            className="font-serif font-normal text-[clamp(2.3rem,5.1vw,5.7rem)] tracking-[-0.06em] leading-[0.94] max-w-[20ch] mb-[clamp(2.25rem,5vw,4.75rem)] text-ink"
          >
            {personalInfo.bioHeadline}
          </h2>
        </ScrollReveal>

        <div className="space-y-[clamp(1.5rem,4vw,3.5rem)] max-w-[63rem]">
          {personalInfo.aboutParagraphs.map((paragraph, index) => (
            <ScrollReveal key={index} direction="left" delay={100}>
              <p className="font-serif text-[clamp(1.05rem,1.65vw,1.42rem)] leading-[1.45] text-ink">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}

          {/* Gráfico Esquemático de Arquitetura de Software */}
          <ScrollReveal direction="up" delay={250}>
            <SystemArchitectureGraphic />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
