'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { copyByLanguage } from '@/data/i18n';
import CvDownloadModal from '@/components/CvDownloadModal';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang } = useLanguage();
  const copy = copyByLanguage[lang];

  return (
    <>
      <section
        id="hero"
        className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] min-h-[min(48rem,calc(100svh-3.6rem))] border-b border-rule bg-paper"
        aria-label={copy.hero.statement}
      >
        {/* Coluna Esquerda */}
        <ScrollReveal direction="left" className="h-full">
        <div className="flex h-full flex-col justify-between p-[clamp(2rem,6vw,6rem)] px-[var(--page-gutter)] py-[clamp(2rem,4vw,4rem)]">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="label-mono text-soft">{copy.hero.eyebrow}</span>
            <span className="label-mono px-2 py-0.5 border border-rule text-ink">
              {copy.hero.availability}
            </span>
          </div>

          {/* H1 de Impacto */}
          <h1 className="font-sans font-normal text-[clamp(3.8rem,9.5vw,9.5rem)] leading-[0.8] tracking-[-0.08em] my-[clamp(2rem,6vw,4rem)] text-ink max-w-[9ch]">
            Tiago
            <br />
            Francisco
          </h1>

          {/* Statement + Metadados + CTAs */}
          <div className="space-y-6">
            <p className="font-serif text-[clamp(1.15rem,1.65vw,1.55rem)] leading-[1.25] text-ink max-w-[36rem]">
              {copy.hero.statement}
            </p>

            <ScrollReveal direction="up" delay={200}>
            <div className="label-mono text-soft flex flex-wrap gap-x-4 gap-y-1">
              <span>{copy.hero.role}</span>
              <span>·</span>
              <span>{copy.hero.location.toUpperCase()}</span>
            </div>
            </ScrollReveal>

            {/* Botões de Ação */}
            <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projetos"
                className="label-mono bg-ink text-paper px-6 py-3 no-underline hover:bg-soft-ink hover:text-paper"
                aria-label="Navegar até a secção de projetos"
              >
                {copy.hero.viewProjects}
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="label-mono bg-paper text-ink border border-rule px-6 py-3 cursor-pointer hover:bg-ink hover:text-paper"
                aria-label={copy.hero.cvAria}
              >
                {copy.hero.downloadCv}
              </button>
              <a
                href="#contato"
                className="label-mono bg-paper text-ink border border-rule px-6 py-3 no-underline hover:bg-ink hover:text-paper"
                aria-label={copy.hero.contactAria}
              >
                {copy.hero.getInTouch}
              </a>
            </div>
            </ScrollReveal>
          </div>
        </div>
        </ScrollReveal>

        {/* Coluna Direita (Retrato Retangular P&B) */}
        <ScrollReveal direction="right" className="relative min-h-[24rem] lg:min-h-full">
        <div className="relative min-h-[24rem] lg:min-h-full bg-[#e5e5e5] border-t lg:border-t-0 lg:border-l border-rule overflow-hidden scanlines-overlay">
          <Image
            src="/assets/tiago.webp"
            alt="Retrato P&B de Tiago Araújo Francisco"
            fill
            className="object-cover grayscale contrast-[1.25] brightness-[1.05] mix-blend-multiply"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute bottom-0 inset-x-0 bg-[rgba(0,0,0,0.88)] text-paper px-4 py-3 flex justify-between items-center label-mono z-10">
            <span>Tiago Francisco</span>
            <span>0001 / P&amp;B</span>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <CvDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
