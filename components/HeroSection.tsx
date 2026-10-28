'use client';

import { useState, type PointerEvent } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { copyByLanguage } from '@/data/i18n';
import CvDownloadModal from '@/components/CvDownloadModal';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--circuit-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--circuit-y', `${event.clientY - rect.top}px`);
  };
  const { lang } = useLanguage();
  const copy = copyByLanguage[lang];

  return (
    <>
      <section
        id="hero"
        onPointerMove={handlePointerMove}
        className="hero-circuit grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] min-h-[min(48rem,calc(100svh-3.6rem))] border-b border-rule bg-paper"
        aria-label={copy.hero.statement}
      >
        <svg className="hero-circuit-layer" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="hero-board" width="300" height="240" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M0 35h52l22 22h80v35h48l28-28h70M0 130h46l24-24h50v42h76l25 25h79M0 207h76l20-20h62v-25h41l28-28h73M25 0v20l25 25M130 0v25l20 20M250 0v42l-20 20M270 240v-38l-25-25" />
                <rect x="125" y="95" width="52" height="42" /><rect x="85" y="48" width="20" height="20" />
                <circle cx="202" cy="92" r="4" /><circle cx="70" cy="106" r="4" /><circle cx="158" cy="187" r="4" /><circle cx="245" cy="177" r="4" />
              </g>
            </pattern>
          </defs>
          <rect width="1200" height="700" fill="url(#hero-board)" />
        </svg>
        {/* Coluna Esquerda */}
        <ScrollReveal direction="left" className="relative z-10 h-full">
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
        <ScrollReveal direction="right" className="relative z-10 min-h-[24rem] lg:min-h-full">
        <div className="relative min-h-[24rem] lg:min-h-full bg-[#e5e5e5] border-t lg:border-t-0 lg:border-l border-rule overflow-hidden scanlines-overlay">
          <Image
            src="/assets/tiago.webp"
            alt="Retrato P&B de Tiago Araújo Francisco"
            fill
            className="object-cover grayscale contrast-[1.25] brightness-[1.05] mix-blend-multiply"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute bottom-0 inset-x-0 bg-[rgba(0,0,0,0.88)] text-white px-4 py-3 flex justify-between items-center label-mono z-10">
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
