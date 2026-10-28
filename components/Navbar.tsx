'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { copyByLanguage } from '@/data/i18n';
import CvDownloadModal from '@/components/CvDownloadModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lang, setLanguage } = useLanguage();
  const copy = copyByLanguage[lang];
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      try {
        if (!localStorage.getItem('portfolio_theme')) root.dataset.theme = media.matches ? 'dark' : 'light';
      } catch { /* A preferência do sistema continua a ser usada sem armazenamento. */ }
    };
    media.addEventListener('change', onSystemChange);
    return () => { observer.disconnect(); media.removeEventListener('change', onSystemChange); };
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem('portfolio_theme', next); } catch { /* O tema mantém-se durante esta visita. */ }
  };
  const themeLabel = lang === 'pt' ? (theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');

  return (
    <>
      <header
        className="w-full flex flex-wrap gap-4 justify-between items-center py-5 px-[var(--page-gutter)] border-b border-rule bg-paper"
        role="banner"
      >
        {/* Esquerda: Wordmark */}
        <a
          href="#"
          className="inline-flex min-h-[44px] items-center font-mono text-xs font-medium tracking-widest text-ink uppercase no-underline hover:no-underline"
          aria-label={copy.nav.homeAria}
        >
          ~/tiago.dev
        </a>

        {/* Direita: Nota + Links */}
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 md:gap-8">
          <span className="hidden lg:inline text-soft font-mono text-[0.66rem] uppercase tracking-wider text-right">
            {copy.nav.role}
          </span>

          <nav
            aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'}
            className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 md:gap-x-6 font-mono text-[0.66rem] uppercase tracking-wider"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-ink underline underline-offset-4 hover:text-soft bg-transparent border-none cursor-pointer font-mono text-[0.66rem] uppercase tracking-wider p-0"
              aria-label={copy.nav.cvAria}
            >
              {copy.nav.cv}
            </button>
            <a
              href="https://github.com/tiagodearaujo13-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-ink underline underline-offset-4 hover:text-soft"
              aria-label={copy.nav.githubAria}
            >
              {copy.nav.githubLabel}
            </a>
            <a
              href="https://www.linkedin.com/in/tiago-araújofrancisco/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-ink underline underline-offset-4 hover:text-soft"
              aria-label={copy.nav.linkedinAria}
            >
              {copy.nav.linkedinLabel}
            </a>
            <a
              href="#contato"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-ink underline underline-offset-4 hover:text-soft"
              aria-label={copy.nav.contactAria}
            >
              {copy.nav.contact}
            </a>
          </nav>

          <button type="button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel} className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-rule text-ink hover:bg-ink hover:text-paper">
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <div className="flex items-center border border-rule font-mono text-[0.66rem] uppercase tracking-wider" aria-label={copy.nav.languageAria}>
            <button type="button" onClick={() => setLanguage('pt')} className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-2.5 py-1 transition-colors ${lang === 'pt' ? 'bg-[var(--ink)] text-[var(--paper)] font-bold' : 'text-[var(--soft-ink)] hover:text-[var(--ink)]'}`} aria-pressed={lang === 'pt'}>PT</button>
            <span className="text-soft" aria-hidden="true">|</span>
            <button type="button" onClick={() => setLanguage('en')} className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-[var(--ink)] text-[var(--paper)] font-bold' : 'text-[var(--soft-ink)] hover:text-[var(--ink)]'}`} aria-pressed={lang === 'en'}>EN</button>
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
