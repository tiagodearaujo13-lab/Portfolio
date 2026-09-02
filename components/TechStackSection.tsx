'use client';

import { skills } from '@/data/content';

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="grid grid-cols-1 lg:grid-cols-[minmax(9rem,0.33fr)_1fr] gap-[clamp(1.5rem,5vw,7rem)] p-[clamp(4rem,10vw,10rem)] px-[var(--page-gutter)] border-b border-rule bg-paper"
      aria-labelledby="tech-heading"
    >
      {/* Coluna Esquerda: Rótulo */}
      <div className="label-mono text-soft">03 / TECH STACK</div>

      {/* Coluna Direita */}
      <div>
        <h2
          id="tech-heading"
          className="font-serif font-normal text-[clamp(2.3rem,5.1vw,5.7rem)] tracking-[-0.06em] leading-[0.94] max-w-[16ch] mb-[clamp(2.25rem,5vw,4.75rem)] text-ink"
        >
          Taxonomia de Engenharia.
        </h2>

        {/* Grade de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,4vw,4rem)]">
          {skills.map((cat) => (
            <div key={cat.category} className="border-t border-rule pt-6 space-y-4">
              <h3 className="label-mono text-ink font-semibold tracking-widest">
                {cat.category}
              </h3>
              <p className="label-mono text-soft leading-relaxed text-[0.72rem]">
                {cat.items.join(' — ').toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
