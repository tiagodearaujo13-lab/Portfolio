'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { copyByLanguage } from '@/data/i18n';
import CvDownloadModal from '@/components/CvDownloadModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang, setLanguage } = useLanguage();
  const copy = copyByLanguage[lang];

  return (
    <>
      <header
        className="w-full flex justify-between items-center py-5 px-[var(--page-gutter)] border-b border-rule bg-paper"
        role="banner"
      >
        {/* Esquerda: Wordmark */}
        <a
          href="#"
          className="font-mono text-xs font-medium tracking-widest text-ink uppercase no-underline hover:no-underline"
          aria-label={copy.nav.homeAria}
        >
          ~/tiago.dev
        </a>

        {/* Direita: Nota + Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <span className="hidden lg:inline text-soft font-mono text-[0.66rem] uppercase tracking-wider text-right">
            {copy.nav.role}
          </span>

          <nav
            aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'}
            className="flex items-center gap-4 md:gap-6 font-mono text-[0.66rem] uppercase tracking-wider"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-ink underline underline-offset-4 hover:text-soft bg-transparent border-none cursor-pointer font-mono text-[0.66rem] uppercase tracking-wider p-0"
              aria-label={copy.nav.cvAria}
            >
              {copy.nav.cv}
            </button>
            <a
              href="https://github.com/tiagodearaujo13-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 hover:text-soft"
              aria-label={copy.nav.githubAria}
            >
              {copy.nav.githubLabel}
            </a>
            <a
              href="https://www.linkedin.com/in/tiago-araújofrancisco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 hover:text-soft"
              aria-label={copy.nav.linkedinAria}
            >
              {copy.nav.linkedinLabel}
            </a>
            <a
              href="#contato"
              className="text-ink underline underline-offset-4 hover:text-soft"
              aria-label={copy.nav.contactAria}
            >
              {copy.nav.contact}
            </a>
          </nav>

          <div className="flex items-center border border-rule font-mono text-[0.66rem] uppercase tracking-wider" aria-label={copy.nav.languageAria}>
            <button type="button" onClick={() => setLanguage('pt')} className={`px-2.5 py-1 transition-colors ${lang === 'pt' ? 'bg-[var(--ink)] text-[var(--paper)] font-bold' : 'text-[var(--soft-ink)] hover:text-[var(--ink)]'}`} aria-pressed={lang === 'pt'}>PT</button>
            <span className="text-soft" aria-hidden="true">|</span>
            <button type="button" onClick={() => setLanguage('en')} className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-[var(--ink)] text-[var(--paper)] font-bold' : 'text-[var(--soft-ink)] hover:text-[var(--ink)]'}`} aria-pressed={lang === 'en'}>EN</button>
          </div>
        </div>
      </header>

      <CvDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
